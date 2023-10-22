import axios from 'axios'
import { BASE_URL } from '../utils/common/constants/globalConstants'
// import { logOut } from '../store/auth/auth.thunk'

const headers = {
   'Content-Type': 'application/json',
}

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

let store

export const injectStore = (_store) => {
   store = _store
}

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const { token } = store.getState().auth

   if (token) {
      updatedConfig.headers.Authorization = `Basic ${token}`
   }
   return updatedConfig
})

const logOut = () => {}

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         store.dispatch(logOut())
      }
      return Promise.reject(error)
   }
)
