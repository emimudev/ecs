import { Form, Formik } from 'formik'
import { FiUser, FiSettings } from 'react-icons/fi'
import { AiOutlineCar } from 'react-icons/ai'
import * as Yup from 'yup'
import Steps, { StepItem, StepItemSurface } from 'components/Steps'
import GeneralInformation from './GeneralInformation'
import Equipment from './Equipment'
import SellerInformation from './SellerInformation'
import { Divider, Box, Button } from '@chakra-ui/react'

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
        <Steps>
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
        </Steps>
        <Box pl='20px'>
          <Button type='submit' colorScheme='purple'>
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
  equipment: []
}

export default PublishCarForm
