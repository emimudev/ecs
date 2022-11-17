import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth.slice'
import filters from './slices/Filters'
import carPosts from './slices/CarPosts'
import motorcyclePosts from './slices/MotorcyclePosts'
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    filters,
    carPosts,
    motorcyclePosts
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
