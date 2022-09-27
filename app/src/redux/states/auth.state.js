import { AuthModalEmptyState } from './authModal.state'
import { UserEmptyState } from './user.state'

/**
 * @typedef  AuthState
 * @property {boolean} isLogged
 * @property {string} sessionToken
 * @property {import('./user.state').UserState} user
 * @property {import('./authModal.state').AuthModalState} authModal
 */

export const AuthEmptyState = {
  isLogged: false,
  sessionToken: null,
  user: UserEmptyState,
  authModal: AuthModalEmptyState
}
