import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { vendorsSlice } from './vendors/vendors.slice'
import internsReducer from './interns/internsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [vendorsSlice.name]: vendorsSlice.reducer,
      interns: internsReducer,
   },
})
