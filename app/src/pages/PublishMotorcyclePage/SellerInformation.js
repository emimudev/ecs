import { Divider, Grid } from '@chakra-ui/react'
import ProductField from 'components/ProductField'

function SellerInformation() {
  return (
    <Grid
      gridTemplateColumns='1fr'
      alignItems='center'
      gap='3'
      mt='0'
    >
      <ProductField
        name='sellerName'
        label='Nombre'
        placeholder='Escriba el nombre '
      />
      <Divider my='0' />
      <ProductField
        name='sellerEmail'
        label='Correo electrónico'
        placeholder='Escriba el email'
      />
      <Divider my='0' />
      <ProductField
        name='sellerPrimaryPhone'
        label='Teléfono principal'
        placeholder='Escriba el número de teléfono'
        type='number'
      />
      <Divider my='0' />
      <ProductField
        name='sellerSecondaryPhone'
        label='Teléfono secundario'
        placeholder='Escriba el número de teléfono'
        isRequired={false}
        type='number'
      />
      <Divider my='0' />
      <ProductField
        name='sellerWhatsAppPhone'
        label='WhatsApp'
        placeholder='Escriba el número de teléfono'
        type='number'
      />
    </Grid>
  )
}

export default SellerInformation
