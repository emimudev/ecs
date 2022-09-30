import { memo } from 'react'
import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Brand from 'components/Brand'
import SocialButton from 'components/SocialButton'

function PageFooter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'rgba(26, 32, 44, 0.85)')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW='7xl'
        py={4}
        spacing={4}
        justify='center'
        align='center'
      >
        <Flex display={{ base: 'none', sm: 'flex' }}>
          <Brand orientation='column' to={null} />
        </Flex>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={6} w={{ base: 'full', sm: 'auto' }}>
          <Link as={RouterLink} to='#'>Inicio</Link>
          <Link as={RouterLink} to='#'>Sobre nosotros</Link>
          <Link as={RouterLink} to='#'>Legal</Link>
          <Link as={RouterLink} to='#'>Contacto</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW='7xl'
          py={4}
          direction='row'
          gap={3}
          justify={{ base: 'center', md: 'space-between' }}
          align='center'
          flexWrap='wrap-reverse'
        >
          <Text textAlign={{ base: 'center', sm: 'left' }}>
            © 2022 ElectroCar Sales. Todos los derechos reservados
          </Text>
          <Stack direction='row' spacing={6} wrap='wrap'>
            <SocialButton label='Twitter' href='#'>
              <FaTwitter />
            </SocialButton>
            <SocialButton label='YouTube' href='#'>
              <FaFacebook />
            </SocialButton>
            <SocialButton label='Instagram' href='#'>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default memo(PageFooter)
