import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteUserCartRequest,
   postVendorsUser,
   vendorsCartDetailRequest,
   vendorsGetCartRequest,
} from '../../api/vendorsGetService'

export const getVendors = createAsyncThunk(
   'vendor/getVendors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await vendorsGetCartRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getDetailVendors = createAsyncThunk(
   'vendor/getDetailVendors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await vendorsCartDetailRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const addNewCartThunk = createAsyncThunk(
   'vendor/addNewCartThunk',
   async (data, { rejectWithValue }) => {
      try {
         await postVendorsUser(data)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const deleteUserCartThunk = createAsyncThunk(
   'vendor/deleteUserCartThunk',
   async (id, { rejectWithValue }) => {
      try {
         await deleteUserCartRequest(id)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
