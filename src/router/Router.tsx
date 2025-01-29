import { Routes, Route } from 'react-router'

import { AuthPage } from '@/pages/auth/AuthPage'
import { CalendarPage } from '@/pages/calendar/CalendarPage'
import { FrontDeskPage } from '@/pages/front-desk/FrontDeskPage'
import { LandingPage } from '@/pages/home/LandingPage'
import { PaymentsPage } from '@/pages/payments/PaymentsPage'
import { ReservePage } from '@/pages/reserve/ReservePage'
import { VideoCallPage } from '@/pages/videocall/VideoCallPage'

export const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/calendar" element={<CalendarPage />} />
    <Route path="/videocall" element={<VideoCallPage />} />
    <Route path="/payments" element={<PaymentsPage />} />
    <Route path="/front-desk" element={<FrontDeskPage />} />
    <Route path="/reserve" element={<ReservePage />} />
  </Routes>
)
