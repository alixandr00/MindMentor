import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import internsReducer from './interns/internsSlice'
import { mentorSlice } from './mentors/mentor.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [internsReducer.name]: internsReducer.reducer,
      [mentorSlice.name]: mentorSlice.reducer,
   },
})
