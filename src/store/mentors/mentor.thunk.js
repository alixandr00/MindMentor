import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   createMentorRequest,
   deleteMentorRequest,
   getMentorDetailRequest,
   getStackRequest,
   getStatusMentorsRequest,
   postCVMentorRequest,
   putEditMentorRequest,
} from '../../api/mentorService'
import { axiosInstance } from '../../config/axiosInstants'

export const getStatusMentors = createAsyncThunk(
   'get/getStatusMentors',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getStatusMentorsRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getMentorDetail = createAsyncThunk(
   'get/getMentorDetail',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getMentorDetailRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const createMentor = createAsyncThunk(
   'post/createMentor',
   async (payload, { rejectWithValue }) => {
      try {
         await createMentorRequest(payload.data)
         payload.get()

         payload.snackbar({
            message: 'Ментор успешно создан',
            severity: 'success',
         })

         payload.close()
      } catch (error) {
         const errorData = error.response.data

         if (errorData.email) {
            payload.snackbar({
               message: errorData.email[0],
               severity: 'error',
            })
         } else if (errorData.phone_number) {
            payload.snackbar({
               message: errorData.phone_number[0],
               severity: 'error',
            })
         }

         return rejectWithValue(error)
      }
   }
)

export const deleteMentor = createAsyncThunk(
   'delete/deleteMentor',
   async (payload, { rejectWithValue }) => {
      try {
         await deleteMentorRequest(payload.id)

         payload.get()
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postCVMentor = createAsyncThunk(
   'post/postCVMentor',
   async (payload, { dispatch, rejectWithValue }) => {
      try {
         const response = await postCVMentorRequest(payload.data)

         dispatch(payload.navigate(true))
         payload.get()

         return response.data.affinda
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getStack = createAsyncThunk(
   'get/getStack',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getStackRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const putEditMentor = createAsyncThunk(
   'put/putEditMentor',
   async (payload, { dispatch, rejectWithValue }) => {
      try {
         await putEditMentorRequest(payload.id, payload.data)

         dispatch(payload.get())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getMentors = createAsyncThunk(
   'get/getMentors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/mentor/')

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
