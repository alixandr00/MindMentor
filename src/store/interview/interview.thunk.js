import { createAsyncThunk } from '@reduxjs/toolkit'
import { getInterviewRequest } from '../../api/interview'

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
