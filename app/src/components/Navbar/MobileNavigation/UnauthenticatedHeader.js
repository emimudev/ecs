import { useDispatch } from 'react-redux'
import { Button, Divider, Flex, Icon, useBreakpointValue, VStack } from '@chakra-ui/react'
import { RiLoginCircleLine, RiUser3Line } from 'react-icons/ri'
import { openSignInAction, openSignUpAction } from 'redux/slices/auth.slice'

function UnauthenticatedHeader() {
  const dispatcher = useDispatch()

  const openSignInModal = () => {
    dispatcher(openSignInAction())
  }

  const openSignUpModal = () => {
    dispatcher(openSignUpAction())
  }

  return (
    <VStack w='full' display={useBreakpointValue({ base: 'flex', sm: 'none' })}>
      <Flex w='full' flexWrap='wrap' gap={2}>
        <Button
          iconSpacing='auto'
          rightIcon={<Icon h={5} w={5} as={RiUser3Line} />}
          flex='1 1 auto'
          onClick={openSignUpModal}
          w='150px'
          size='sm'
        >
          Inscribirse
        </Button>
        <Button
          iconSpacing='auto'
          colorScheme='purple'
          w='150px'
          rightIcon={<Icon h={5} w={5} as={RiLoginCircleLine} />}
          flex='1 1 auto'
          size='sm'
          onClick={openSignInModal}
        >
          Ingresar
        </Button>
      </Flex>
      <Divider style={{ margin: '12px 0 12px' }} />
    </VStack>
  )
}

export default UnauthenticatedHeader
