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
        placeholder='Escriba el nombre del vendedor'
      />
      <Divider my='0' />
      <ProductField
        name='sellerEmail'
        label='Correo electrónico'
        placeholder='Escriba el email del vendedor'
      />
      <Divider my='0' />
      <ProductField
        name='sellerPrimaryPhone'
        label='Teléfono principal'
        placeholder='Escriba el número de teléfono principal del vendedor'
        type='number'
      />
      <Divider my='0' />
      <ProductField
        name='sellerSecondaryPhone'
        label='Teléfono secundario'
        placeholder='Escriba el número de teléfono secundario del vendedor'
        type='number'
      />
      <Divider my='0' />
      <ProductField
        name='sellerWhatsAppPhone'
        label='WhatsApp'
        placeholder='Escriba el número de teléfono que utiliza con WhatsApp'
        type='number'
      />
    </Grid>
  )
}

export default SellerInformation
