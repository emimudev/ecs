import { Flex } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Navbar from 'components/Navbar'
import PageFooter from 'components/PageFooter'

function PageLayout() {
  return (
    <Flex direction='column' flex='1 1 auto'>
      <Navbar />
      <Flex as='main' direction='column' flex='1 1 auto' padding={{ base: '0 16px', lg: '0 calc(3.5vw + 24px)' }}>
        <Routes>
          <Route
            path='/publish' element={
              <div style={{ fontSize: '20px' }}>
                <h1>Publicar nuevo anuncio</h1>
              </div>
            }
          />
        </Routes>
      </Flex>
      <PageFooter />
    </Flex>
  )
}

export default PageLayout
