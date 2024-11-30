'use client'

import { useEffect, useState } from 'react'
import { Button, Input } from '@/components/ui'
import { Flame, Mail } from 'lucide-react'
import type { User } from 'firebase/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  registerAuthListener,
  signInWithGoogle,
} from '@/auth/firebase'
import { Link, useNavigate } from 'react-router'

export const AuthPage = () => {
  const [user, setUser] = useState<User | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(true)
  const navigate = useNavigate()

  useEffect(
    () => {
      const unsub = registerAuthListener((user) => {
        setUser(user)
        console.log({ user })
        if (user) {
          navigate('/calendar')
        }
      })

      return unsub
    },
    [registerAuthListener] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(email, password)
      } else {
        await signInWithEmailAndPassword(email, password)
      }
    } catch (error) {
      console.error('Error with email authentication', error)
    }
  }

  return (
    <>
      <div className="absolute top-5 right-5">
        {
          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm hover:underline"
          >
            {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
          </Button>
        }
      </div>
      <div className="flex flex-col sm:flex-row bg-black text-white">
        <div className="flex-1 flex flex-col p-8 border-r border-gray-800">
          <div className="flex items-center space-x-2 mb-8">
            <Flame className="w-6 h-6 text-white" />
            <span className="text-lg font-semibold">Flex Co</span>
          </div>
          <img
            src="philip-martin.jpg"
            alt="Man in black turtleneck and orange beanie overlooking a city"
            className="rounded-2xl max-h-[65vh] object-contain transform "
          />
          <div className="p-[5%] flex flex-col items-center">
            <blockquote className="text-2xl font-semibold mb-4">
              “By leveraging Flex, I&apos;ve achieved a 30% boost in sales and
              optimized my workflow for unmatched efficiency”
            </blockquote>
            <p className="text-gray-400">Alex Reed</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-md space-y-8">
              {user ? (
                <div className="text-center">
                  <h2 className="text-3xl font-bold">
                    Welcome, {user.displayName || user.email}
                  </h2>
                  <p className="text-gray-400 mt-2">You are now signed in!</p>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <h2 className="text-3xl font-bold">
                      {isSignUp
                        ? 'Create an account'
                        : 'Sign in to your account'}
                    </h2>
                    <p className="text-gray-400 mt-2">
                      Enter your email below to{' '}
                      {isSignUp ? 'create your account' : 'sign in'}
                    </p>
                  </div>
                  <form className="space-y-4" onSubmit={handleEmailAuth}>
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      className="bg-black border-gray-700 text-white placeholder-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="bg-black border-gray-700 text-white placeholder-gray-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-white text-black hover:bg-gray-200"
                    >
                      {isSignUp ? 'Sign Up with Email' : 'Sign In with Email'}
                    </Button>
                  </form>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-700"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-black px-2 text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-black border-gray-700 text-white"
                    onClick={signInWithGoogle}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <p className="text-center text-sm text-gray-400">
                    By clicking continue, you agree to our{' '}
                    <Link to="#" className="underline hover:text-white">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="#" className="underline hover:text-white">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
