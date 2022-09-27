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
        bg: mode('#EDF2F7', '#161c26')(props)
      }
    })
  },
  sizes: {
    navbar: '70px'
  }
})
