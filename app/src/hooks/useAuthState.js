import { useSelector } from 'react-redux'

/**
 * Reads the AuthSlice from the global store
 * @returns {import('../redux/states/auth.state').AuthState} The auth state from the global store
 */
export const useAuthState = () => useSelector(store => store.auth)
