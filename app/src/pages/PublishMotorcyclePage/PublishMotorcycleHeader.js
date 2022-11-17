import { Box } from '@chakra-ui/react'
import { PageTitle } from 'components/PageLayout'

function PublishMotorcycleHeader() {
  return (
    <Box>
      <PageTitle>
        Anuncie su motocicleta
      </PageTitle>
      <Box mt='1'>
        Complete la información solicitada para poder publicar el anuncio de su motocicleta.
      </Box>
    </Box>
  )
}

export default PublishMotorcycleHeader
