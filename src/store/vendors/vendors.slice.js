import { createSlice } from '@reduxjs/toolkit'
import {
   getSearchVendors,
   getVacansyDetail,
   getVendorsDetailCart,
} from './vendors.thunk'

const initialState = {
   vendorSearch: [],
   vendorsDetail: [],
   vacansyGetDetail: [],
}

export const vendorsSlice = createSlice({
   name: 'vendor',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getVendorsDetailCart.fulfilled, (state, action) => {
            state.vendorsDetail = action.payload
         })
         .addCase(getVacansyDetail.fulfilled, (state, action) => {
            state.vacansyGetDetail = action.payload
         })
         .addCase(getSearchVendors.fulfilled, (state, action) => {
            state.vendorSearch = action.payload
         })
   },
})
