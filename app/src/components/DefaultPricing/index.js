import { useState } from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import PricingCard from 'components/PricingCard'

function DefaultPricing({ onChange }) {
  const [pricing, setPricing] = useState(null)

  const handleSelect = (id) => {
    onChange?.({ id })
    setPricing(id)
  }

  return (
    <Grid
      gridTemplateColumns={{
        base: '1fr',
        sm: 'repeat(auto-fill, minmax(250px, 1fr))',
        lg: '1fr 1fr 1fr',
        xl: '1fr 2fr 1fr'
      }}
      gap={{
        base: '12px',
        md: '12px 20px'
      }}
      flexWrap='wrap'

    >
      <Flex w='full' minW='250px'>
        <PricingCard
          id={1}
          title='Estándar'
          description='Anuncio básico con menor visualización'
          amount='₡5000'
          details={['30 días', '5 fotos']}
          isSelected={pricing === 1}
          onSelect={handleSelect}
        />
      </Flex>
      <Flex w='full' minW='250px'>
        <PricingCard
          id={3}
          title='Premium Gold'
          description='Mayor exhibición en el sitio'
          amount='₡15000'
          details={['60 días', '20 fotos', 'Mayor visualización', 'Redes sociales', 'Mail a usuarios']}
          isPopular
          isSelected={pricing === 3}
          onSelect={handleSelect}
        />
      </Flex>
      <Flex w='full' minW='250px'>
        <PricingCard
          id={2}
          title='Premium'
          description='Mayor exhibición en el sitio'
          amount='₡10000'
          details={['45 días', '10 fotos', 'Mayor visualización']}
          isSelected={pricing === 2}
          onSelect={handleSelect}
        />
      </Flex>
    </Grid>
  )
}

export default DefaultPricing
