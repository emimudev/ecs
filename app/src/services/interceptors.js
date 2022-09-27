import axios from 'axios'
import store from 'redux/store'

export const setAuthTokenInterceptor = axios.interceptors.request.use(
  config => {
    const { headers } = config
    const token = store.getState().auth.sessionToken
    headers.Authorization = `Bearer ${token}`
    return config
  },
  error => Promise.reject(error)
)
