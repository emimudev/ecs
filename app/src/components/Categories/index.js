import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { memo } from 'react'
import { CategoryItems } from './items'
import CategoryCard from './CategoryCard'

function Categories() {
  return (
    <Flex
      textAlign='center'
      pt={10}
      justifyContent='center'
      direction='column'
      width='full'
    >
      <Box width={{ base: 'full', sm: 'lg' }} margin='auto'>
        <chakra.h3
          fontWeight='bold'
          fontSize={20}
          textTransform='uppercase'
          color={useColorModeValue('pink.500', 'pink.400')}
        >
          Explora más...
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize='3xl'
          fontWeight='bold'
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          Navega por nuestras principales categorías
        </chakra.h1>
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing='20'
        spacingY={{ base: '10' }}
        mt={10}
        mx='auto'
      >
        {CategoryItems.map((cardInfo, index) => (
          <CategoryCard {...cardInfo} key={index} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default memo(Categories)
