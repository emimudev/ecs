import { setPedingAction } from 'components/AuthForm/SignInForm/useSignInForm'
import { useDispatch } from 'react-redux'
import { openSignInAction } from 'redux/slices/auth.slice'
import { useAuthState } from './useAuthState'

function useAuthenticated(action) {
  const dispatcher = useDispatch()
  const { isLogged } = useAuthState()

  return (params) => {
    if (isLogged) {
      action?.(params)
    } else {
      dispatcher(openSignInAction())
      setPedingAction(() => action(params))
    }
  }
}

export default useAuthenticated
