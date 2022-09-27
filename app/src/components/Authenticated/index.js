import PropTypes from 'prop-types'
import { useAuthState } from 'hooks/useAuthState'

/**
 * Renders the child when there is a user logged in to the application.
 */
function Authenticated({ children }) {
  if (children === null || children === undefined) {
    throw new Error('Child node is required')
  }
  const { isLogged } = useAuthState()

  if (!isLogged) return null
  return children
}

Authenticated.propTypes = {
  children: PropTypes.node.isRequired
}

export default Authenticated
