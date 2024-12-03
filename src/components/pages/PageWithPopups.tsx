import type { PropsWithChildren } from 'react'

import { PopupsProvider } from '../ui/Popup/PopupProvider'

export const PageWithPopups = ({ children }: PropsWithChildren) => (
  <PopupsProvider>{children}</PopupsProvider>
)
