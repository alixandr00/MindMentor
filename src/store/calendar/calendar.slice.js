import { createSlice } from '@reduxjs/toolkit'
import { createData, getCalendarForId, getCalendars } from './calendar.thunk'

const initialState = {
   calendarData: [],
   weekData: [],
   calendarDataForId: [],
   isloading: false,
   isLoading: false,
}

export const calendarSlice = createSlice({
   name: 'calendar',
   initialState,
   reducers: {
      resetCalendarDataForId: (state) => {
         return {
            ...state,
            calendarDataForId: [],
         }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getCalendars.fulfilled, (state, action) => {
         state.calendarData = action.payload
         state.isloading = false
      })
      builder.addCase(getCalendars.pending, (state, action) => {
         state.calendarData = action.payload
         state.isloading = true
      })
      builder.addCase(getCalendars.rejected, (state, action) => {
         state.calendarData = action.payload
         state.isloading = false
      })
      builder.addCase(createData.fulfilled, (state, action) => {
         state.weekData = action.payload
         state.isloading = false
      })
      builder.addCase(createData.pending, (state, action) => {
         state.weekData = action.payload
         state.isloading = true
      })
      builder.addCase(createData.rejected, (state, action) => {
         state.weekData = action.payload
         state.isloading = false
      })
      builder.addCase(getCalendarForId.fulfilled, (state, action) => {
         state.calendarDataForId = action.payload
         state.isLoading = false
      })
      builder.addCase(getCalendarForId.pending, (state, action) => {
         state.calendarDataForId = action.payload
         state.isLoading = true
      })
      builder.addCase(getCalendarForId.rejected, (state, action) => {
         state.calendarDataForId = action.payload
         state.isLoading = false
      })
   },
})
export const resetCalendarDataForId = calendarSlice.actions
