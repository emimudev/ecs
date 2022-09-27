import { createContext, memo } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from 'redux/states/auth.state'
import authAPI from 'services/authAPI'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const authSlice = useSelector(state => state.auth)
  const dispatcher = useDispatch()
  const rememberMe = window.localStorage.getItem('sessionToken') !== null
  const mutation = useMutation(authAPI.verify, {
    onSuccess: (data, variables, context) => {
      const { user, token } = data
      dispatcher(loginAction({
        user,
        rememberMe,
        sessionToken: token
      }))
    },
    onError: () => dispatcher(logoutAction())
  })
  const { sessionToken, user } = authSlice

  // If the user was successfully retrieved from localstorage
  // then a check is made to confirm that the user can log in correctly.
  if (rememberMe && sessionToken && user && mutation.isIdle) {
    mutation.mutate({ token: sessionToken })
  }

  return (
    <AuthContext.Provider value={authSlice}>
      {children}
    </AuthContext.Provider>
  )
}

export default memo(AuthContextProvider)
