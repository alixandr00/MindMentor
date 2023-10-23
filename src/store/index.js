import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { groupsSlice } from './groups/groupSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [groupsSlice.name]: groupsSlice.reducer,
   },
})
