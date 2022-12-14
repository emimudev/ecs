import CarsPosts from 'components/CarsPosts'
import FilterDrawer from 'components/FilterDrawer'
import { PageBody, PageContainer, PageSection, PageTitle } from 'components/PageLayout'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import { useState } from 'react'

function CarsPage() {
  const [loading, setLoading] = useState(false)
  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody>
        <PageSection title='' mt='5'>
          <PageTitle extraContent={<FilterDrawer />} mb='5'>
            Vehículos a la venta
          </PageTitle>
          <CarsPosts loading={loading} setLoading={setLoading} />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default CarsPage
