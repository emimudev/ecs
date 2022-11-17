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
          colorScheme='pink'
          validateIsChecked={() => {
            // console.log({ name: value, equipment: formik.values.equipment })
            return formik.values.equipment.find(item => item === value) !== undefined
          }}
        />
      ))}
    </Grid>
  )
}

const EquipmentItems = [
  { value: 'Alarma' },
  { value: 'Iluminación dinámica' },
  { value: 'ABS' },
  { value: 'Sistema de freno combinado' },
  { value: 'Control de estabilidad' },
  { value: 'Suspensión Electrónica' },
  { value: 'Control de presión de neumáticos' },
  { value: 'Control de crucero' },
  { value: 'Modos de conducción' },
  { value: 'Guardabarros de motor' },
  { value: 'Caballete central' },
  { value: 'Pantalla TFT' },
  { value: 'Asiento de Gel' },
  { value: 'Agarres Térmicos' },
  { value: 'Extras' }
]

export default Equipment
