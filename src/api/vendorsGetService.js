import { axiosInstance } from '../config/axiosInstants'

export const vendorsGetCartRequest = () => {
   return axiosInstance.get('/vendors/?page=1')
}
export const vendorsCartDetailRequest = () => {
   return axiosInstance.get(`/vendors`)
}
export const postVendorsUser = (data) => {
   return axiosInstance.post('/vendors/create/', data)
}
export const deleteUserCartRequest = (id) => {
   return axiosInstance.delete(`/vendors/${id}`)
}
