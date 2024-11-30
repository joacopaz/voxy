import type { User } from 'firebase/auth'
import { createContext } from 'react'

export type Provider = 'emailAndPassword' | 'google'

export interface IAuthContext {
  user: User | null
  signUp: (email: string, password: string, provider: Provider) => Promise<void>
  login: (email: string, password: string, provider: Provider) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  signUp: Promise.resolve,
  login: Promise.resolve,
  logout: Promise.resolve,
})
