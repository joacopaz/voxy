import { Routes, Route } from 'react-router'
import { LandingPage } from '@/pages/home/LandingPage'
import { AuthPage } from '@/pages/auth/AuthPage'

export const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/auth" element={<AuthPage />} />
  </Routes>
)
