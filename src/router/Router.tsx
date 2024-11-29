import { Routes, Route } from "react-router"
import { Landing } from "../pages/landing/Landing"

export const Router = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
  </Routes>
)
