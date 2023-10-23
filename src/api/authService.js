import { axiosInstance } from '../config/axiosInstants'

export const signInRequest = (data) => {
   return axiosInstance.post('/auth/token/login/', data)
}

export const profileRequest = () => {
   return axiosInstance.get(`/api/v1/profile/`)
}
