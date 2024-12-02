import { Routes, Route } from 'react-router'

import { AuthPage } from '@/pages/auth/AuthPage'
import { LandingPage } from '@/pages/home/LandingPage'

export const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/calendar" element={<>🍄 Work in progress 🍄</>} />
  </Routes>
)
