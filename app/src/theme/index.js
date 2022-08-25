import { extendTheme } from '@chakra-ui/react'

const configTheme = {
  initialColorMode: 'system'
}

export const theme = extendTheme({
  config: configTheme
})
