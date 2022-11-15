import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import CarsPosts from 'components/CarsPosts'
import FilterDrawer from 'components/FilterDrawer'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'

function CarsPage() {
  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody>
        <PageSection title='' mt='5' hasSlick>
          <Flex>
            <Box p='4'>
              <Text as='h4' fontSize='xl' fontWeight='bold' role='heading'>
                Vehículos
              </Text>
            </Box>
            <Spacer />
            <Box p='4'>
              <FilterDrawer />
            </Box>
          </Flex>
          <CarsPosts />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default CarsPage
