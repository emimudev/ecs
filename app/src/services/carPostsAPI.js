import axios from 'axios'
import { API_URL } from './services.config'

const ENTRY_POINT = 'posts/cars'
const ENTRY_POINT2 = 'posts/cars/all'
const ENTRY_POINT3 = 'posts/cars/search'

function create(carPost) {
  return axios
    .post(`${API_URL}/${ENTRY_POINT}`, { data: carPost })
    .then(res => res.data)
}

function getPage(page) {
  return axios.get(`${API_URL}/${ENTRY_POINT2}`, { params: { page } }).then(res => res.data)
}

function getPostBySearch(page, model, yearValues, priceValues, brandValues, province, carsStyles) {
  return axios.get(`${API_URL}/${ENTRY_POINT3}`,
    { params: { page, model, yearValues, priceValues, brandValues, province, carsStyles } })
    .then(res => res.data)
}

const carPostsAPI = {
  create,
  getPage,
  getPostBySearch
}

export default carPostsAPI
