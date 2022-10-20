import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import PricingCard from 'components/PricingCard'

function DefaultPricing({ onChange }) {
  const [pricing, setPricing] = useState(null)

  const handleSelect = (id) => {
    onChange?.({ id })
    setPricing(id)
  }

  return (
    <Flex
      gap='12px 20px'
      flexWrap='wrap'
    >
      <Flex w='full' maxW='400px' justifyContent='center'>
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
      <Flex w='full' maxW='400px'>
        <PricingCard
          id={3}
          title='Premium Gold'
          description='Mayor exhibición en el sitio'
          amount='₡15000'
          details={['60 días', '25 fotos', 'Mayor visualización', 'Redes sociales', 'Mail a usuarios']}
          isPopular
          isSelected={pricing === 3}
          onSelect={handleSelect}
        />
      </Flex>
      <Flex w='full' maxW='400px'>
        <PricingCard
          id={2}
          title='Premium'
          description='Mayor exhibición en el sitio'
          amount='₡10000'
          details={['45 días', '15 fotos', 'Mayor visualización']}
          isSelected={pricing === 2}
          onSelect={handleSelect}
        />
      </Flex>
    </Flex>
  )
}

export default DefaultPricing
