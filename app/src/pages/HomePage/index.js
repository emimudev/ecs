import FeaturedPosts from 'components/FeaturedPosts'
import { PageBody, PageContainer, PageSection } from 'components/PageLayout'
import RecentlyPosts from 'components/RecentlyPosts'
import Categories from 'components/Categories'

function HomePage() {
  return (
    <PageContainer>
      <PageBody>
        <PageSection title='Publicaciones destacadas' mt='5' hasSlick>
          <FeaturedPosts />
        </PageSection>
        <PageSection title='Publicaciones recientes' hasSlick>
          <RecentlyPosts />
        </PageSection>
        <PageSection title='Últimas ofertas' hasSlick>
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
