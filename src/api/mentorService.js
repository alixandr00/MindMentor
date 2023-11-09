import { axiosFileInstance } from '../config/axiosFileInstants'
import { axiosInstance } from '../config/axiosInstants'

export const getStatusMentorsRequest = ({ status, search }) => {
   return axiosInstance.get(
      `/mentor/?${search ? `search=${search}&` : ''}status=${status}`
   )
}

export const getMentorDetailRequest = (id) => {
   return axiosFileInstance.get(`/mentor/${id}`)
}

export const postCVMentorRequest = (data) => {
   return axiosFileInstance.post('/cv/create/', data)
}

export const createMentorRequest = (data) => {
   return axiosFileInstance.post('/mentor/create/', data)
}

export const deleteMentorRequest = (id) => {
   return axiosInstance.delete(`/mentor/${id}`)
}

export const getStackRequest = () => {
   return axiosInstance.get(`/stack/`)
}

export const putEditMentorRequest = (id, data) => {
   return axiosInstance.put(`/mentor/${id}/`, data)
}
