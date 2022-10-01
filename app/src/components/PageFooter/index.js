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
      bg={useColorModeValue('white', 'rgba(26, 32, 44, 0.85)')}
      color={useColorModeValue('gray.700', 'gray.200')}
      _light={{ boxShadow: '0 0 0 1px var(--chakra-colors-gray-300)' }}
      _dark={{ boxShadow: '0 0 0 1px var(--chakra-colors-gray-700)' }}
    >
      <Container
        as={Stack}
        maxW='7xl'
        py={4}
        gap='2'
        justify='center'
        align='center'
      >
        <Flex display={{ base: 'none', sm: 'flex' }}>
          <Brand orientation='column' to={null} />
        </Flex>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          style={{ marginTop: '0' }}
          spacing={{ base: 2, sm: 6 }}
          w={{ base: 'full', sm: 'auto' }}
          fontSize='sm'
        >
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
          <Text textAlign={{ base: 'center', sm: 'left' }} fontSize='sm'>
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
