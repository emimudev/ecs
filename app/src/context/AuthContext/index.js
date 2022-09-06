import { createContext, memo } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from 'redux/states/auth.state'
import authAPI from 'services/authAPI'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const authSlice = useSelector(state => state.auth)
  const dispatcher = useDispatch()
  const mutation = useMutation(authAPI.verify, {
    onSuccess: (data, variables, context) => {
      const { user, token } = data
      console.log({ data })
      dispatcher(loginAction({
        user,
        sessionToken: token,
        rememberMe: true
      }))
    },
    onError: () => dispatcher(logoutAction())
  })
  const { sessionToken, user } = authSlice

  if (sessionToken && user && mutation.isIdle) {
    mutation.mutate({ token: sessionToken })
  }

  return (
    <AuthContext.Provider value={authSlice}>
      {children}
    </AuthContext.Provider>
  )
}

export default memo(AuthContextProvider)
