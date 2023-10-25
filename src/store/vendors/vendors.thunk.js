import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteVacansyRequest,
   editCartDetailRequest,
   editVacansyRequest,
   getVacansyDetailRequest,
   getVacansyRequest,
   postNewCartRequest,
   postVacansyDetailRequest,
   vendorsDeleteCartRequest,
   vendorsGetCartDeyailRequest,
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

export const getVendorsDetailCart = createAsyncThunk(
   'vendor/getVendorsDetailCart',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         const response = await vendorsGetCartDeyailRequest(id)
         dispatch(getVendors())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteVendors = createAsyncThunk(
   'vendor/deleteVendors',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         await vendorsDeleteCartRequest(id)
         dispatch(getVendors())
         dispatch(getVendorsDetailCart(id))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const addNewCart = createAsyncThunk(
   'vendor/deleteVendors',
   async (data, { dispatch, rejectWithValue }) => {
      try {
         await postNewCartRequest(data)
         dispatch(getVendors())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const editDetailCart = createAsyncThunk(
   'vendor/editDetailCart',
   async (data, { dispatch, rejectWithValue }) => {
      try {
         const response = await editCartDetailRequest(data)
         dispatch(getVendors())
         dispatch(getVendorsDetailCart(data.id))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getVacansyInfo = createAsyncThunk(
   'vendor/getVacansyInfo',
   async (_, { dispatch, rejectWithValue }) => {
      try {
         const response = await getVacansyRequest()
         dispatch(getVendors())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getVacansyDetail = createAsyncThunk(
   'vendor/getVacansyDetail',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         const response = await getVacansyDetailRequest(id)
         dispatch(getVendors())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const addNewVacancy = createAsyncThunk(
   'vendor/addNewVacancy',
   async (data, { rejectWithValue }) => {
      try {
         await postVacansyDetailRequest(data)
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const deleteVacancyThunk = createAsyncThunk(
   'vendor/deleteVacancyThunk',
   async (id, { rejectWithValue }) => {
      try {
         await deleteVacansyRequest(id)
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const editVacancyThunk = createAsyncThunk(
   'vendor/editVacancyThunk',
   async (data, { rejectWithValue }) => {
      try {
         await editVacansyRequest(data)
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
