import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { mentorSlice } from './mentors/mentor.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [mentorSlice.name]: mentorSlice.reducer,
   },
})
