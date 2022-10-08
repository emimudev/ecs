import FeaturedPosts from 'components/FeaturedPosts'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import RecentlyPosts from 'components/RecentlyPosts'
import Categories from 'components/Categories'

function HomePage() {
  return (
    <PageContainer>
      <PageBody>
        <PageSection title='Publicaciones destacadas' mt='5'>
          <FeaturedPosts />
        </PageSection>
        <PageSection title='Publicaciones recientes'>
          <RecentlyPosts />
        </PageSection>
        <PageSection title='Últimas ofertas'>
          <RecentlyPosts />
        </PageSection>
        <PageSection mb='80px'>
          <Categories />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default HomePage
