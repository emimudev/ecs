import {
  Collapse,
  Flex,
  Stack,
  useColorModeValue,
  VStack,
  useBreakpointValue,
  Divider
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { IoMdLogOut } from 'react-icons/io'
import { RiSettings4Fill } from 'react-icons/ri'
import { useNavbarContext } from '../Context'
import { NAV_ITEMS } from '../nav-items'
import { logoutAction } from 'redux/slices/auth.slice'
import Authenticated from 'components/Authenticated'
import Unauthenticated from 'components/Unauthenticated'
import AuthenticatedHeader from './AuthenticatedHeader'
import UnauthenticatedHeader from './UnauthenticatedHeader'
import MobileNavItem from './MobileNavItem'

function MobileNavigation() {
  const { isMobileOpen } = useNavbarContext()

  return (
    <Collapse in={isMobileOpen} animateOpacity>
      <Flex
        fontSize='sm'
        px={4}
        py={3}
        direction='column'
        bg={useColorModeValue('white', 'gray.800')}
        display={{ lg: 'none' }}
      >
        <VStack align='flex-start' display={useBreakpointValue({ md: 'none' })}>
          <Authenticated>
            <AuthenticatedHeader />
          </Authenticated>
          <Unauthenticated>
            <UnauthenticatedHeader />
          </Unauthenticated>
        </VStack>
        <Stack spacing={2}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Stack>
        <MobileNavigationFooter />
      </Flex>
    </Collapse>
  )
}

function MobileNavigationFooter() {
  const dispatcher = useDispatch()
  const handleLogout = () => dispatcher(logoutAction())

  return (
    <Stack display={{ md: 'none' }}>
      <Divider style={{ marginTop: '0.5rem' }} />
      <MobileNavItem
        key='Ajustes'
        label='Ajustes'
        onClick={() => console.log('click')}
        icon={RiSettings4Fill}
      />
      <Authenticated>
        <MobileNavItem
          key='Salir'
          label='Cerrar sesión'
          onClick={handleLogout}
          icon={IoMdLogOut}
        />
      </Authenticated>
    </Stack>
  )
}

export default MobileNavigation
