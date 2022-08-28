import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const configTheme = {
  initialColorMode: 'system'
}

export const theme = extendTheme({
  config: configTheme,
  styles: {
    global: (props) => ({
      // styles for the `body`
      body: {
        bg: mode('#f8f8f8', '#161c26')(props)
      }
    })
  },
  colors: {
    primary: 'red'
  }
})
