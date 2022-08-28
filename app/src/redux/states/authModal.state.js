import { createSlice } from '@reduxjs/toolkit'

export const AuthModalTypes = {
  SignIn: 0,
  SignUp: 1
}

export const AuthModalEmptyState = {
  isOpened: false,
  type: AuthModalTypes.SignIn
}

export const authModalSlice = createSlice({
  name: 'auth-modal',
  initialState: AuthModalEmptyState,
  reducers: {
    openSignIn: () => {
      return {
        isOpened: true,
        type: AuthModalTypes.SignIn
      }
    },
    openSignUp: () => {
      return {
        isOpened: true,
        type: AuthModalTypes.SignUp
      }
    },
    closeAuthModal: (state) => {
      return AuthModalEmptyState
    }
  }
})
