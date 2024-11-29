import { Routes, Route } from 'react-router'
import { LandingPage } from '@/pages/home/LandingPage'

export const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
  </Routes>
)
