import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from './useAuthState'

function useHiddenPage({ redirectTo = '/' } = {}) {
  const { isLogged } = useAuthState()
  const navigation = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      navigation(redirectTo)
    }
  }, [isLogged, redirectTo, navigation])

  return {
    show: isLogged
  }
}

export default useHiddenPage
