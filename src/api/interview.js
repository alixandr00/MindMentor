import { axiosInstance } from '../config/axiosInstants'

export const getInterviewRequest = () => {
   return axiosInstance.get('/interview/')
}
