import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstants'

export const getGroups = createAsyncThunk(
   'groups/getGroup',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/group/`)
         return response.data.results
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
