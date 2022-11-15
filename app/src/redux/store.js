import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth.slice'
import filters from './slices/Filters'
import carPosts from './slices/CarPosts'
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    filters,
    carPosts
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
