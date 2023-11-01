import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteInterviewRequest,
   getInterviewDetailRequest,
   getInterviewRequest,
   postNewInterviewRequest,
} from '../../api/interview'

export const interviewThunk = createAsyncThunk(
   'interview/interviewThunk',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getInterviewRequest()
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
         dispatch(interviewThunk())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const deleteInterviewThunk = createAsyncThunk(
   'interview/deleteInterviewThunk',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         await deleteInterviewRequest(id)
         dispatch(interviewThunk())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
