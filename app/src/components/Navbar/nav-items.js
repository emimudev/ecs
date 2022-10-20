import { RiApps2Fill } from 'react-icons/ri'
import { Icon } from '@chakra-ui/react'
import { GiElectric } from 'react-icons/gi'
import { MdLocalOffer, MdCompare } from 'react-icons/md'
import { ElectricBicycle, ElectricCar, ElectricMotorcycle } from 'components/Icons'

export const NAV_ITEMS = [
  {
    label: 'Categorías',
    icon: RiApps2Fill,
    children: [
      {
        label: 'Vehículos',
        subLabel: 'Encuentra el auto que estás buscando de tu marca favorita.',
        href: 'cars',
        icon: <Icon as={ElectricCar} h={8} w={8} />
      },
      {
        label: 'Motocicletas',
        subLabel: 'Pásate a una moto eléctrica y obtén un pilotaje estimulante kilómetro tras kilómetro con una aceleración silenciosa',
        icon: <Icon as={ElectricMotorcycle} h={8} w={8} />,
        href: 'motorcycles'
      },
      {
        label: 'Bicicletas',
        subLabel: 'Consigue tu bicicleta eléctrica usada o nueva de las marcas más reconocidas del mercado.',
        icon: <Icon as={ElectricBicycle} h={8} w={8} />,
        href: 'bicycles'
      },
      {
        label: 'Accesorios y repuestos',
        subLabel: 'Todos los accesorios y repuestos que necesitas para tu vehículo, motocicleta o bicicleta.',
        icon: <Icon as={GiElectric} h={8} w={8} />,
        href: 'bicycles'
      }
    ]
  },
  {
    label: 'Ofertas del día',
    href: '/day-offers',
    icon: MdLocalOffer
  },
  {
    label: 'Comparador',
    href: '/compare',
    icon: MdCompare
  }
]
