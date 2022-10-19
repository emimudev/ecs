import { Stack, Alert, AlertIcon } from '@chakra-ui/react'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import useHiddenPage from 'hooks/useHiddenPage'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import PublishCarHeader from './PublishCarHeader'
import PublishCarForm from './PublishCarForm'

function PublishCarPage() {
  const { show } = useHiddenPage()
  if (!show) return null
  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PublishCarTopAd />
      <PageBody py='5'>
        <PageSection fontSize='sm'>
          <Stack spacing={6}>
            <PublishCarHeader />
            <PublishCarForm />
          </Stack>
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

function PublishCarTopAd() {
  return (
    <Alert fontSize='sm' variant='subtle' status='info'>
      <AlertIcon />
      Este formulario es para ingresar los datos de vehículos que están a la venta. Solo se permite la venta de un vehículo por anuncio
    </Alert>
  )
}

export default PublishCarPage
