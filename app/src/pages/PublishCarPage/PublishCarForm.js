import { Form, Formik, useFormikContext } from 'formik'
import { Alert, AlertIcon, Box, Button, Flex, Icon } from '@chakra-ui/react'
import { FiUser, FiSettings } from 'react-icons/fi'
import { AiFillMoneyCollect, AiOutlineCar } from 'react-icons/ai'
import { BsImages } from 'react-icons/bs'
import { MdPublish } from 'react-icons/md'
import * as Yup from 'yup'
import GeneralInformation from './GeneralInformation'
import Equipment from './Equipment'
import SellerInformation from './SellerInformation'
import Pricing from './Pricing'
import Steps, { StepItem, StepItemSurface } from 'components/Steps'
import Surface from 'components/Surface'
import Dropzone from 'components/Dropzone'

function PublishCarForm() {
  return (
    <Formik
      initialValues={InitialValues}
      autoComplete='off'
      onSubmit={(state) => {
        console.log('state', state)
      }}
    >
      <Form autoComplete='off'>
        <Flex
          gap='5'
          direction={{
            base: 'column',
            xl: 'row'
          }}
        >
          <Flex
            gap='2'
            direction='column'
            maxW={{
              base: 'full',
              xl: 'container.xl'
            }}
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
                <Pricing />
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

function PublishButton() {
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
      <Box as={Surface} p={{ base: '3', xl: '5' }} w='full'>
        <Button
          leftIcon={<Icon as={MdPublish} h='5' w='5' />}
          type='submit'
          colorScheme='blue'
          w='full'
        >
          Publicar anuncio
        </Button>
      </Box>
    </Flex>
  )
}

function Multimedia() {
  const formik = useFormikContext()
  const isDisabled = formik.values.adPricing === 0

  const handleDropAccepted = (files) => {
    formik.setFieldValue('files', files)
  }

  return (
    <Flex direction='column' gap='3'>
      {isDisabled && (
        <Alert borderRadius='lg' status='warning'>
          <AlertIcon />
          Selecciona un plan antes de subir imágenes
        </Alert>
      )}
      <Dropzone
        maxFiles={PricingInfo[formik.values.adPricing]?.adMaxFiles | 0}
        disabled={isDisabled}
        maxSize={1048576 * 4}
        accept={{ 'image/*': [] }}
        onDropAccepted={handleDropAccepted}
      />
    </Flex>
  )
}

const PricingInfo = {
  1: {
    adMaxDuration: 30,
    adMaxFiles: 5
  },
  2: {
    adMaxDuration: 45,
    adMaxFiles: 10
  },
  3: {
    adMaxDuration: 60,
    adMaxFiles: 20
  }
}

const InitialValues = {
  sellerName: '',
  sellerEmail: '',
  sellerPrimaryPhone: '',
  sellerSecondaryPhone: '',
  sellerWhatsAppPhone: '',
  brand: '',
  model: '',
  style: '',
  year: '',
  status: '',
  price: '',
  isNP: false,
  outsideColor: '',
  insideColor: '',
  mileage: '',
  hasAlreadyPaidTaxes: false,
  receiveVehicle: false,
  licensePlate: '',
  doorsNumber: '',
  province: '',
  extraComment: '',
  adPricing: 0,
  equipment: [],
  adMaxDuration: 0,
  adMaxFiles: 0,
  files: []
}

export default PublishCarForm
