import { useContext } from 'react'

import { AuthContext, type IAuthContext } from './AuthContext'

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
