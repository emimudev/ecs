import { GridItem, chakra, Grid } from '@chakra-ui/react'
import FieldForm from 'components/FieldForm'

function ProductField({
  label,
  isInline = false,
  isRequired = true,
  direction = 'row',
  labelAlign = 'center',
  ...props
}) {
  return (
    <Grid
      display={isInline ? 'flex' : 'grid'}
      alignItems='center'
      flexDirection={direction}
      gridTemplateColumns={{
        base: '1fr',
        md: !isInline ? 'minmax(170px, 10%) 1fr' : '1fr'
      }}
      gap={{
        base: '2',
        md: !isInline ? '10' : '4'
      }}
      w='full'
    >
      <GridItem
        display='flex'
        alignItems={labelAlign}
        flex='1'
        h='full'
        fontWeight='semibold'
        gap='3'
      >
        <chakra.span>
          {label}
        </chakra.span>
        <chakra.span
          display='flex'
          fontSize='12px'
          fontWeight='normal'
          _light={{
            color: 'gray.300'
          }}
          _dark={{
            color: 'gray.500'
          }}
        >
          {!isRequired && '(Opcional)'}
        </chakra.span>
      </GridItem>
      <GridItem alignItems='center'>
        <FieldForm {...props} />
      </GridItem>
    </Grid>
  )
}

export default ProductField
