import { useFormikContext } from 'formik'
import { Grid } from '@chakra-ui/react'
import ProductField from 'components/ProductField'

function Equipment() {
  const formik = useFormikContext()
  const handleChange = (event) => {
    const { value } = event.target
    const { equipment } = formik.values
    const valueExist = equipment.find((item) => item === value)
    if (valueExist) {
      formik.setFieldValue('equipment', equipment.filter((item) => item !== value))
    } else {
      formik.setFieldValue('equipment', [...equipment, value])
    }
  }
  return (
    <Grid
      gridTemplateColumns={{
        base: '1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr 1fr',
        xl: 'repeat(3, 1fr)'
      }}
      alignItems='center'
      gap='4'
      mt='0'
    >
      {EquipmentItems.map(({ label, value, name }, index) => (
        <ProductField
          key={index}
          name={name ?? 'equipment'}
          label={label ?? value}
          value={value ?? label}
          type='checkbox'
          direction='row-reverse'
          isInline
          size='lg'
          onChange={handleChange}
        />
      ))}
    </Grid>
  )
}

const EquipmentItems = [
  { value: 'RTV al día' },
  { value: 'Dirección hidráulica' },
  { value: 'Cierre central' },
  { value: 'Vidrios tintados' },
  { value: 'Bolsas de aire' },
  { value: 'Vidrios eléctricos' },
  { value: 'Espejos eléctricos' },
  { value: 'Alarma' },
  { value: 'Frenos ABS' },
  { value: 'Aire acondicionado' },
  { value: 'Desempeñador trasero' },
  { label: 'Sunroof (techo panorámico)', value: 'Sunroof' },
  { value: 'Aros de lujo' },
  { value: 'Turbo' },
  { value: 'Tapicería de cuero' },
  { value: 'Halógenos' },
  { value: 'Cassette' },
  { value: 'Disco compacto (DVD)' },
  { value: 'Cruise Control' },
  { value: 'Radio con USB/AUX' },
  { value: 'Control electrónico de estabilidad' },
  { value: 'Control de descenso' },
  { value: 'Caja de cambios dual' },
  { value: 'Cámara de retroceso' },
  { value: 'Sensores de retroceso' },
  { value: 'Sensores frontales' },
  { value: 'Control de radio en el volante' },
  { value: 'Volante multifuncional' },
  { value: 'Aire acondicionado climatizado' },
  { value: 'Asientos con memoria' },
  { value: 'Retrovisores refractibles' },
  { value: 'Luces de xenón/bixenón' },
  { value: 'Sensor de lluvia' },
  { value: 'Llave inteligente' },
  { value: 'Botón de arranque' },
  { value: 'Computadora de viaje' },
  { value: 'Volante ajustable' },
  { value: 'Bluetooth' }
]

export default Equipment
