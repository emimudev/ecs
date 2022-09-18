import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

/**
 * Renders the child when there is no user logged in to the application.
 */
function Unauthenticated({ children }) {
  if (children === null || children === undefined) {
    throw new Error('Child node is required')
  }
  const { isLogged } = useSelector(store => store.auth)
  if (isLogged) return null
  return children
}

Unauthenticated.propTypes = {
  children: PropTypes.node.isRequired
}

export default Unauthenticated
