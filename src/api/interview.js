import { axiosInstance } from '../config/axiosInstants'

export const getInterviewAllRequest = () => {
   return axiosInstance.get(`/interview/detail/`)
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
export const putInterviewRequest = ({ id, data }) => {
   return axiosInstance.put(`/interview/${id}/`, data)
}

export const getInternsDetailRequest = (id) => {
   return axiosInstance.get(`/interns/${id}/`)
}
export const getInternsRequest = () => {
   return axiosInstance.get(`/interns/`)
}
