import { render } from '@testing-library/react'
import { Landing } from './Landing'

test('Render Landing Page', () => {
  const { getByText } = render(<Landing />)
  const voxy = getByText('Voxy')
  expect(voxy).toBeInTheDocument()
})
