import { createSlice } from '@reduxjs/toolkit'
import { interviewDetailThunk, interviewThunk } from './interview.thunk'

const initialState = {
   getInterview: [],
   getInterviewDetail: [],
}

export const interviewSlice = createSlice({
   name: 'interview',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(interviewThunk.fulfilled, (state, action) => {
            state.getInterview = action.payload
         })
         .addCase(interviewDetailThunk.fulfilled, (state, action) => {
            state.getInterviewDetail = action.payload
         })
   },
})
