import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstants'

export const getCalendars = createAsyncThunk(
   'calendar/GetCalendars',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/calendars/`)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const createData = createAsyncThunk(
   'calendar/createData',
   async (data, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.post('/calendars/create/', data)
         dispatch(getCalendars())
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getCalendarForId = createAsyncThunk(
   'calendar/getCalendarForId',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/calendars/${id}/`)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const CalendarPutRequestForId = createAsyncThunk(
   'calendar/getCalendarForId',
   async (send, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.put(
            `/calendars/${send.id}/`,
            send.data
         )
         dispatch(getCalendarForId(send.id))
         dispatch(getCalendars())
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const CalendarDeleteRequestForId = createAsyncThunk(
   'calendar/deleteCalendarForId',
   async (data, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(
            `/calendars/${data.selectId}/`
         )
         data.setOpen2Modal(false)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
