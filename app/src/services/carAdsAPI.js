import axios from 'axios'
import { API_URL } from './services.config'

const ENTRY_POINT = 'ad/cars'

function create(carAd) {
  return axios
    .post(`${API_URL}/${ENTRY_POINT}`, carAd)
    .then(res => res.data)
}

const carAdsAPI = {
  create
}

export default carAdsAPI
