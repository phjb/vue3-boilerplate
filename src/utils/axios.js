import { ElLoading } from 'element-plus'
import axios from 'axios'
// import {
//   ACCESS_TOKEN,
//   FORBIDDEN_STATUS_CODE,
//   UNAUTHORIZED_STATUS_CODE
// } from '@constants'

axios.defaults.timeout = 3600000

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/jokes/`,
  headers: {
    'content-type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    ElLoading.service({ fullscreen: true })
    return config
  },
  (error) => {
    ElLoading.service({ fullscreen: true }).close()
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    ElLoading.service({ fullscreen: true }).close()
    return response
  },
  (error) => {
    ElLoading.service({ fullscreen: true }).close()
    return Promise.reject(error)
  }
)

export default api
