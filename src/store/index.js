import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { calendarSlice } from './calendar/calendar.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [calendarSlice.name]: calendarSlice.reducer,
   },
})
