import { useDispatch } from 'react-redux'
import { Button, Stack, Flex, useBreakpointValue, Center, Icon } from '@chakra-ui/react'
import { IoMdLogIn } from 'react-icons/io'
import { openSignInAction, openSignUpAction } from 'redux/slices/auth.slice'
import ColorModeSwitcher from 'components/ColorModeSwitcher'
import MobileNavTrigger from '../MobileNavigation/MobileNavTrigger'

function AnonymousHud() {
  const dispatcher = useDispatch()
  const openLoginModal = () => dispatcher(openSignInAction())
  const openSignUpModal = () => dispatcher(openSignUpAction())

  return (
    <Stack direction='row' align='center'>
      <Flex display={{ base: 'none', md: 'flex' }}>
        <ColorModeSwitcher />
      </Flex>
      <Button
        size={useBreakpointValue({ base: 'sm', md: 'md' })}
        onClick={openSignUpModal}
        borderRadius='full'
        fontSize='sm'
        display={{ base: 'none', sm: 'flex' }}
      >
        Inscribirse
      </Button>
      <Button
        colorScheme='blue'
        bg='blue.500'
        color='white'
        size={useBreakpointValue({ base: 'sm', md: 'md' })}
        onClick={openLoginModal}
        borderRadius='full'
        fontSize='sm'
        display={{ base: 'none', sm: 'flex' }}
        leftIcon={<Icon as={IoMdLogIn} h='5' w='5' />}
      >
        Ingresar
      </Button>
      <Center display={{ base: 'flex', sm: 'none' }}>
        <MobileNavTrigger />
      </Center>
    </Stack>
  )
}

export default AnonymousHud
