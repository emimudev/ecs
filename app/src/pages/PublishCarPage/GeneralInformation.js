import { Divider, Grid } from '@chakra-ui/react'
import ProductField from 'components/ProductField'
import { SelectProvinces } from 'utils'

function GeneralInformation() {
  return (
    <Grid
      gridTemplateColumns='1fr'
      alignItems='center'
      gap='3'
      mt='0'
    >
      <ProductField
        name='brand'
        label='Marca'
        placeholder='Escriba el nombre de la marca'
      />
      <Divider my='0' />
      <ProductField
        name='model'
        label='Modelo'
        placeholder='Escriba el nombre del modelo'
      />
      <Divider my='0' />
      <ProductField
        name='style'
        label='Estilo'
        placeholder='Seleccione el estilo de la carrocería'
        type='select'
        options={[
          { label: 'Sedán', value: 'Sedán' },
          { label: 'Station Wagon', value: 'Station Wagon' },
          { label: 'Hatchback', value: 'Hatchback' },
          { label: 'Pick Up 4x2', value: 'Pick Up 4x2' },
          { label: 'Pick Up 4x4', value: 'Pick Up 4x4' },
          { label: 'Microbus', value: 'Microbus' }
        ]}
      />
      <Divider my='0' />
      <ProductField
        name='licensePlate'
        label='Placa'
        placeholder='Escriba la placa del vehículo'
        helperText='Si el vehículo no está inscrito, favor dejar en blanco.'
        isRequired={false}
      />
      <Divider my='0' />
      <ProductField
        name='year'
        label='Año'
        placeholder='Escriba el año del vehículo'
        type='year'
      />
      <Divider my='0' />
      <ProductField
        name='status'
        label='Estado'
        placeholder='Seleccione el estado del vehículo'
        type='select'
        options={[
          { label: 'Excelente', value: 'Excelente' },
          { label: 'Muy bueno', value: 'Muy bueno' },
          { label: 'Bueno', value: 'Bueno' },
          { label: 'Regular', value: 'Regular' }
        ]}
      />
      <Divider my='0' />
      <ProductField
        name='price'
        label='Precio'
        placeholder='Escriba el precio del vehículo'
        type='number'
        helperText='Debe ser el precio total del vehículo, no solo la prima'
      />
      <Divider my='0' />
      <ProductField
        name='isNP'
        label='¿El precio es negociable?'
        type='switch'
        colorScheme='pink'
      />
      <ProductField
        name='hasAlreadyPaidTaxes'
        label='¿Ya pagó impuestos?'
        type='switch'
        colorScheme='pink'
      />
      <ProductField
        name='receiveVehicle'
        label='¿Se recibe vehículo?'
        type='switch'
        colorScheme='pink'
      />
      <Divider my='0' />
      <ProductField
        name='outsideColor'
        label='Color exterior'
        placeholder='Escriba el color exterior del vehículo'
      />
      <Divider my='0' />
      <ProductField
        name='insideColor'
        label='Color interior'
        placeholder='Escriba el color exterior del vehículo'
      />
      <Divider my='0' />
      <ProductField
        name='mileage'
        label='Kilometraje'
        placeholder='Escriba el kilometraje actual del vehículo'
        type='number'
      />
      <Divider my='0' />
      <ProductField
        name='doorsNumber'
        label='Número de puertas'
        placeholder='Seleccione el número de puertas'
        type='select'
        options={[
          { label: 'Una', value: 1 },
          { label: 'Dos', value: 2 },
          { label: 'Tres', value: 3 },
          { label: 'Cuatro', value: 4 },
          { label: 'Cinco', value: 5 },
          { label: 'Seis', value: 6 }
        ]}
      />
      <Divider my='0' />
      <ProductField
        name='province'
        label='Provincia'
        placeholder='Seleccione la ubicación del vehículo'
        type='select'
        options={SelectProvinces}
      />
      <Divider my='0' />
      <ProductField
        name='extraComment'
        label='Comentario adicional'
        placeholder='Si tiene un comentario adicional, favor anótelo aquí'
        type='textarea'
        labelAlign='flex-start'
      />
    </Grid>
  )
}

export default GeneralInformation
