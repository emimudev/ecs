import { RiApps2Fill } from 'react-icons/ri'
import { MdLocalOffer } from 'react-icons/md'

export const NAV_ITEMS = [
  {
    label: 'Categorías',
    icon: RiApps2Fill,
    children: [
      {
        label: 'Vehículos nuevos',
        subLabel: 'Encuentra tu auto ideal',
        href: 'categories/new'
      },
      {
        label: 'Vehículos usados',
        subLabel: 'Revisa los vehículos usados a un excelente precio',
        href: 'categories/used'
      }
    ]
  },
  {
    label: 'Ofertas del día',
    href: '/day-offers',
    icon: MdLocalOffer
  }
]
