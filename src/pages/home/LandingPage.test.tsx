import { render } from '@testing-library/react'

import { LandingPage } from './LandingPage'

test('Render Landing Page', () => {
  const { getByText } = render(<LandingPage />)
  const voxy = getByText('© 2024 Voxy')
  expect(voxy).toBeInTheDocument()
})
