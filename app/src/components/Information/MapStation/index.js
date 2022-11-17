import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

export default function MapStation() {
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Container maxW='container.xl'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading
            fontWeight={400}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight='110%'
          >Estaciones de {' '}
            <Text as='span' color='#f687b3'>recarga eléctrica</Text>
          </Heading>
          <Text color={color} fontSize='lg'>
            A continuación se muestra un mapa con las estaciones de abastecimiento para transportes eléctricos a lo largo del país que están reconocidas por el Instituto Costarricense de Electricidad.
          </Text>
        </Stack>
        <Flex>
          <iframe
            title='mapStation'
            src='https://www.google.com/maps/d/embed?mid=1OzdSlnuDclyB-H5B3-UsMIZnVVnKxJRN&ehbc=2E312F' height='400' width='100%'
            loading='lazy'
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
