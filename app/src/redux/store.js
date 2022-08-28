import { configureStore } from '@reduxjs/toolkit'
import { authModalSlice } from './states/authModal.state'
import { userSlice } from './states/user.state'

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    authModal: authModalSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
