import { useSelector } from 'react-redux'
import AuthenticatedHud from './AuthenticatedHud'
import AnonymousHud from './AnonymousHud'

function UserHud() {
  const { isLogged } = useSelector(state => state.auth)
  return isLogged
    ? <AuthenticatedHud />
    : <AnonymousHud />
}

export default UserHud
