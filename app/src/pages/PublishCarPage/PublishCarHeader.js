import { Box } from '@chakra-ui/react'
import { PageTitle } from 'components/PageLayout'

function PublishCarHeader() {
  return (
    <Box>
      <PageTitle>
        Anuncie su auto
      </PageTitle>
      <Box mt='1'>
        Complete la información solicitada para poder publicar el anuncio de su vehículo.
      </Box>
    </Box>
  )
}

export default PublishCarHeader
