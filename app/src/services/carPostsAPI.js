import axios from 'axios'
import { API_URL } from './services.config'

const ENTRY_POINT = 'posts/cars'

function create(carPost) {
  return axios
    .post(`${API_URL}/${ENTRY_POINT}`, { data: carPost })
    .then(res => res.data)
}

const carPostsAPI = {
  create
}

export default carPostsAPI
