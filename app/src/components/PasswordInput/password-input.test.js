import { fireEvent, render, screen } from '@testing-library/react'
import PasswordInput from '.'

test('toggle text visibility when button is clicked', () => {
  const handleChange = jest.fn()
  render(<PasswordInput value='password' onChange={handleChange} />)

  const input = screen.getByDisplayValue('password')
  expect(input).toHaveAttribute('type', 'password')

  const buttonToggle = screen.getByRole('button')

  fireEvent.click(buttonToggle)
  expect(input).toHaveAttribute('type', 'text')

  fireEvent.click(buttonToggle)
  expect(input).toHaveAttribute('type', 'password')
})
