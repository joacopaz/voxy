import { useContext } from 'react'

import { PopupContext } from './PopupContext'

export const usePopups = () => {
  const context = useContext(PopupContext)

  if (!context) {
    throw Error(
      'No popup context found, use popup context inside of a PopupContextProvider'
    )
  }

  return context
}
