import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { closeAuthModalAction } from 'redux/states/auth.state'
import AuthForm from 'components/AuthForm'

function LoginPopup() {
  const dispatcher = useDispatch()
  const { authModal: { isOpened, type } } = useSelector(store => store.auth)
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
