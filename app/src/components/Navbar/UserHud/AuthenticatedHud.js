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
  useColorModeValue,
  Divider,
  Center,
  useBreakpointValue,
  Badge
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BiHelpCircle, BiMessageSquareAdd } from 'react-icons/bi'
import { CgLogOut } from 'react-icons/cg'
import { logoutAction } from 'redux/slices/auth.slice'
import { useAuthState } from 'hooks/useAuthState'
import UserAvatar from 'components/UserAvatar'

function AuthenticatedHud() {
  const { user } = useAuthState()
  const { setColorMode } = useColorMode()
  const dispatcher = useDispatch()
  const titleMenuColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')

  const handleChange = (value) => setColorMode(value)
  const handleLogout = () => dispatcher(logoutAction())

  const getCurrentTheme = () => (
    window.localStorage.getItem('chakra-ui-color-mode')
  )

  return (
    <Flex direction='row' align='center' h='full' gap={2}>
      <Button
        colorScheme='blue'
        borderRadius='full'
        leftIcon={<Icon h={5} w={5} as={BiMessageSquareAdd} />}
        size={useBreakpointValue({ base: 'sm', md: 'md' })}
        h='40px'
        fontSize='sm'
        lineHeight='1'
      >
        {useBreakpointValue({ base: 'Publicar', md: 'Publicar anuncio' })}
      </Button>
      <Center h='50px' display={{ base: 'none', md: 'flex' }}>
        <Divider orientation='vertical' h='100%' />
      </Center>
      <Menu autoSelect={false} strategy='absolute' gutter='14'>
        <MenuButton display={{ base: 'none', md: 'flex' }} _hover={{ filter: 'brightness(0.8)' }}>
          <UserAvatar user={user} w='40px' h='40px' selectable />
        </MenuButton>
        <MenuList
          _light={{ bg: 'rgba(255, 255, 255, 0.85)' }}
          _dark={{ bg: 'rgba(26, 32, 44, 0.85)' }} fontSize='sm' px={2} maxW='200px'
        >
          <Flex p={2} justify='center'>
            <Flex gap={2}>
              <Stack direction='column' align='center'>
                <UserAvatar user={user} w='55px' h='55px' />
                <Text noOfLines={2} fontWeight='semibold' fontSize='md' lineHeight='1.2'>
                  {`${user.name} ${user.lastname}`}
                </Text>
                <Text style={{ marginTop: 0 }}>
                  <Badge colorScheme='pink' fontFamily='body' textTransform='capitalize'>
                    Personal
                  </Badge>
                </Text>
              </Stack>
            </Flex>
          </Flex>
          <MenuGroup color={titleMenuColor}>
            <MenuGroupTitle>Perfil</MenuGroupTitle>
            <MenuDivider my='0.3rem' />
            <MenuItem borderRadius='lg'>
              Mi cuenta
            </MenuItem>
            <MenuItem borderRadius='lg'>
              Mis publicaciones
            </MenuItem>
          </MenuGroup>
          <MenuOptionGroup
            color={titleMenuColor}
            defaultValue={getCurrentTheme()}
            type='radio'
            onChange={handleChange}
          >
            <MenuGroupTitle>Aspecto</MenuGroupTitle>
            <MenuDivider my='0.3rem' />
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
          <MenuItem
            borderRadius='lg'
            gap='4'
            alignItems='center'
            onClickCapture={handleLogout}
          >
            <Icon h='5' w='5' as={CgLogOut} />
            Cerrar sesión
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

function MenuGroupTitle({ children, ...props }) {
  return (
    <Flex
      _dark={{ color: 'whiteAlpha.600' }}
      _light={{ color: 'blackAlpha.600' }}
      pl='1'
      mt='0.4rem'
      {...props}
    >
      <chakra.span fontWeight='semibold'>
        {children}
      </chakra.span>
    </Flex>
  )
}

export default AuthenticatedHud
