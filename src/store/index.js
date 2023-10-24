import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import internsReducer from './interns/internsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      interns: internsReducer,
   },
})
