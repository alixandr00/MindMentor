import { axiosInstance } from '../config/axiosInstants'

export const getInterviewRequest = () => {
   return axiosInstance.get('/interview/')
}
export const getInterviewDetailRequest = (id) => {
   return axiosInstance.get(`/interview/${id}/`)
}

export const postNewInterviewRequest = (data) => {
   return axiosInstance.post('/interview/', data)
}
export const deleteInterviewRequest = (id) => {
   return axiosInstance.delete(`/interview/${id}/`)
}
export const putInterviewRequest = (id) => {
   return axiosInstance.put(`/interview/${id}/`)
}
