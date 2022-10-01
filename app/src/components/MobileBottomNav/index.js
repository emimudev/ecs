import { memo } from 'react'
import { Link as RouterLink, useMatch } from 'react-router-dom'
import { Button, Flex, Icon, Link, Spacer } from '@chakra-ui/react'
import { BiSearchAlt, BiHomeAlt, BiBell, BiUser, BiPlusCircle, BiCustomize, BiLogInCircle } from 'react-icons/bi'
import Authenticated from 'components/Authenticated'
import Unauthenticated from 'components/Unauthenticated'
import { useDispatch } from 'react-redux'
import { openSignInAction } from 'redux/slices/auth.slice'
import PublishAdButton from 'components/PublishAdButton'

function MobileBottomNav() {
  const dispatcher = useDispatch()

  const handleLogin = () => {
    dispatcher(openSignInAction())
  }

  return (
    <Flex
      direction='row'
      display={{ base: 'flex', sm: 'none' }}
      position='sticky'
      height='50px'
      bottom='0'
      left='0'
      right='0'
      borderTop='2px solid'
      zIndex='calc(var(--chakra-zIndices-sticky) - 1)'
      _dark={{ bg: 'rgb(26, 32, 44)', borderColor: 'gray.700' }}
      _light={{ bg: 'white', borderColor: 'gray.200' }}
      flexWrap='nowrap'
    >
      <Unauthenticated>
        <BottomNavItem icon={BiHomeAlt} showOnlyIcon to='/'>
          Inicio
        </BottomNavItem>
        <BottomNavItem icon={BiSearchAlt} showOnlyIcon to='/search'>
          Buscar
        </BottomNavItem>
        <BottomNavItem icon={BiCustomize} showOnlyIcon to='/categories'>
          Categorías
        </BottomNavItem>
        <BottomNavItem icon={BiLogInCircle} showOnlyIcon onClickCapture={handleLogin}>
          Ingresar
        </BottomNavItem>
      </Unauthenticated>
      <Authenticated>
        <BottomNavItem icon={BiHomeAlt} showOnlyIcon to='/'>
          Inicio
        </BottomNavItem>
        <BottomNavItem icon={BiSearchAlt} showOnlyIcon to='/search'>
          Buscar
        </BottomNavItem>
        <Spacer flex='1 1 100%' />
        <PublishAdButton btn={
          ({ onClick }) =>
            <Button
              colorScheme='blue'
              position='absolute'
              top='calc(-15px)'
              left='calc(50% - 25px)'
              w='50px'
              h='50px'
              borderRadius='full'
              fontSize='xs'
              onClick={onClick}
            >
              <Icon as={BiPlusCircle} h='6' w='6' />
            </Button>
        }
        />
        <BottomNavItem icon={BiBell} showOnlyIcon to='/notifications'>
          Notificaciones
        </BottomNavItem>
        <BottomNavItem icon={BiUser} showOnlyIcon to='/settings/profile'>
          Perfil
        </BottomNavItem>
      </Authenticated>
    </Flex>
  )
}

function BottomNavItem({
  children,
  to = '#',
  icon = null,
  showOnlyIcon = false,
  onClickCapture = null
}) {
  const match = useMatch(to)
  return (
    <Flex
      flex='1 1 100%'
      display='flex'
      align='center'
      onClickCapture={onClickCapture}
    >
      <Link
        as={RouterLink}
        to={to}
        h='full'
        w='full'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        fontSize='xs'
        transition='background 0.8s'
        backgroundPosition='center'
        _hover={{
          bgPos: 'center',
          backgroundSize: '15000%'
        }}
        _active={{
          backgroundSize: '100%',
          transition: 'background 0s'
        }}
        _light={{
          color: 'blackAlpha.800',
          _hover: {
            bgGradient: 'radial(circle, transparent 1%, gray.100 1%)',
            bgColor: 'gray.200'
          },
          _active: {
            bgColor: 'gray.300'
          }
        }}
        _dark={{
          color: 'whiteAlpha.600',
          _hover: {
            bgGradient: 'radial(circle, transparent 1%, gray.600 1%)',
            bgColor: 'gray.700'
          }
        }}
      >
        {icon && <Icon as={icon} h='6' w='6' color={match && 'blue.500'} />}
        {!showOnlyIcon && children}
      </Link>
    </Flex>
  )
}

export default memo(MobileBottomNav)
