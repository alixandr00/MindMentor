import { createSlice } from '@reduxjs/toolkit'
import {
   fetchInterns,
   fetchInternsDelete,
   fetchInternsDetails,
   fetchInternsSearch,
} from './internsThunk'

const initialState = {
   interns: [],
   internsDetails: [],
   internsSearch: [],
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
         .addCase(fetchInternsSearch.fulfilled, (state, action) => {
            state.internsSearch = action.payload
         })

         .addCase(fetchInternsDetails.pending, (state) => {
            state.isLoading = true
         })
         .addCase(fetchInternsDelete.fulfilled, (state, action) => {
            state.isLoading = false
            state.interns = state.interns.filter(
               (intern) => intern.id !== action.payload.id
            )
         })
   },
})

export default internsSlice.reducer
