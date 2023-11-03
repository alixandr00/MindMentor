import { createSlice } from '@reduxjs/toolkit'
import {
   internsDetailGetThunk,
   internsGetThunk,
   interviewDetailThunk,
   interviewThunk,
} from './interview.thunk'

const initialState = {
   getInterview: [],
   getInters: [],
   getInterviewDetail: [],
   getDetailInters: [],
   selectedInternId: null,
}

export const interviewSlice = createSlice({
   name: 'interview',
   initialState,
   reducers: {
      setSelectedInternId: (state, action) => {
         return { ...state, selectedInternId: action.payload }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(interviewThunk.fulfilled, (state, action) => {
            state.getInterview = action.payload
         })
         .addCase(interviewDetailThunk.fulfilled, (state, action) => {
            state.getInterviewDetail = action.payload
         })
         .addCase(internsDetailGetThunk.fulfilled, (state, action) => {
            state.getDetailInters = action.payload
         })
         .addCase(internsGetThunk.fulfilled, (state, action) => {
            state.getInters = action.payload
         })
   },
})

export const { setSelectedInternId } = interviewSlice.actions

export default interviewSlice.reducer
