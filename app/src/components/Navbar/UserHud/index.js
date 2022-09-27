import AuthenticatedHud from './AuthenticatedHud'
import AnonymousHud from './AnonymousHud'
import { useAuthState } from 'hooks/useAuthState'

function UserHud() {
  const { isLogged } = useAuthState()
  return isLogged
    ? <AuthenticatedHud />
    : <AnonymousHud />
}

export default UserHud
