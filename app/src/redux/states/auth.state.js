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
  const storeToken = window.localStorage.getItem('sessionToken')
  const storeUser = window.localStorage.getItem('sessionUser')
  const sessionUser = window.sessionStorage.getItem('sessionUser')
  const sessionToken = window.sessionStorage.getItem('sessionUser')

  if (sessionUser && sessionToken) {
    return {
      isLogged: true,
      sessionToken,
      user: JSON.parse(sessionUser),
      authModal: AuthModalEmptyState
    }
  }

  if (storeToken && storeUser) {
    return {
      isLogged: true,
      sessionToken: storeToken,
      user: JSON.parse(storeUser),
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
      } else {
        window.sessionStorage.setItem('sessionToken', sessionToken)
        window.sessionStorage.setItem('sessionUser', JSON.stringify(user))
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
      window.sessionStorage.removeItem('sessionToken')
      window.sessionStorage.removeItem('sessionUser')
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
