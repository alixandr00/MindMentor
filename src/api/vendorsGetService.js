import { axiosInstance } from '../config/axiosInstants'

export const vendorsGetCartRequest = () => {
   return axiosInstance.get('/vendors/?page=1')
}
export const vendorsGetCartDeyailRequest = (id) => {
   return axiosInstance.get(`/vendors/${id}/`)
}
export const vendorsDeleteCartRequest = (id) => {
   return axiosInstance.delete(`/vendors/${id}`)
}
export const postNewCartRequest = (data) => {
   return axiosInstance.post('/vendors/create/', data)
}
export const editCartDetailRequest = ({ id, data }) => {
   return axiosInstance.put(`/vendors/${id}/`, data)
}
export const getVacansyRequest = () => {
   return axiosInstance.get(`/vacancy/?page=1`)
}
export const getVacansyDetailRequest = (id) => {
   return axiosInstance.get(`/vacancy/${id}/`)
}
export const postVacansyDetailRequest = (data) => {
   return axiosInstance.post(`/vacancy/create/`, data)
}
export const deleteVacansyRequest = (id) => {
   return axiosInstance.delete(`/vacancy/${id}/`)
}
export const editVacansyRequest = ({ id, data }) => {
   return axiosInstance.put(`/vacancy/${id}/`, data)
}
