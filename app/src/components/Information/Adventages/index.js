import {
  Box,
  Container,
  Text,
  SimpleGrid,
  useColorModeValue,
  Stack,
  Heading
} from '@chakra-ui/react'
const weakness = [
  {
    icon: '⌛',
    title: 'Mayor tiempo de recarga',
    description:
            'Este tipo de vehículos solo puede recorrer cierta cantidad de kilómetros con la carga de su batería, si la batería está baja se debe esperar un tiempo de carga mucho más amplio comparado tiempo de recarga de combustible.'
  },
  {
    icon: '🔋',
    title: 'Baterías poco económicas',
    description:
            'Las baterías de los autos eléctricos tienen una vida útil que va de los 8 a 10 años, por lo que es importante tener en cuenta su costo el cual va de los 1000 $ en adelante, el precio tan elevado se debe a que poseen una composición más sofisticada que las baterías de los tradicionales.'
  }

]
const adventages = [

  {
    icon: '🔧',
    title: 'Menor posibilidad de averías',
    description:
            'Los motores eléctricos tienen la particularidad de ser más ligeros, compactos y simples que los motores de combustión. Al estar compuestos por una menor cantidad de piezas se tiene una menor posibilidad de avería.'
  },
  {
    icon: '🌎',
    title: 'Ninguna emisión de gases',
    description:
            'Los automóviles que funcionan 100% con energía eléctrica no generan ninguna emisión de gases durante su funcionamiento, por lo que son alternativa muy buena para cuidar el medio ambiente.'
  }, {
    icon: '😄',
    title: 'Mejor experiencia conducción',
    description:
            'Los vehículos eléctricos gracias a la composición de su motor son menos ruidosos al desplazarse, además son muy fáciles de conducir al no poseer embrague ni caja de cambios, por último algunos modelos de este tipo de vehículo cuentan con conducción autónoma.'
  },
  {
    icon: '🏁',
    title: 'Un menor mantenimiento',
    description:
            'A los vehículos eléctricos se les debe brindar menos mantenimiento que los transportes de combustión, porque no requieren cambios de aceite, filtros y lubricantes. El único mantenimiento que se le debe dar a los vehículos eléctricos es el cambio de neumáticos y la limpieza de los filtros de polvo.'
  }
]

function Properties({ type = 'Adventages' }) {
  function AdventagesTitle() {
    return (
      <Heading
        fontWeight={400}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight='110%'
      >
        Ventajas de los{' '}
        <Text as='span' color='#f687b3'>
          vehículos eléctricos
        </Text>
      </Heading>
    )
  }
  function WeaknessTitle() {
    return (
      <Heading
        fontWeight={400}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight='110%'
      >
        <Text as='span' color='#f687b3'>Desventajas de los</Text>{' '}vehículos eléctricos
      </Heading>
    )
  }
  function Adventages() {
    return (
      <>
        {adventages.map(({ title, description, icon }, i) => (
          <Box p={4} rounded='md' key={`highlight_${i}`}>
            <Text fontSize='4xl'>{icon}</Text>

            <Text fontWeight={500} color='#f687b3'>{title}</Text>

            <Text color={color} mt={4} textAlign='left'>
              {description}
            </Text>
          </Box>
        ))}
      </>
    )
  }
  function Weakness() {
    return (
      <>
        {weakness.map(({ title, description, icon }, i) => (
          <Box p={4} rounded='md' key={`highlight_${i}`}>
            <Text fontSize='4xl'>{icon}</Text>

            <Text fontWeight={500} color='#f687b3'>{title}</Text>

            <Text color={color} mt={4} textAlign='left'>
              {description}
            </Text>
          </Box>
        ))}
      </>
    )
  }

  const color = useColorModeValue('black', 'white')

  return (
    <Box>
      <Container maxW='container.md' centerContent py={[8, 28]}>
        <Stack
          textAlign='center'
          align='center'
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          {
          (type === 'Adventages') &&
            <AdventagesTitle />
          }
          {
          (type === 'Weakness') &&
            <WeaknessTitle />
          }
        </Stack>
        <SimpleGrid spacingX={10} spacingY={20} minChildWidth='300px'>
          {
          (type === 'Adventages') &&
            <Adventages />
          }
          {
          (type === 'Weakness') &&
            <Weakness />
          }
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Properties
