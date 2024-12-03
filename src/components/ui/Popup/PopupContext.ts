import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

type PopupTypes = 'eventDialog' | 'clientDetails'

type PopupState = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export type Popups = Record<PopupTypes, PopupState>

const initialState: PopupState = { isOpen: false, setIsOpen: () => {} }

export const PopupContext = createContext<Popups>({
  clientDetails: initialState,
  eventDialog: initialState,
})
