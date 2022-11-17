import { useContext, createContext, useState } from 'react'
import {
  Modal,
  Text,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Box,
  Heading,
  Icon,
  Flex,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'

import parseValues from './parseValues'
import { Link } from 'react-router-dom'
import motorcyclePostsAPI from 'services/motorcyclePostAPI'

const PublishMotorcycleContext = createContext()

function PublishMotorcycleContextProvider({ children }) {
  const bg = useColorModeValue('white', 'gray.700')
  const [isPublishing, setIsPublishing] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
  const motorcyclePostMutation = useMutation(motorcyclePostsAPI.create, {
    onMutate: () => {
      setIsPublishing(true)
      onOpen()
    },
    onSettled: () => {
      setIsPublishing(false)
    }
  })
  const handleSubmit = async (values) => {
    const adInfo = await parseValues(values)
    motorcyclePostMutation.mutate(adInfo)
  }
  return (
    <PublishMotorcycleContext.Provider value={{ handleSubmit, mutation: motorcyclePostMutation }}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={!isPublishing && !motorcyclePostMutation.isSuccess}
      >
        <ModalOverlay />
        <ModalContent
          maxW='container.sm'
          bg={isPublishing ? 'transparent' : bg}
          shadow={isPublishing && 'none'}
          borderRadius='2xl'
        >
          <ModalBody justifyContent='center'>
            {isPublishing && (
              <Flex flexDirection='column'>
                <Spinner
                  thickness='3px'
                  speed='0.65s'
                  emptyColor='pink.200'
                  color='pink.500'
                  size='xl'
                  alignSelf='center'
                />
                <Text textAlign='center' mt='3' fontSize='xl' _light={{ color: 'gray.300' }}>
                  Publicando anuncio...
                </Text>
              </Flex>
            )}
            {(!isPublishing && motorcyclePostMutation.isSuccess) && (
              <SuccessPublishing />
            )}
            {(!isPublishing && motorcyclePostMutation.isError) && (
              <ErrorPublishing />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </PublishMotorcycleContext.Provider>
  )
}

const SuccessPublishing = () => {
  const { mutation: { data } } = usePublishContext()
  console.log({ data })
  return (
    <Box textAlign='center' py={7} px={6}>
      <Icon
        as={BsCheckCircle}
        _dark={{ color: 'green.300' }}
        _light={{ color: 'green.500' }}
        h='20'
        w='20'
      />
      <Heading size='lg' mt={3} mb={3} _light={{ color: 'blackAlpha.700' }}>
        ¡Felicidades! :)
      </Heading>
      <Text
        _dark={{ color: 'gray.300' }}
        _light={{ color: 'blackAlpha.700' }}
        fontWeight='semibold'
      >
        El anuncio ha sido publicado, que tenga éxitos en su venta.
        Si lo desea puede editar esta publicación.
      </Text>
      <Button as={Link} to={`/post/motorcycles/${data.id}`} mt='3' colorScheme='green'>
        Ver anuncio
      </Button>
    </Box>
  )
}

const ErrorPublishing = () => {
  return (
    <Box textAlign='center' py={7} px={6}>
      <Icon
        as={BsXCircle}
        _dark={{ color: 'red.300' }}
        _light={{ color: 'red.500' }}
        h='20'
        w='20'
      />
      <Heading size='lg' mt={3} mb={3} _light={{ color: 'blackAlpha.700' }}>
        Ha ocurrido un error :(
      </Heading>
      <Text
        _dark={{ color: 'gray.300' }}
        _light={{ color: 'blackAlpha.700' }}
        fontWeight='semibold'
      >
        Lo sentimos, no se pudo publicar el anuncio. Por favor, inténtelo nuevamente.
      </Text>
    </Box>
  )
}

export const usePublishContext = () => useContext(PublishMotorcycleContext)
export default PublishMotorcycleContextProvider
