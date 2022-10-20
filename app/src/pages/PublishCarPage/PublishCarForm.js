import { Form, Formik } from 'formik'
import { Box, Button } from '@chakra-ui/react'
import { FiUser, FiSettings } from 'react-icons/fi'
import { AiFillMoneyCollect, AiOutlineCar } from 'react-icons/ai'
import * as Yup from 'yup'
import GeneralInformation from './GeneralInformation'
import Equipment from './Equipment'
import SellerInformation from './SellerInformation'
import Pricing from './Pricing'
import Steps, { StepItem, StepItemSurface } from 'components/Steps'
import Surface from 'components/Surface'

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
        </Steps>
        <Box as={Surface} mt='10px'>
          <Button type='submit' colorScheme='pink'>
            Publicar anuncio
          </Button>
        </Box>
      </Form>
    </Formik>
  )
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
  adPricing: '',
  equipment: []
}

export default PublishCarForm
