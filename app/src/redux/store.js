import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth.slice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
