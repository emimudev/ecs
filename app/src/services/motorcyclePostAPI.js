import axios from 'axios'
import { API_URL } from './services.config'

const ENTRY_POINT = 'posts/motorcycle'
const ENTRY_POINT2 = 'posts/motorcycle/all'
const ENTRY_POINT3 = 'posts/motorcycle/search'

function find(motorcyclePostId) {
  return axios
    .get(`${API_URL}/${ENTRY_POINT}/${motorcyclePostId}`)
    .then(res => res.data)
}

function create(motorcyclePost) {
  return axios
    .post(`${API_URL}/${ENTRY_POINT}`, { data: motorcyclePost })
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

const motorcyclePostsAPI = {
  create,
  getPage,
  find,
  getPostBySearch
}

export default motorcyclePostsAPI
