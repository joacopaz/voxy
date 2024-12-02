import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  // signInWithRedirect, not working
  signOut,
  type User,
} from 'firebase/auth'

import type { IAuthContext } from '@/components/auth/AuthContext'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  // signInWithRedirect(auth, provider)
  signInWithPopup(auth, provider)
}

export const signUp: IAuthContext['signUp'] = async (
  email,
  password,
  provider
) => {
  try {
    switch (provider) {
      case 'emailAndPassword':
        await createUserWithEmailAndPassword(auth, email, password)
        break
      case 'google':
        await signInWithGoogle()
        break
    }
  } catch (error) {
    console.error({ error })
    throw new Error((error as Error).message)
  }
}

export const login: IAuthContext['login'] = async (
  email,
  password,
  provider
) => {
  try {
    switch (provider) {
      case 'emailAndPassword':
        await signInWithEmailAndPassword(auth, email, password)
        break
      case 'google':
        await signInWithGoogle()
        break
    }
  } catch (error) {
    console.error({ error })
    throw new Error((error as Error).message)
  }
}

export const logout: IAuthContext['logout'] = async () => {
  await signOut(auth)
}

export const onAuthStateChangedListener = (cb: (user: User | null) => void) => {
  const unsub = onAuthStateChanged(auth, (user) => {
    cb(user)
  })

  return unsub
}
