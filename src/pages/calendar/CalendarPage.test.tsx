import { render } from '@testing-library/react'
import { vi } from 'vitest'

import { CalendarPage } from './CalendarPage'

import * as useMobileModule from '@/utils/useMobile'

vi.spyOn(useMobileModule, 'useIsMobile').mockReturnValue(false)
vi.mock('src/utils/useMobile')
Object.assign(window, { matchMedia: vi.fn() })

test('Render Landing Page', () => {
  const { getByText } = render(<CalendarPage />)
  const agregarEvento = getByText('Agregar Evento')
  expect(agregarEvento).toBeInTheDocument()
})
