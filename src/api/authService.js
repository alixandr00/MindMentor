import { axiosInstance } from '../config/axiosInstants'

export const signInRequest = (data) => {
   return axiosInstance.post('/auth/token/login/', data)
}

export const profileRequest = () => {
   return axiosInstance.get(`/api/v1/profile/`)
}

export const internsStudents = () => {
   return axiosInstance.get(`/interns/`)
}
export const internsStudentsDetails = (id) => {
   return axiosInstance.get(`/interns/${id}/`)
}

export const internsStudentsDelete = (id) => {
   return axiosInstance.delete(`/interns/${id}/`)
}

export const internsSearchStudents = ({ inputValue, selectedValue }) => {
   return axiosInstance.get(
      `/interns/?search=${inputValue}&status=${selectedValue}`
   )
}

export const addedInterns = (data) => {
   return axiosInstance.post('/interns/create/', data)
}
