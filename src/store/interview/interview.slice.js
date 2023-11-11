import { createSlice } from '@reduxjs/toolkit'
import {
   internsDetailGetThunk,
   internsGetThunk,
   interviewAllThunk,
   interviewDetailThunk,
} from './interview.thunk'

const initialState = {
   getInters: [],
   getInterviewAll: [],
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
         .addCase(interviewAllThunk.fulfilled, (state, action) => {
            state.getInterviewAll = action.payload
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
