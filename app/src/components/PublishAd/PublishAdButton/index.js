import { Button, Center, Icon, useDisclosure } from '@chakra-ui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import PublishAdModal from '../PublishAdModal'

function PublishAdButton({ children, text = 'Publicar anuncio', showIcon = true }) {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false })
  return (
    <Center>
      {
        children
          ? <div onClick={onOpen}>{children}</div>
          : <Button /* eslint-disable */
            colorScheme='pink'
            bg='pink.500'
            color='white'
            borderRadius='full'
            rightIcon={showIcon && <Icon h={5} w={5} as={BiMessageSquareAdd} />}
            size={{ base: 'sm', md: 'md' }}
            fontSize='sm'
            lineHeight='1'
            display={{ base: 'none', sm: 'flex' }}
            onClick={onOpen}
          >
            {text}
          </Button>
      }
      <PublishAdModal isOpened={isOpen} onClose={onClose} />
    </Center>
  )
}

export default PublishAdButton
