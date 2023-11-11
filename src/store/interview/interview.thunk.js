import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteInterviewRequest,
   getInternsDetailRequest,
   getInternsRequest,
   getInterviewAllRequest,
   getInterviewDetailRequest,
   postNewInterviewRequest,
   putInterviewRequest,
} from '../../api/interview'

export const interviewAllThunk = createAsyncThunk(
   'interview/interviewAllThunk',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getInterviewAllRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const interviewDetailThunk = createAsyncThunk(
   'interview/interviewDetailThunk',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getInterviewDetailRequest(id)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const newInterviewPostThunk = createAsyncThunk(
   'interview/newInterviewPostThunk',
   async (data, { dispatch, rejectWithValue }) => {
      try {
         await postNewInterviewRequest(data)
         dispatch(interviewAllThunk())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const deleteInterviewThunk = createAsyncThunk(
   'interview/deleteInterviewThunk',
   async (id, { rejectWithValue }) => {
      try {
         await deleteInterviewRequest(id)
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const editInterviewThunk = createAsyncThunk(
   'interview/editInterviewThunk',
   async (data, { rejectWithValue }) => {
      try {
         await putInterviewRequest(data)
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const internsDetailGetThunk = createAsyncThunk(
   'interview/internsDetailGetThunk',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getInternsDetailRequest(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const internsGetThunk = createAsyncThunk(
   'interview/internsGetThunk',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getInternsRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
