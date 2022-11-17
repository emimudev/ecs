import FilterDrawerMotorcycle from 'components/FilterDrawer/MotorcycleFilter'
import MotorcyclePosts from 'components/MotorcyclePosts'
import { PageBody, PageContainer, PageSection, PageTitle } from 'components/PageLayout'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import { useState } from 'react'

function MotorcyclePage() {
  const [loading, setLoading] = useState(false)
  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody>
        <PageSection title='' mt='5'>
          <PageTitle extraContent={<FilterDrawerMotorcycle />} mb='5'>
            Motocicletas a la venta
          </PageTitle>
          <MotorcyclePosts loading={loading} setLoading={setLoading} />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default MotorcyclePage
