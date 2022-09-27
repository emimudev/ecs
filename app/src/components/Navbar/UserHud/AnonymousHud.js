import { useDispatch } from 'react-redux'
import { Button, Icon, Stack, Flex, useBreakpointValue } from '@chakra-ui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { openSignInAction, openSignUpAction } from 'redux/states/auth.state'
import ColorModeSwitcher from 'components/ColorModeSwitcher'

function AnonymousHud() {
  const dispatcher = useDispatch()
  const openLoginModal = () => dispatcher(openSignInAction())
  const openSignUpModal = () => dispatcher(openSignUpAction())

  return (
    <Stack direction='row' align='center'>
      <Flex display={{ base: 'none', md: 'flex' }}>
        <ColorModeSwitcher />
      </Flex>
      <Flex display={{ base: 'none', sm: 'flex' }}>
        <Button
          size={useBreakpointValue({ base: 'sm', md: 'md' })}
          onClick={openSignUpModal} borderRadius='full'
          fontSize='sm'
        >
          Inscribirse
        </Button>
      </Flex>
      <Button
        colorScheme='blue'
        bg='blue.500'
        color='white'
        size={useBreakpointValue({ base: 'sm', md: 'md' })}
        onClick={openLoginModal}
        rightIcon={<Icon h={5} w={5} as={BiMessageSquareAdd} />}
        borderRadius='full'
        fontSize='sm'
      >
        {useBreakpointValue({ base: 'Publicar', md: 'Publicar anuncio' })}
      </Button>
    </Stack>
  )
}

export default AnonymousHud
