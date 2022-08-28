import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import LoginForm from 'components/LoginForm'

function LoginPopup({ activator = null }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Activador = activator
  return (
    <Box>
      {activator && <Activador onClickCapture={onOpen} />}
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Iniciar sesión</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default LoginPopup
