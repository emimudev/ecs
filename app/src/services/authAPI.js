import axios from 'axios'
import { API_URL } from './services.config'

const ENTRY_POINT = 'auth'

function login({ username, password }) {
  const credentials = { username, password }
  return axios
    .post(`${API_URL}/${ENTRY_POINT}/login`, credentials)
    .then(res => res.data)
}

function signUp({ name, lastname, email, password }) {
  const user = { name, lastname, email, password }
  return axios
    .post(`${API_URL}/${ENTRY_POINT}/signup`, user)
    .then(res => res.data)
    .catch(err => {
      throw err.response
    })
}

function verify({ token }) {
  return axios
    .get(`${API_URL}/${ENTRY_POINT}/verify`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.data)
}

const authAPI = {
  login,
  signUp,
  verify
}

export default authAPI
