import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import CarsPosts from 'components/CarsPosts'
import FilterDrawer from 'components/FilterDrawer'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import { useState } from 'react'

function CarsPage() {
  const [loading, setLoading] = useState(false)
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
              <FilterDrawer loading={loading} setLoading={setLoading} />
            </Box>
          </Flex>
          <CarsPosts loading={loading} setLoading={setLoading} />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default CarsPage
