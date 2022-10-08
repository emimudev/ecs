import { useColorModeValue } from '@chakra-ui/react'
import { matchPath, useLocation } from 'react-router-dom'

function useNavItem({ href }) {
  const location = useLocation()
  const match = href && matchPath(href, location.pathname)
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const color = useColorModeValue('gray.700', 'gray.300')
  const matchColor = useColorModeValue('pink.600', 'pink.200')

  return {
    match,
    borderColor,
    color,
    matchColor
  }
}

export default useNavItem
