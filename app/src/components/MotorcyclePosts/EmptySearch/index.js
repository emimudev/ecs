import { Button, Container, Flex, Stack, Text } from '@chakra-ui/react'
import SearchLogo from 'components/Illustrations/SearchLogo'
import React from 'react'
import { Link } from 'react-router-dom'

function EmptySearch() {
  return (
    <Container maxW='3xl'>
      <Flex flexDirection='column' gap='8'>
        <Stack>
          <Container maxW='350px' px={10} py={5}>
            <SearchLogo />
          </Container>
          <Text
            textAlign='center'
            fontWeight='bold'
            fontSize='3xl'
            _light={{ color: 'gray.600' }}
            _dark={{ color: 'gray.300' }}
          >
            La búsqueda no ha generado resultados
          </Text>
          <Text
            textAlign='center'
            fontWeight='semibold'
            _light={{ color: 'gray.500' }}
            _dark={{ color: 'gray.400' }}
          >
            Lo sentimos, no hemos encontrado ningún transporte eléctrico que coincida con tu búsqueda. <br /> Puede realizar otra búsqueda con distintos valores si lo desea.
          </Text>
        </Stack>
        <Button
          as={Link}
          to='/'
          _light={{ bg: 'pink.300', _hover: { bg: 'pink.400' } }}
          _dark={{ bg: 'pink.500', _hover: { bg: 'pink.600' } }}
          w='fit-content'
          alignSelf='center'
          color='white'
          fontWeight='bold'
          minW='150px'
        >
          Ir a inicio
        </Button>
      </Flex>
    </Container>
  )
}

export default EmptySearch
