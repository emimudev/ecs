import { Box } from '@chakra-ui/react'

function Surface({ children, ...props }) {
  return (
    <Box
      borderRadius='lg'
      border='1px solid'
      _dark={{
        bg: 'gray.800',
        borderColor: 'gray.700'
      }}
      _light={{
        bg: 'white',
        borderColor: 'gray.200'
      }}
      shadow='md'
      px={{
        base: '4',
        md: '10'
      }}
      py='5'
      {...props}
    >
      {children}
    </Box>
  )
}

export default Surface
