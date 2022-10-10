import { PageBody, PageContainer } from 'components/PageLayout'
import useHiddenPage from 'hooks/useHiddenPage'

function PublishCarPage() {
  const { show } = useHiddenPage()

  if (!show) return null

  return (
    <PageContainer>
      <PageBody>
        asd
      </PageBody>
    </PageContainer>
  )
}

export default PublishCarPage
