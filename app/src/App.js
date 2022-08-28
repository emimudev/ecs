import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { theme } from './theme'
import Navbar from 'components/Navbar'
import store from 'redux/store'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>

  )
}

export default App
