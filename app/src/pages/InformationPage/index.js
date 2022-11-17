import Properties from 'components/Information/Adventages'
import ElectricCar from 'components/Information/ElectricCar'
import InformationTitle from 'components/Information/InformationTitle'
import MapStation from 'components/Information/MapStation'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import React from 'react'

function InformatioPage() {
  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody gap='120px' pb='20'>
        <PageSection hasSlick>
          <InformationTitle />
        </PageSection>
        <PageSection hasSlick>
          <ElectricCar />
        </PageSection>
        <PageSection hasSlick>
          <Properties type='Adventages' />
        </PageSection>
        <PageSection hasSlick>
          <Properties type='Weakness' />
        </PageSection>
        <PageSection hasSlick>
          <MapStation />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default InformatioPage
