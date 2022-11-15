import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import BrandLogo from 'components/Illustrations/BrandLogo'
import { Link as RouterLink } from 'react-router-dom'
function InformationTitle() {
  const color = useColorModeValue('black', 'white')
  return (
    <Container
      maxW='container.md' backgroundImage={() => { <BrandLogo color='pink' /> }}
    >
      <Stack
        textAlign='center'
        align='center'
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight='110%'
        >
          ¿Has pensado en cambiar tu medio de transporte{' '}
          <Text as='span' color='#f687b3'>
            por uno eléctrico?
          </Text>
        </Heading>
        <Text color={color} maxW='3xl'>
          Electro car puede ayudarte en esta decisión, nuestra página provee información general sobre los transportes eléctricos, además nuestro sitio web posee una tienda para que veas todas las variedades y precios de los medios de transporte eléctricos.
        </Text>
        <Stack spacing={6} direction='row'>
          <Link as={RouterLink} to='/'>
            <Button
              rounded='full'
              px={6}
              colorScheme='pink'
            >
              Ir a la tienda
            </Button>
          </Link>
          <Link href='#electricCars'>
            <Button rounded='full' px={6}>
              Mas información
            </Button>
          </Link>
        </Stack>
        <Flex w={['full', 'md']}>
          <BrandLogo
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
            color='#f687b3'
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default InformationTitle
