/**
 * @typedef AuthModalTypes
 * @property {number} SignIn
 * @property {number} SignUp
 */
export const AuthModalTypes = {
  SignIn: 0,
  SignUp: 1
}

/**
 * @typedef AuthModalState
 * @property {boolean} isOpened
 * @property {number} type
 */
export const AuthModalEmptyState = {
  isOpened: false,
  type: AuthModalTypes.SignIn
}
