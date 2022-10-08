import { Link, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const SocialButton = ({ children, label, href }) => {
  return (
    <Link
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded='full'
      w={8}
      h={8}
      cursor='pointer'
      as={RouterLink}
      to={href ?? ''}
      target='_blank'
      rel='noreferrer'
      href={href}
      display='inline-flex'
      alignItems='center'
      justifyContent='center'
      _hover={{
        bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.400')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Link>
  )
}
export default SocialButton
