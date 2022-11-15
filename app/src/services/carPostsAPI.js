import axios from 'axios'
import { API_URL } from './services.config'

const ENTRY_POINT = 'posts/cars'

function find(carPostId) {
  return axios
    .get(`${API_URL}/${ENTRY_POINT}/${carPostId}`)
    .then(res => res.data)
}

function create(carPost) {
  return axios
    .post(`${API_URL}/${ENTRY_POINT}`, { data: carPost })
    .then(res => res.data)
}

const carPostsAPI = {
  create,
  find
}

export default carPostsAPI
