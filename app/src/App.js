import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import ColorModeSwitcher from 'components/ColorModeSwitcher'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
    </ChakraProvider>
  )
}

export default App
