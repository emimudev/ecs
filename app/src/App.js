import './theme/global.styles.css'
import './services/axios.interceptors'
import 'slick-carousel/slick/slick.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { theme } from './theme'
import store from 'redux/store'
import AuthContextProvider from 'context/AuthContext'
import PageLayout from 'components/PageLayout'
import HomePage from 'pages/HomePage'
import PublishCarPage from 'pages/PublishCarPage'
import NotFoundPage from 'pages/NotFoundPage'
import PostPage from 'pages/PostPage'
import InformatioPage from 'pages/InformationPage'
import CarsPage from 'pages/CarsPage'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<PageLayout />}>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/information' element={<InformatioPage />} />
                  <Route path='/cars' element={<CarsPage />} />
                  <Route path='publish/fourth-wheels' element={<PublishCarPage />} />
                  <Route path='publish/two-wheels' element={<h1>Publish two-wheels</h1>} />
                  <Route path='publish/acc-and-spare' element={<h1>Publish acc-and-spare</h1>} />
                  <Route path='post/:postId' element={<PostPage />} />
                  <Route path='*' element={<NotFoundPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </AuthContextProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default App
