import { Stack, Alert, AlertIcon } from '@chakra-ui/react'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import useHiddenPage from 'hooks/useHiddenPage'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import PublishMotorcycleHeader from './PublishMotorcycleHeader'
import PublishMotorcycleForm from './PublishMotorcycleForm'
import PublishMotorcycleContextProvider from 'context/PublishMotorcycleConytext'

function PublishMotorcyclePage() {
  const { show } = useHiddenPage()
  if (!show) return null
  return (
    <PublishMotorcycleContextProvider>
      <PageContainer>
        <ScrollToTopOnMount />
        <PublishMotorcycleTopAd />
        <PageBody py='5'>
          <PageSection fontSize='sm'>
            <Stack spacing={6}>
              <PublishMotorcycleHeader />
              <PublishMotorcycleForm />
            </Stack>
          </PageSection>
        </PageBody>
      </PageContainer>
    </PublishMotorcycleContextProvider>
  )
}

function PublishMotorcycleTopAd() {
  return (
    <Alert fontSize='sm' variant='subtle' status='info'>
      <AlertIcon />
      Este formulario es para ingresar los datos de motocicletas que están a la venta. Solo se permite la venta de una motocicleta por anuncio
    </Alert>
  )
}

export default PublishMotorcyclePage
