import {
  type ComponentProps,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { type ISidebarContext, SidebarContext } from './SidebarContext'

import { cn } from '@/utils/cn'
import { useIsMobile } from '@/utils/useMobile'

export const SidebarProvider = forwardRef<
  HTMLDivElement,
  ComponentProps<'div'> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    { defaultOpen = true, open: openProp, onOpenChange: setOpenProp, children }
    // ref
  ) => {
    const isMobile = useIsMobile()

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === 'function' ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = useCallback(() => {
      return setOpen((open) => !open)
    }, [setOpen])

    const contextValue: ISidebarContext = useMemo(() => {
      return {
        isOpen: _open,
        isMobile,
        toggleSidebar,
        sideBarWidthPxs: _open ? '260px' : '64px',
      }
    }, [_open, isMobile, toggleSidebar])

    return (
      <SidebarContext.Provider value={contextValue}>
        {children}
      </SidebarContext.Provider>
    )
  }
)

export const Sidebar = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} className="relative bg-sidebar">
      <div
        className={cn('z-10 transition-[width] ease-linear flex')}
        {...props}
      >
        <div className="flex w-full flex-col">{children}</div>
      </div>
    </div>
  )
)

export const SidebarHeader = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-2 p-2', className)}
        {...props}
      />
    )
  }
)

export const SidebarContent = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex min-h-0 flex-1 flex-col gap-2 ', className)}
        {...props}
      />
    )
  }
)
