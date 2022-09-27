import { createSlice } from '@reduxjs/toolkit'
import { AuthEmptyState } from 'redux/states/auth.state'
import { AuthModalEmptyState, AuthModalTypes } from 'redux/states/authModal.state'

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
      clearStorage()
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

function clearStorage() {
  window.localStorage.removeItem('sessionToken')
  window.localStorage.removeItem('sessionUser')
  window.sessionStorage.removeItem('sessionToken')
  window.sessionStorage.removeItem('sessionUser')
}

/**
 * @returns {import('redux/states/auth.state').AuthState}
 */
function getInitialState() {
  const storeToken = window.localStorage.getItem('sessionToken')
  const storeUser = window.localStorage.getItem('sessionUser')
  const sessionToken = window.sessionStorage.getItem('sessionToken')
  const sessionUser = window.sessionStorage.getItem('sessionUser')

  if (sessionUser && sessionToken) {
    return {
      ...AuthEmptyState,
      isLogged: true,
      sessionToken,
      user: JSON.parse(sessionUser)
    }
  }

  if (storeToken && storeUser) {
    return {
      ...AuthEmptyState,
      isLogged: true,
      sessionToken: storeToken,
      user: JSON.parse(storeUser)
    }
  }

  return AuthEmptyState
}

export const {
  loginAction,
  logoutAction,
  openSignInAction,
  openSignUpAction,
  closeAuthModalAction
} = authSlice.actions
