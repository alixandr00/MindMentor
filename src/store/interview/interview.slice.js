import { createSlice } from '@reduxjs/toolkit'
import { interviewThunk } from './interview.thunk'

const initialState = {
   getInterview: [],
}

export const interviewSlice = createSlice({
   name: 'interview',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(interviewThunk.fulfilled, (state, action) => {
         state.getInterview = action.payload
      })
   },
})
