import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword as GCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as GSignInWithEmailAndPassword,
  type User,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const registerAuthListener = (
  onResolved: (user: User | null) => void
) => {
  const unsub = onAuthStateChanged(auth, (currentUser) => {
    onResolved(currentUser)
  })
  return unsub
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  provider.addScope('email')
  await signInWithRedirect(auth, provider)
  return await getRedirectResult(auth)
}

export const handleSignOut = () => signOut(auth)

export const createUserWithEmailAndPassword = (
  email: string,
  password: string
) => GCreateUserWithEmailAndPassword(auth, email, password)

export const signInWithEmailAndPassword = (email: string, password: string) =>
  GSignInWithEmailAndPassword(auth, email, password)
