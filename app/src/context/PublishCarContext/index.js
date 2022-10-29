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
  useColorModeValue
} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'
import carAdsAPI from 'services/carAdsAPI'
import parseValues from './parseValues'

const PublishCarContext = createContext()

function PublishCarContextProvider({ children }) {
  const bg = useColorModeValue('white', 'gray.700')
  const [isPublishing, setIsPublishing] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
  // const filesMutation = useMutation(carAdsAPI, )
  const mutation = useMutation(carAdsAPI.create, {
    onMutate: () => {
      setIsPublishing(true)
      onOpen()
    },
    onSettled: () => {
      setIsPublishing(false)
    }
  })
  const handleSubmit = (values) => {
    const { files, ...adValues } = values
    const adInfo = parseValues({ values: adValues })
    mutation.mutate(adInfo)
  }
  return (
    <PublishCarContext.Provider value={{ handleSubmit }}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={mutation.isSuccess || mutation.isError}
      >
        <ModalOverlay />
        <ModalContent
          maxW='container.sm'
          bg={mutation.isLoading ? 'transparent' : bg}
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
            {(!isPublishing && mutation.isSuccess) && (
              <SuccessPublishing />
            )}
            {(!isPublishing && mutation.isError) && (
              <ErrorPublishing />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </PublishCarContext.Provider>
  )
}

const SuccessPublishing = () => {
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

export const usePublishContext = () => useContext(PublishCarContext)
export default PublishCarContextProvider
