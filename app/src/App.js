import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { theme } from './theme'
import store from 'redux/store'
import AuthContextProvider from 'context/AuthContext'
import Navbar from 'components/Navbar'
import './services/axios.interceptors'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path='*' element={<Navbar />} />
              </Routes>
            </BrowserRouter>
          </AuthContextProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default App
