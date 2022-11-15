import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { IoIosOutlet, IoMdBatteryCharging } from 'react-icons/io'
import { GrTransaction } from 'react-icons/gr'
import { GiGears, GiPlug } from 'react-icons/gi'

import Carousel from '../Carousel'
import { RiTempColdLine } from 'react-icons/ri'
import { BiChip } from 'react-icons/bi'

const law = 'http://repositorio.mopt.go.cr:8080/xmlui/bitstream/handle/123456789/3903/L-9518.pdf?sequence=1&isAllowed=y'
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction='row' align='center'>
      <Flex
        w={8}
        h={8}
        align='center'
        justify='center'
        rounded='full'
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function ElectricCar() {
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Container maxW='5xl' py={[8, 28]} id='electricCars'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading
            fontWeight={400}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight='110%'
          >
            <Text as='span' color='#f687b3'>
              Transportes
            </Text>{' '}eléctricos
          </Heading>
          <Text color={color} fontSize='lg'>
            A diferencia de los transportes de combustión, los cuales utilizan combustibles fósiles para movilizarse, los transportes eléctricos utilizan la energía almacenada en sus baterías para hacer funcionar su motor, el motor eléctrico puede otorgar al vehículo constantemente su fuerza máxima en velocidades mínimas por este motivo los vehículos eléctricos solo poseen una velocidad transmisión.
          </Text>
          <Text color={color} fontSize='lg'>
            En Costa Rica se promueve la utilización de los transportes eléctricos brindándoles algunos beneficios a sus dueños, estos beneficios están marcados en la <Link href={law} color='pink.500' isExternal> ley 9518 </Link>.<br /> A continuación se presentan los componentes fundamentales de los vehículos eléctricos:
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={
                <Icon as={GiGears} color='yellow.500' w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text='Motor eléctrico'
            />
            <Feature
              icon={<Icon as={IoMdBatteryCharging} color='green.500' w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text='Batería'
            />
            <Feature
              icon={
                <Icon as={GrTransaction} color='purple.500' w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text='Transmisión'
            />
            <Feature
              icon={
                <Icon as={IoIosOutlet} color='orange.500' w={5} h={5} />
              }
              iconBg={useColorModeValue('orange.100', 'orange.900')}
              text='Puerto de carga'
            />
            <Feature
              icon={<Icon as={GiPlug} color='teal.500' w={5} h={5} />}
              iconBg={useColorModeValue('teal.100', 'teal.900')}
              text='Cargador integrado'
            />
            <Feature
              icon={
                <Icon as={RiTempColdLine} color='pink.500' w={5} h={5} />
              }
              iconBg={useColorModeValue('pink.100', 'pink.900')}
              text='Sistema de enfriamiento'
            />
            <Feature
              icon={
                <Icon as={BiChip} color='cyan.500' w={5} h={5} />
              }
              iconBg={useColorModeValue('cyan.100', 'cyan.900')}
              text='Controlador de electrónica de potencia'
            />
          </Stack>
        </Stack>
        <Flex>
          <Carousel />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
