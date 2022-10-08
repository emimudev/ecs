import { Flex, chakra } from '@chakra-ui/react'
import { CategoryContainer } from './CategoryContainer'

function CategoryCard({ name, mainContent, extraContent, icon, index, to = '#' }) {
  return (
    <CategoryContainer to={to} index={index}>
      <Flex alignItems={{ base: 'center', md: 'flex-start' }} gap={3}>
        <Flex
          bg='pink.500'
          borderRadius='full'
          h='50px'
          w='50px'
          justifyContent='center'
          alignItems='center'
          flex='0 0 auto'
          _light={{ bg: 'pink.300', color: 'pink.700' }}
          _dark={{ bg: 'pink.400', color: 'pink.900' }}
        >
          {icon}
        </Flex>
        <chakra.h3
          display={{ base: 'flex', md: 'none' }}
          fontWeight='bold'
          fontSize='xl'
          noOfLines='1'
          _groupHover={{
            textDecoration: 'underline',
            _light: { color: 'pink.500' },
            _dark: { color: 'pink.400' }
          }}
        >
          {name}
        </chakra.h3>
      </Flex>
      <Flex
        direction='column'
        textAlign='left'
        flex='1 1 auto'
      >
        <Flex display={{ base: 'none', md: 'flex' }}>
          <chakra.h3
            fontWeight='bold'
            fontSize='lg'
            pb={2}
            noOfLines='1'
            _groupHover={{
              textDecoration: 'underline',
              _light: { color: 'pink.500' },
              _dark: { color: 'pink.400' }
            }}
          >
            {name}
          </chakra.h3>
        </Flex>
        <Flex flexDirection='column' gap={3} flex='1 1 auto'>
          <chakra.span flex='1 1 auto' display='flex'>
            {mainContent}
          </chakra.span>
          <chakra.h4
            _light={{ color: 'gray.600' }}
            _dark={{ color: 'gray.500' }}
            fontWeight='bold'
            textTransform='uppercase'
          >
            {extraContent}
          </chakra.h4>
        </Flex>
      </Flex>
    </CategoryContainer>
  )
}

export default CategoryCard
