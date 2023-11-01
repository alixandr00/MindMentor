import { createSlice } from '@reduxjs/toolkit'
import {
   getSearchVendors,
   getVacansy,
   getVacansyDetail,
   getVendorsDetailCart,
} from './vendors.thunk'

const initialState = {
   vendorSearch: [],
   vendorsDetail: [],
   vacancyGet: [],
   vacansyGetDetail: [],
   vendorState: [],
   dd: false,
}

export const vendorsSlice = createSlice({
   name: 'vendor',
   initialState,
   reducers: {
      dd(state) {
         return { ...state, dd: !state.dd }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getVendorsDetailCart.fulfilled, (state, action) => {
            state.vendorsDetail = action.payload
         })
         .addCase(getVacansy.fulfilled, (state, action) => {
            state.vacancyGet = action.payload
         })
         .addCase(getVacansyDetail.fulfilled, (state, action) => {
            state.vacansyGetDetail = action.payload
         })
         .addCase(getSearchVendors.fulfilled, (state, action) => {
            state.vendorSearch = action.payload
         })
   },
})
