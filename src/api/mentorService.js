import { axiosInstance } from '../config/axiosInstants'

export const getMentorsRequest = () => {
   return axiosInstance.get('/mentor/')
}
