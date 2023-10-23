import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   interns: [],
   isLoading: false,
}

export const getInternsSlice = createSlice({
   name: 'interns',
   initialState,
   reducers: {},
})
