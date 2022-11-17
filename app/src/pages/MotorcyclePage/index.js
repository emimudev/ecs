import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import FilterDrawerMotorcycle from 'components/FilterDrawer/MotorcycleFilter'
import MotorcyclePosts from 'components/MotorcyclePosts'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import { useState } from 'react'

function MotorcyclePage() {
  const [loading, setLoading] = useState(false)
  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody>
        <PageSection title='' mt='5' hasSlick>
          <Flex>
            <Box p='4'>
              <Text as='h4' fontSize='xl' fontWeight='bold' role='heading'>
                Motocicletas
              </Text>
            </Box>
            <Spacer />
            <Box p='4'>
              <FilterDrawerMotorcycle type='motorcycle' loading={loading} setLoading={setLoading} />
            </Box>
          </Flex>
          <MotorcyclePosts loading={loading} setLoading={setLoading} />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default MotorcyclePage
