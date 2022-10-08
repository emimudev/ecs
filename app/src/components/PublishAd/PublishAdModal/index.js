import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  Text,
  ModalFooter,
  Button,
  Flex,
  Icon,
  Stack,
  Divider,
  useRadioGroup
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FcPositiveDynamic } from 'react-icons/fc'
import { AiFillCar } from 'react-icons/ai'
import { GiFullMotorcycleHelmet } from 'react-icons/gi'
import { MdSettingsInputHdmi } from 'react-icons/md'
import SelectAdType from 'components/SelectAdType'

function PublishAdModal({ isOpened = false, onClose }) {
  const { value, getRadioProps, getRootProps, setValue } = useRadioGroup({ defaultValue: '' })
  const navigate = useNavigate()

  const handleNext = () => {
    if (value === '') {
      return
    }
    navigate(`/publish/${AdTypes[value].to}`)
    setValue('')
    onClose?.()
  }

  return (
    <Modal
      size={useBreakpointValue({ base: 'full', sm: '3xl' })}
      onClose={onClose}
      isOpen={isOpened}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius={useBreakpointValue({ base: '0', sm: '3xl' })}
        px={useBreakpointValue({ base: '0', md: '2' })}
        py={useBreakpointValue({ base: '2', md: '2' })}
        mx={{ sm: 3 }}
      >
        <ModalCloseButton borderRadius='full' />
        <ModalHeader>
          <Flex flexDirection='column' justify='center'>
            <Flex align='center' gap='2'>
              <Icon as={FcPositiveDynamic} h={6} w={6} />
              Publique su anuncio
            </Flex>
            <Text fontSize='sm' fontWeight='normal'>
              Consiga la venta que está buscando con la exposición que le brindamos.
            </Text>
            <Divider mt='2' />
          </Flex>
        </ModalHeader>
        <ModalBody py={0}>
          <Stack gap={2}>
            <Text fontSize='md'>
              Seleccione el tipo de anuncio que desea publicar
            </Text>
            <Stack gap={1} {...getRootProps()}>
              {AdTypes.map((ad, index) => (
                <SelectAdType
                  {...ad}
                  key={index}
                  radioProps={getRadioProps({ value: ad.value })}
                  setValue={setValue}
                />
              ))}
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter gap='2'>
          <Button variant='ghost' onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme='pink' isDisabled={value === ''} onClick={handleNext}>
            Siguiente
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const AdTypes = [
  {
    title: 'Cuatro ruedas',
    description: 'Publique su carro eléctrico usado o nuevo.',
    value: '0',
    to: 'fourth-wheels',
    icon: AiFillCar
  },
  {
    title: 'Dos ruedas',
    description: 'Publique su  motocicleta, bicicleta o scooter eléctrica.',
    to: 'two-wheels',
    value: '1',
    icon: GiFullMotorcycleHelmet
  },
  {
    title: 'Accesorios o repuestos',
    description: 'Publique sus accesorios o repuestos usados o nuevos.',
    to: 'acc-and-spare',
    value: '2',
    icon: MdSettingsInputHdmi
  }
]

export default PublishAdModal
