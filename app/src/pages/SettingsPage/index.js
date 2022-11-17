import { Box, Divider, Flex, Heading, Menu, MenuItem, MenuList, chakra, Stack, Button } from '@chakra-ui/react'
import { MenuGroupTitle } from 'components/Navbar/UserHud/AuthenticatedHud'
import { PageBody, PageContainer, PageTitle } from 'components/PageLayout'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import UserAvatar from 'components/UserAvatar'
import { useAuthState } from 'hooks/useAuthState'
import useHiddenPage from 'hooks/useHiddenPage'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation, NavLink } from 'react-router-dom'
import { logoutAction } from 'redux/slices/auth.slice'

function SettingsPage() {
  const { show } = useHiddenPage()
  if (!show) return null
  return (
    <PageContainer h='full'>
      <ScrollToTopOnMount />
      <Flex gap='7' h='full' flex='1 1 auto'>
        <Flex
          flex='0 0 400px'
          _dark={{ bg: 'rgb(26, 32, 44)' }}
          _light={{ bg: 'white' }}
          minH='full'
          justifyContent='flex-end'
          position='relative'
        >
          <Box position='absolute' zIndex='1' width='250px'>
            <SettingsSideBar />
          </Box>
        </Flex>
        <Flex flex='3 2 auto' minH='full' pr='7'>
          <Routes>
            <Route path='/account' element={<MyAccountPage />} />
            <Route path='/myposts' element={<MyPosts />} />
          </Routes>
        </Flex>
      </Flex>
    </PageContainer>
  )
}

function SettingsSideBar() {
  const { pathname } = useLocation()
  const dispatcher = useDispatch()
  return (
    <Menu isOpen>
      <MenuList shadow='none' bg='transparent' border='none' p='2'>
        <MenuGroupTitle my='3'>General</MenuGroupTitle>
        <MenuItem
          as={NavLink}
          to='/settings/account'
          borderRadius='lg'
          _dark={{ bg: pathname === '/settings/account' && 'gray.700' }}
          _light={{ bg: pathname === '/settings/account' && 'gray.200' }}
        >
          Mi cuenta
        </MenuItem>
        <MenuItem
          as={NavLink}
          to='/settings/myposts'
          borderRadius='lg'
          _dark={{ bg: pathname === '/settings/myposts' && 'gray.700' }}
          _light={{ bg: pathname === '/settings/myposts' && 'gray.200' }}
        >
          Mis publicaciones
        </MenuItem>
        <MenuItem borderRadius='lg'>Privacidad y seguridad</MenuItem>
        <MenuGroupTitle my='3'>Configuración</MenuGroupTitle>
        <MenuItem borderRadius='lg'>Apariencia</MenuItem>
        <MenuItem borderRadius='lg'>Notificaciones</MenuItem>
        <MenuItem borderRadius='lg'>Idioma</MenuItem>
        <MenuGroupTitle my='3'>Facturación</MenuGroupTitle>
        <MenuItem borderRadius='lg'>Mis compras</MenuItem>
        <MenuItem borderRadius='lg'>Subscripción</MenuItem>
        <Divider my='3' />
        <MenuItem borderRadius='lg' onClick={() => dispatcher(logoutAction())}>Cerrar sesión</MenuItem>
      </MenuList>
    </Menu>
  )
}

function MyAccountPage() {
  const { user } = useAuthState()
  return (
    <PageContainer>
      <PageBody py='5' gap='7' maxW='container.lg'>
        <Stack spacing='4'>
          <PageTitle>Mi cuenta</PageTitle>
          <Flex
            _dark={{ bg: 'gray.800' }}
            _light={{ bg: 'white' }}
            borderRadius='12px'
            overflow='hidden'
            flexDirection='column'
            shadow='md'
          >
            <Flex flexDirection='column'>
              <Flex
                minH='100px'
                _dark={{ bg: 'purple.700' }}
                _light={{ bg: 'purple.300' }}
                h='full'
                w='full'
              />
              <Flex px='10' py='4' gap='4'>
                <UserAvatar
                  size='lg'
                  w='80px'
                  h='80px'
                  position='relative'
                  top='-40px'
                />
                <Heading fontSize='22px'>
                  {`${user.name} ${user.lastname}`}
                </Heading>
              </Flex>
            </Flex>
            <Flex position='relative' top='-40px' flexDirection='column' gap='4'>
              <Divider />
              <InfoDescription label='Correo electrónico' value={user.email} />
              <InfoDescription label='Número de teléfono' value='Desconocido' />
            </Flex>
          </Flex>
        </Stack>
        <Flex flexDirection='column' gap='5'>
          <Heading fontSize='22px'>
            Contraseña y autenticación
          </Heading>
          <Button w='fit-content'>Cambiar contraseña</Button>
        </Flex>
      </PageBody>
    </PageContainer>
  )
}

function InfoDescription({ label, value }) {
  return (
    <Flex px='10' flexDirection='column'>
      <Flex
        flexDirection='column'
        borderRadius='md'
        bg='red'
        px='4'
        py='2'
        _dark={{ bg: 'whiteAlpha.100' }}
        _light={{ bg: 'blackAlpha.100' }}
      >
        <chakra.span fontWeight='bold' textTransform='uppercase'>
          {label}
        </chakra.span>
        <chakra.span pl='2'>{value}</chakra.span>
      </Flex>
    </Flex>
  )
}

function MyPosts() {
  const [posts, setPosts] = useState()

  return (
    <PageContainer>
      <PageBody py='5' gap='4'>
        <PageTitle>Mis publicaciones</PageTitle>
      </PageBody>
    </PageContainer>
  )
}

export default SettingsPage
