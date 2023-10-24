import { createSlice } from '@reduxjs/toolkit'
import { fetchInterns, fetchInternsDetails } from './internsThunk'

const initialState = {
   interns: [],
   internsDetails: [],
   isLoading: false,
   error: null,
}

const internsSlice = createSlice({
   name: 'interns',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchInterns.pending, (state) => {
            state.isLoading = true
         })
         .addCase(fetchInterns.fulfilled, (state, action) => {
            state.isLoading = false
            state.interns = action.payload
         })
         .addCase(fetchInterns.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
         })
         .addCase(fetchInternsDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.internsDetails = action.payload
         })
   },
})

export default internsSlice.reducer
