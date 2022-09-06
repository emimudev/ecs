import {
  Button,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  useColorMode,
  chakra,
  Flex,
  MenuGroup,
  useColorModeValue
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosLogOut } from 'react-icons/io'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BiHelpCircle } from 'react-icons/bi'
import { logoutAction, openSignInAction, openSignUpAction } from 'redux/states/auth.state'
import ColorModeSwitcher from 'components/ColorModeSwitcher'
import UserAvatar from 'components/UserAvatar'

function UserHud() {
  const { isLogged, user } = useSelector(state => state.auth)
  const { setColorMode } = useColorMode()
  const dispatcher = useDispatch()
  const titleMenuColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')

  if (!isLogged) {
    return <AnonymousUserHud />
  }

  const handleChange = (value) => {
    setColorMode(value)
  }

  const getCurrentTheme = () => {
    const theme = window.localStorage.getItem('chakra-ui-color-mode')
    return theme
  }

  const handleLogout = () => {
    dispatcher(logoutAction())
  }

  return (
    <Stack direction='row' align='center'>
      <Menu>
        <MenuButton>
          <UserAvatar user={user} />
        </MenuButton>
        <MenuList fontSize='sm' px={2} maxW='200px'>
          <MenuItem borderRadius='lg'>
            <Flex gap={3} align='center'>
              <UserAvatar user={user} />
              <Stack direction='column'>
                <Text noOfLines={2} fontWeight='semibold' fontSize='md' lineHeight='1.2'>
                  {`${user.name} ${user.lastname}`}
                </Text>
                <Text>Personal</Text>
              </Stack>
            </Flex>
          </MenuItem>
          <MenuItem p='0' my='2'>
            <Button
              w='full'
              size='sm'
              colorScheme='pink'
              bgGradient='linear(to-l, #ED64A6, #FF0080)'
              _hover={{ bgGradient: 'linear(to-r, #ED64A6, #FF0080)' }}
            >
              OBTENER PREMIUM
            </Button>
          </MenuItem>
          <MenuDivider />
          <MenuGroup color={titleMenuColor} title='Perfil'>
            <MenuItem borderRadius='lg'>
              Mi cuenta
            </MenuItem>
            <MenuItem borderRadius='lg'>
              Mis publicaciones
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuOptionGroup color={titleMenuColor} defaultValue={getCurrentTheme()} title='Aspecto' type='radio' onChange={handleChange}>
            <MenuItemOption value='light' borderRadius='lg' alignItems='center'>
              <Stack direction='row' align='center' gap='1'>
                <Icon h='4' w='4' as={FaSun} />
                <chakra.span>Claro</chakra.span>
              </Stack>
            </MenuItemOption>
            <MenuItemOption value='dark' borderRadius='lg'>
              <Stack direction='row' align='center' gap='1'>
                <Icon h='4' w='4' as={FaMoon} />
                <chakra.span>Oscuro</chakra.span>
              </Stack>
            </MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuItem borderRadius='lg' gap='4' alignItems='center'>
            <Icon h='5' w='5' as={BiHelpCircle} />
            Ayuda
          </MenuItem>
          <MenuItem borderRadius='lg' gap='4' alignItems='center' onClickCapture={handleLogout}>
            <Icon h='5' w='5' as={IoIosLogOut} />
            Cerrar sesión
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  )
}

function AnonymousUserHud() {
  const dispatcher = useDispatch()
  const openLoginModal = () => dispatcher(openSignInAction())
  const openSignUpModal = () => dispatcher(openSignUpAction())

  return (
    <Stack direction='row'>
      <ColorModeSwitcher />
      <Button variant='ghost' onClick={openLoginModal} borderRadius='full'>
        Iniciar sesión
      </Button>
      <Button
        colorScheme='blue'
        bg='blue.500'
        color='white'
        onClick={openSignUpModal}
        borderRadius='full'
      >
        Inscribirse
      </Button>
    </Stack>
  )
}

export default UserHud
