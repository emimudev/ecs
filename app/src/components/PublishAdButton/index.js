import { Button, Center, Icon, useDisclosure } from '@chakra-ui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import PublishAdModal from 'components/PublishAdModal'

function PublishAdButton({ btn = null, text = 'Publicar anuncio', showIcon = true }) {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false })
  const Btn = btn
  return (
    <Center>
      {Btn && <Btn onClick={onOpen} />}
      {Btn ?? (
        <Button
          colorScheme='blue'
          bg='blue.500'
          color='white'
          borderRadius='full'
          rightIcon={showIcon && <Icon h={5} w={5} as={BiMessageSquareAdd} />}
          fontSize='sm'
          lineHeight='1'
          display={{ base: 'none', sm: 'flex' }}
          onClick={onOpen}
        >
          {text}
        </Button>
      )}
      <PublishAdModal isOpened={isOpen} onClose={onClose} />
    </Center>
  )
}

export default PublishAdButton
