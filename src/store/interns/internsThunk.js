import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   addedInterns,
   internsSearchStudents,
   internsStudents,
   internsStudentsDelete,
   internsStudentsDetails,
} from '../../api/authService'

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
export const postNewStudents = createAsyncThunk(
   'students/postNewStudents',
   async (data, { rejectWithValue }) => {
      try {
         await addedInterns(data)
      } catch (error) {
         return rejectWithValue('error')
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
export const fetchInternsSearch = createAsyncThunk(
   'interns/fetchInternsSearch',
   async ({ inputValue, selectedValue }, { rejectWithValue }) => {
      try {
         const response = await internsSearchStudents({
            inputValue,
            selectedValue,
         })
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const fetchInternsDelete = createAsyncThunk(
   'interns/fetchInternsDelete',
   async (payload, { dispatch, rejectWithValue }) => {
      // const inputValue = ''
      try {
         const response = await internsStudentsDelete(payload.id)
         payload.snackbar({
            message: 'Вы успешно удален!',
            severity: 'success',
         })
         dispatch(fetchInterns())
         dispatch(fetchInternsDetails())
         return response.data
      } catch (error) {
         payload.snackbar({
            message: `Error deleting intern: ${error.message}`,
            severity: 'error',
         })

         return rejectWithValue(error.message)
      }
   }
)
