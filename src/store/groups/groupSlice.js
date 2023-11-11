import { createSlice } from '@reduxjs/toolkit'
import {
   getGroupById,
   getGroupFiltered,
   getGroups,
   getGroupsBySearch,
} from './groupThunk'

const initialState = {
   groups: [],
   isLoading: false,
   getGroupId: {},
   getGroupFilter: [],
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
         .addCase(getGroupById.fulfilled, (state, actions) => {
            state.getGroupId = actions.payload
            state.isLoading = false
         })
         .addCase(getGroupById.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getGroupById.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(getGroupFiltered.fulfilled, (state, actions) => {
            state.isLoading = false
            state.groups = actions.payload
         })
         .addCase(getGroupsBySearch.fulfilled, (state, actions) => {
            state.isLoading = false
            state.groups = actions.payload
         })
   },
})
