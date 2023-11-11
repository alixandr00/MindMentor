import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { groupsSlice } from './groups/groupSlice'
import { vendorsSlice } from './vendors/vendors.slice'
import internsReducer from './interns/internsSlice'
import { mentorSlice } from './mentors/mentor.slice'
import { calendarSlice } from './calendar/calendar.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [groupsSlice.name]: groupsSlice.reducer,
      interns: internsReducer,
      [internsReducer.name]: internsReducer.reducer,
      [mentorSlice.name]: mentorSlice.reducer,
      [vendorsSlice.name]: vendorsSlice.reducer,
      [calendarSlice.name]: calendarSlice.reducer,
   },
})
