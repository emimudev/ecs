import { Box, Flex, Spacer } from '@chakra-ui/react'
import CarsPosts from 'components/CarsPosts'
import FilterDrawer from 'components/FilterDrawer'
import { PageBody, PageContainer, PageSection, PageTitle } from 'components/PageLayout'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'

function CarsPage() {
  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody>
        <PageSection title='' mt='5' hasSlick>
          <PageTitle extraContent={<FilterDrawer />}>
            Vehículos a la venta
          </PageTitle>
          <Flex>
            <Spacer />
            <Box p='4' />
          </Flex>
          <CarsPosts />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default CarsPage
