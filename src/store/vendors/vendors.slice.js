import { createSlice } from '@reduxjs/toolkit'
import {
   getVacansyDetail,
   getVacansyInfo,
   getVendors,
   getVendorsDetailCart,
} from './vendors.thunk'

const initialState = {
   vendorsGetCart: [],
   vendorsDetail: [],
   vacansyGet: [],
   vacansyGetDetail: [],
}

export const vendorsSlice = createSlice({
   name: 'vendor',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getVendors.fulfilled, (state, action) => {
            state.vendorsGetCart = action.payload
         })
         .addCase(getVendorsDetailCart.fulfilled, (state, action) => {
            state.vendorsDetail = action.payload
         })
         .addCase(getVacansyInfo.fulfilled, (state, action) => {
            state.vacansyGet = action.payload
         })
         .addCase(getVacansyDetail.fulfilled, (state, action) => {
            state.vacansyGetDetail = action.payload
         })
   },
})
