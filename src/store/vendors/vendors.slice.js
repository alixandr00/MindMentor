import { createSlice } from '@reduxjs/toolkit'
import { getDetailVendors, getVendors } from './vendors.thunk'

const initialState = {
   vendorsGetCart: [],
   vendorsDetailCart: [],
}

export const vendorsSlice = createSlice({
   name: 'vendor',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getVendors.fulfilled, (state, action) => {
         state.vendorsGetCart = action.payload
      })
      builder.addCase(getDetailVendors.fulfilled, (state, action) => {
         state.vendorsDetailCart = action.payload
      })
   },
})
