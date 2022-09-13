import App from 'App'
import { render } from '@testing-library/react'
import { mockMatchMedia } from './matchMedia.mock'

test('Rendering app', () => {
  mockMatchMedia()
  render(<App />)
})
