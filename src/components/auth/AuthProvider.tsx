import type { User } from 'firebase/auth'
import { useState, useEffect, type PropsWithChildren } from 'react'

import { AuthContext } from './AuthContext'

import {
  signUp,
  login,
  logout,
  onAuthStateChangedListener,
} from '@/configs/firebase'

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
