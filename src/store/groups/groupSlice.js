import { createSlice } from '@reduxjs/toolkit'
import { getGroups } from './groupThunk'

const initialState = {
   groups: [],
   isLoading: false,
}

export const groupsSlice = createSlice({
   name: 'groups',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getGroups.fulfilled, (state, actions) => {
            state.groups = actions.payload
            state.isLoading = false
         })
         .addCase(getGroups.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getGroups.rejected, (state) => {
            state.isLoading = false
         })
   },
})
