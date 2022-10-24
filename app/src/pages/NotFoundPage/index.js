import { Text, Container, Flex, Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import DazedFace from 'components/Illustrations/DazedFace'
import FeaturedPosts from 'components/FeaturedPosts'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'

function NotFoundPage() {
  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody py='5'>
        <Container maxW='3xl'>
          <Flex flexDirection='column' gap='8'>
            <Stack>
              <Container maxW='350px' px={10} py={5}>
                <DazedFace />
              </Container>
              <Text
                textAlign='center'
                fontWeight='bold'
                fontSize='3xl'
                _light={{ color: 'gray.600' }}
                _dark={{ color: 'gray.300' }}
              >
                La página no ha sido encontrada
              </Text>
              <Text
                textAlign='center'
                fontWeight='semibold'
                _light={{ color: 'gray.500' }}
                _dark={{ color: 'gray.400' }}
              >
                Lo sentimos, la página que estás buscando no existe. <br /> Si la dirección está bien escrita es probable que la página o el anuncio hayan sido eliminados.
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
        <PageSection title='Publicaciones destacadas'>
          <FeaturedPosts />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default NotFoundPage
