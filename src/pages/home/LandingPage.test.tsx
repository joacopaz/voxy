import { render } from '@testing-library/react'
import { LandingPage } from './LandingPage'

test('Render Landing Page', () => {
  const { getByText } = render(<LandingPage />)
  const voxy = getByText('Obtener Voxy')
  expect(voxy).toBeInTheDocument()
})
