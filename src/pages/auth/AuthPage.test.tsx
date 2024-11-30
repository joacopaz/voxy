import { render } from '@testing-library/react'
import { AuthPage } from './AuthPage'

test('Render Auth Page', () => {
  const { getByText } = render(<AuthPage />)
  const flexCo = getByText('Flex Co')
  expect(flexCo).toBeInTheDocument()
})
