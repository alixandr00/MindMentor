import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstants'
import { showSnackbar } from '../../components/UI/snackbar/Snackbar'

export const getGroups = createAsyncThunk(
   'groups/getGroup',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/group/`)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getGroupsBySearch = createAsyncThunk(
   'groups/getGroupBySearch',
   async (data, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/group/?search=${data}`)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getGroupFiltered = createAsyncThunk(
   'groups/getGroupFilter',
   async (status, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/group/?status=${status}`)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const postGroups = createAsyncThunk(
   'groups/postGroup',
   async (data, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.post(
            `/group/create/`,
            data.formData
         )
         dispatch(getGroups())
         showSnackbar({
            severity: 'success',
            message: 'Successfully created group',
         })
         data.oncloseModal()
         return response.data
      } catch (error) {
         showSnackbar({
            severity: 'error',
            message: 'Заполните все поля !',
         })
         return rejectWithValue(error)
      }
   }
)
export const deleteGroups = createAsyncThunk(
   'groups/deleteGroup',
   async (data, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(`/group/${data.getId}/`)
         data.setDeleteOpenModal(false)
         showSnackbar({
            severity: 'success',
            message: 'Successfully deleted group',
         })
         dispatch(getGroups())
         return response.data
      } catch (error) {
         showSnackbar({
            severity: 'error',
            message: 'Cannot delete group !',
         })
         return rejectWithValue(error)
      }
   }
)

export const getGroupById = createAsyncThunk(
   'groups/getGroupById',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/group/${id}/get`)
         showSnackbar({
            severity: 'success',
            message: 'Successfully get group',
         })
         return response.data
      } catch (error) {
         showSnackbar({
            severity: 'error',
            message: 'Cannot get group !',
         })
         return rejectWithValue(error)
      }
   }
)
export const putGroupById = createAsyncThunk(
   'groups/putGroupById',
   async (
      { formData, groupId, closeModalHandlerEdit },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await axiosInstance.put(
            `/group/${groupId}/up`,
            formData
         )
         closeModalHandlerEdit()
         dispatch(getGroups())
         showSnackbar({
            severity: 'success',
            message: 'Successfully put group',
         })
         return response.data
      } catch (error) {
         showSnackbar({
            severity: 'error',
            message: 'Cannot put group !',
         })
         return rejectWithValue(error)
      }
   }
)

export const deleteInternInGroup = createAsyncThunk(
   'groups/deleteIntern',
   async (data, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(
            `/groups/${data.groupId}/remove_intern/${data.internId}`
         )
         showSnackbar({
            severity: 'success',
            message: 'Successfully deleted intern in group',
         })
         dispatch(getGroupById(data.groupId))
         return response.data
      } catch (error) {
         showSnackbar({
            severity: 'error',
            message: 'Cannot delete group !',
         })
         return rejectWithValue(error)
      }
   }
)
