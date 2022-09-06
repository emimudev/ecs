import { createSlice } from '@reduxjs/toolkit'

export const AuthModalTypes = {
  SignIn: 0,
  SignUp: 1
}

const UserEmptyState = {
  id: null,
  name: null,
  lastname: null,
  email: null
}

const AuthModalEmptyState = {
  isOpened: false,
  type: AuthModalTypes.SignIn
}

const AuthEmptyState = {
  isLogged: false,
  sessionToken: null,
  user: UserEmptyState,
  authModal: AuthModalEmptyState
}

function getInitialState() {
  const sessionToken = localStorage.getItem('sessionToken')
  const sessionUser = localStorage.getItem('sessionUser')
  if (sessionToken && sessionUser) {
    return {
      isLogged: true,
      sessionToken,
      user: sessionUser,
      authModal: AuthModalEmptyState
    }
  }
  return AuthEmptyState
}

export const authSlice = createSlice({
  name: '@auth',
  initialState: getInitialState,
  reducers: {
    loginAction: (state, { payload }) => {
      const { user, sessionToken, rememberMe } = payload
      if (rememberMe) {
        window.localStorage.setItem('sessionToken', sessionToken)
        window.localStorage.setItem('sessionUser', JSON.stringify(user))
      }
      return {
        ...state,
        isLogged: true,
        sessionToken,
        user
      }
    },
    logoutAction: () => {
      window.localStorage.removeItem('sessionToken')
      window.localStorage.removeItem('sessionUser')
      return AuthEmptyState
    },
    openSignInAction: (state) => {
      return {
        ...state,
        authModal: {
          isOpened: true,
          type: AuthModalTypes.SignIn
        }
      }
    },
    openSignUpAction: (state) => {
      return {
        ...state,
        authModal: {
          isOpened: true,
          type: AuthModalTypes.SignUp
        }
      }
    },
    closeAuthModalAction: (state) => {
      return {
        ...state,
        authModal: AuthModalEmptyState
      }
    }
  }
})

export const {
  loginAction,
  logoutAction,
  openSignInAction,
  openSignUpAction,
  closeAuthModalAction
} = authSlice.actions
