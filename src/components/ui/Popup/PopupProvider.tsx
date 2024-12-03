import type { PropsWithChildren } from 'react'
import { useMemo, useState } from 'react'

import { PopupContext, type Popups } from './PopupContext'

export const PopupsProvider = ({ children }: PropsWithChildren) => {
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false)
  const [isClientDetailsOpen, setIsClientDetailsOpen] = useState(false)

  const value: Popups = useMemo(() => {
    return {
      clientDetails: {
        isOpen: isClientDetailsOpen,
        setIsOpen: setIsClientDetailsOpen,
      },
      eventDialog: {
        isOpen: isEventDialogOpen,
        setIsOpen: setIsEventDialogOpen,
      },
    }
  }, [isEventDialogOpen, isClientDetailsOpen])

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
}
