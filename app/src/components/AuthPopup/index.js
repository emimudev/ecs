import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { closeAuthModalAction } from 'redux/slices/auth.slice'
import { useAuthState } from 'hooks/useAuthState'
import AuthForm from 'components/AuthForm'

function LoginPopup() {
  const dispatcher = useDispatch()
  const { authModal: { isOpened, type } } = useAuthState()
  const closeModal = () => dispatcher(closeAuthModalAction())

  return (
    <Box>
      <Modal
        isOpen={isOpened}
        size={useBreakpointValue({ base: 'full', sm: 'lg' })}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={useBreakpointValue({ base: '0', sm: '3xl' })}
          px={useBreakpointValue({ base: '0', md: '6' })}
          py={useBreakpointValue({ base: '2', md: '6' })}
        >
          <ModalCloseButton borderRadius='full' />
          <ModalBody>
            <AuthForm variant={type} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default LoginPopup
