import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const configTheme = {
  initialColorMode: 'system'
}

export const theme = extendTheme({
  config: configTheme,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.50', '#161c26')(props)
      }
    })
  }
})
