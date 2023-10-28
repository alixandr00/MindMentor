import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { interviewSlice } from './interview/interview.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [interviewSlice.name]: interviewSlice.reducer,
   },
})
