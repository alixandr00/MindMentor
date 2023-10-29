import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMentorsRequest } from '../../api/mentorService'

export const getMentors = createAsyncThunk(
   'get/getMentors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getMentorsRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
