import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/index.css"
import { BrowserRouter } from "react-router"
import { Router } from "./router/Router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
)