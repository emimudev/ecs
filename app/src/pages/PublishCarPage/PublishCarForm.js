import { Form, Formik, useFormikContext } from 'formik'
import { Alert, AlertIcon, Box, Button, Flex, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { FiUser, FiSettings } from 'react-icons/fi'
import { AiFillMoneyCollect, AiOutlineCar } from 'react-icons/ai'
import { BsImages } from 'react-icons/bs'
import { MdPublish } from 'react-icons/md'
import GeneralInformation from './GeneralInformation'
import Equipment from './Equipment'
import SellerInformation from './SellerInformation'
import Pricing, { PricingInfo } from './Pricing'
import Steps, { StepItem, StepItemSurface } from 'components/Steps'
import Surface from 'components/Surface'
import Dropzone from 'components/Dropzone'
import publishCarSchema, { InitialValues } from './publishCarSchema'
import { useEffect } from 'react'
import { usePublishContext } from 'context/PublishCarContext'

function PublishCarForm() {
  const { handleSubmit } = usePublishContext()

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={publishCarSchema}
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <Form autoComplete='off'>
        <Flex gap='5px 12px' direction={{ base: 'column', xl: 'row' }}>
          <Flex
            gap='2'
            direction='column'
            maxW={{
              base: 'full',
              xl: 'container.xl'
            }}
            w='full'
            overflow='hidden'
          >
            <Steps gap={{ base: '2', sm: '0' }}>
              <StepItem icon={FiUser} label='Información del vendedor'>
                <StepItemSurface>
                  <SellerInformation />
                </StepItemSurface>
              </StepItem>
              <StepItem icon={AiOutlineCar} label='Datos generales'>
                <StepItemSurface>
                  <GeneralInformation />
                </StepItemSurface>
              </StepItem>
              <StepItem icon={FiSettings} label='Equipamiento'>
                <StepItemSurface>
                  <Equipment />
                </StepItemSurface>
              </StepItem>
              <StepItem icon={AiFillMoneyCollect} label='Precios'>
                <CarPricing />
              </StepItem>
              <StepItem icon={BsImages} label='Multimedia'>
                <StepItemSurface>
                  <Multimedia />
                </StepItemSurface>
              </StepItem>
            </Steps>
          </Flex>
          <PublishButton />
        </Flex>
      </Form>
    </Formik>
  )
}

function makeid(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function PublishButton() {
  const formik = useFormikContext()
  const fillForm = () => {
    formik.setValues({
      ...formik.values,
      sellerName: 'Jimmy Murillo',
      sellerEmail: 'jimy@gmail.com',
      sellerPrimaryPhone: 12345678,
      sellerSecondaryPhone: 87654321,
      sellerWhatsAppPhone: 56487123,
      brand: 'Nissan',
      model: 'Corolla',
      style: 'Sedán',
      year: 2020,
      status: 'Excelente',
      price: 1200000,
      isNP: true,
      outsideColor: 'Negro',
      insideColor: 'Gris',
      mileage: 150000,
      hasAlreadyPaidTaxes: false,
      receiveVehicle: true,
      licensePlate: makeid(6).toUpperCase(),
      doorsNumber: 4,
      province: 'Heredia',
      extraComment: 'Carro en buen estado, tiene poco uso y está bien equipado.',
      adPricing: 2,
      equipment: ['RTV al día', 'Bolsas de aire', 'Aros de lujo', 'Llave inteligente', 'Botón de arranque', 'Computadora de viaje', 'Bluetooth']
    })
  }
  const { mutation } = usePublishContext()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (mutation.isLoading && !isOpen) {
      onOpen()
    }
  }, [isOpen, mutation.isLoading, onOpen])

  return (
    <Flex
      position='sticky'
      h='fit-content'
      top={{
        base: 'auto',
        lg: '80px'
      }}
      flex='1 1 auto'
    >
      <Box display='flex' flexDirection='column' as={Surface} p={{ base: '3', xl: '5' }} w='full' gap={3}>
        <Button
          leftIcon={<Icon as={MdPublish} h='5' w='5' />}
          type='submit'
          colorScheme='blue'
          w='full'
        >
          Publicar anuncio
        </Button>
        {process.env.NODE_ENV !== 'production' && (
          <Button
            colorScheme='blue'
            w='full'
            onClick={fillForm}
          >
            Rellenar
          </Button>
        )}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            asdasdasd asd sad sadsa das dasd
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Flex>
  )
}

function CarPricing() {
  const formik = useFormikContext()
  const handleChange = (id) => {
    console.log({
      newId: id,
      oldId: formik.values.adPricing
    })
    if (id < formik.values.adPricing) {
      formik.setFieldValue('files', [])
    }
  }
  return <Pricing onChange={handleChange} />
}

function Multimedia() {
  const formik = useFormikContext()
  const isDisabled = formik.values.adPricing === 0

  const handleDropAccepted = (files) => {
    formik.setFieldValue('files', files)
  }

  return (
    <>
      <Flex direction='column' gap='4'>
        {isDisabled && (
          <Alert borderRadius='lg' status='info'>
            <AlertIcon />
            Selecciona un plan antes de publicar fotos
          </Alert>
        )}
        <Dropzone
          name='files'
          maxFiles={PricingInfo[formik.values.adPricing]?.adMaxFiles | 0}
          disabled={isDisabled}
          maxSize={1048576 * 4}
          accept={{ 'image/*': [] }}
          isError={formik.touched.files && formik.errors.files}
          onDropAccepted={handleDropAccepted}
          onFileDialogCancel={() => formik.setFieldValue('files', [])}
        />
      </Flex>
      {
        formik.touched.files && formik.errors.files && (
          <Alert status='error' borderRadius='md'>
            {formik.errors.files}
          </Alert>
        )
      }
    </>
  )
}

export default PublishCarForm
