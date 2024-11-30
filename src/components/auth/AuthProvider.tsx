import { useState, useEffect, type PropsWithChildren } from 'react'
import type { User } from 'firebase/auth'
import {
  signUp,
  login,
  logout,
  onAuthStateChangedListener,
} from '@/auth/firebase'
import { AuthContext } from './AuthContext'
import { useLocation, useNavigate } from 'react-router'

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user)
      if (user && location.pathname === '/auth') {
        navigate('/calendar')
      }
    })
    return unsubscribe
  }, [location.pathname])

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
