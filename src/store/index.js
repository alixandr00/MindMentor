import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { groupsSlice } from './groups/groupSlice'
import internsReducer from './interns/internsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [groupsSlice.name]: groupsSlice.reducer,
      interns: internsReducer,
   },
})
