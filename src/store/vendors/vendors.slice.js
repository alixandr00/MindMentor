import { createSlice } from '@reduxjs/toolkit'
import {
   getSearchVendors,
   getVacansy,
   getVacansyDetail,
   getVendorsDetailCart,
} from './vendors.thunk'

const storedState = JSON.parse(localStorage.getItem('appState'))
const initialState = {
   vendorSearch: [],
   vendorsDetail: [],
   vacancyGet: [],
   vacansyGetDetail: [],
   vendorState: [],
   dd: storedState ? storedState.dd : false,
   isLoading: false,
}

export const vendorsSlice = createSlice({
   name: 'vendor',
   initialState,
   reducers: {
      dd(state, action) {
         const newState = { ...state, dd: action.payload }
         localStorage.setItem('appState', JSON.stringify(newState))
         return newState
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
         .addCase(getSearchVendors.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getSearchVendors.fulfilled, (state, action) => {
            state.isLoading = false
            state.vendorSearch = action.payload
         })
   },
})
