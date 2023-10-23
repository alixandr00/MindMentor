import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { vendorsSlice } from './vendors/vendors.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [vendorsSlice.name]: vendorsSlice.reducer,
   },
})
