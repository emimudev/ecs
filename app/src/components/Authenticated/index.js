import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

/**
 * Renders the child when there is a user logged in to the application.
 */
function Authenticated({ children }) {
  if (children === null || children === undefined) {
    throw new Error('Child node is required')
  }
  const { isLogged } = useSelector(store => store.auth)

  if (!isLogged) return null
  return children
}

Authenticated.propTypes = {
  children: PropTypes.node.isRequired
}

export default Authenticated
