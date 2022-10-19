import { GiElectric } from 'react-icons/gi'
import { Icon } from '@chakra-ui/react'
import { ElectricBicycle, ElectricCar, ElectricMotorcycle } from 'components/Icons'

const CategoryItems = [
  {
    name: 'Vehículos',
    mainContent: 'Encuentra el auto que estás buscando de tu marca favorita. Tenemos autos nuevos y usados, elige el que más te gusta y vive la experiencia de un auto eléctrico.',
    extraContent: 'Toyota • Tesla • BMW • Volkswagen • Volvo • Renault • Hyundai • BYD • Kia',
    icon: <Icon as={ElectricCar} h={8} w={8} />,
    to: '/cars'
  },
  {
    name: 'Motocicletas',
    mainContent: 'Pásate a una moto eléctrica y obtén un pilotaje estimulante kilómetro tras kilómetro con una aceleración silenciosa. Echa un vistazo a los diseños innovadores de las principales marcas.',
    extraContent: 'Rieju • NIU • Silence • E-Sooner • MBA • Mobie • Horwin • Kavaki',
    icon: <Icon as={ElectricMotorcycle} h={8} w={8} />,
    to: '/motorcycles'
  },
  {
    name: 'Bicicletas',
    mainContent: 'Bicicletas eléctricas y movilidad electroasistida. Consigue tu bicicleta eléctrica usada o nueva de las marcas más reconocidas del mercado.',
    extraContent: 'Emove • KRYSTALL • Shimano • A2B • Alter Bike • Askoll • Bolt',
    icon: <Icon as={ElectricBicycle} h={8} w={8} />,
    to: '/bicycles'
  },
  {
    name: 'Accesorios y repuestos',
    mainContent: 'Consigue los accesorios y repuestos que necesitas para tu vehículo, motocicleta o bicicleta. Aquí podrás encontrar cascos, accesorios, luces, cargadores, conectores, entre otros.',
    extraContent: 'Cascos • cables • luces • cadenas • cargadores • repuestos',
    icon: <Icon as={GiElectric} h={8} w={8} />
  }
]

export { CategoryItems }
