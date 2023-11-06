import { createAsyncThunk } from '@reduxjs/toolkit'
import { internsStudents, internsStudentsDetails } from '../../api/authService'

export const fetchInterns = createAsyncThunk(
   'interns/fetchInterns',
   async (_, { rejectWithValue }) => {
      try {
         const response = await internsStudents()
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const fetchInternsDetails = createAsyncThunk(
   'interns/fetchInternsDetails',
   async (id, { rejectWithValue }) => {
      try {
         const response = await internsStudentsDetails(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
