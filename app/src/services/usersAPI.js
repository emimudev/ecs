import axios from 'axios'
import { API_URL } from './services.config'

const ENTRY_POINT = 'users'

function create({ id, name, lastname, email }) {
  const user = { id, name, lastname, email }
  return axios
    .post(`${API_URL}/${ENTRY_POINT}`, user)
    .then(res => res.data)
}

const usersAPI = {
  create
}

export default usersAPI
