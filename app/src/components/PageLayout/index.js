import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'
import MobileBottomNav from 'components/MobileBottomNav'
import PageFooter from './PageFooter'

function PageLayout() {
  return (
    <Flex direction='column' flex='1 1 auto'>
      <Navbar />
      <Flex
        as='main'
        direction='column'
        flex='1 1 auto'
        minH='350px'
      >
        <Outlet />
      </Flex>
      <PageFooter />
      <MobileBottomNav />
    </Flex>
  )
}

export default PageLayout
export { default as PageContainer } from './PageContainer'
export { default as PageBody } from './PageBody'
export { default as PageSection } from './PageSection'
export { default as PageFooter } from './PageFooter'
