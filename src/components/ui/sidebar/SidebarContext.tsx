import { createContext, useContext } from 'react'

export interface ISidebarContext {
  isOpen: boolean
  isMobile: boolean
  toggleSidebar: () => void
  sideBarWidthPxs: '260px' | '64px'
}

export const SidebarContext = createContext<ISidebarContext | null>(null)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return { ...context, sideBarWidthPxs: context.isOpen ? '260px' : '64px' }
}
