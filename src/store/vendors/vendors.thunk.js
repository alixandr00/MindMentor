import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteVacansyRequest,
   editCartDetailRequest,
   editVacansyRequest,
   getSearchVendorRequest,
   getVacancyRequest,
   getVacansyDetailRequest,
   postNewCartRequest,
   postVacansyDetailRequest,
   vendorsDeleteCartRequest,
   vendorsGetCartDeyailRequest,
} from '../../api/vendorsGetService'

export const getSearchVendors = createAsyncThunk(
   'vendor/getSearchVendors',
   async (name, { rejectWithValue }) => {
      try {
         const response = await getSearchVendorRequest(name)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getVendorsDetailCart = createAsyncThunk(
   'vendor/getVendorsDetailCart',
   async (id, { rejectWithValue }) => {
      try {
         const response = await vendorsGetCartDeyailRequest(id)
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
         dispatch(getSearchVendors(''))
         dispatch(getVendorsDetailCart(id))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const addNewCart = createAsyncThunk(
   'vendor/addNewCart',
   async (data, { rejectWithValue }) => {
      try {
         await postNewCartRequest(data)
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const editDetailCart = createAsyncThunk(
   'vendor/editDetailCart',
   async (data, { rejectWithValue }) => {
      try {
         const response = await editCartDetailRequest(data)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getVacansy = createAsyncThunk(
   'vendor/getVacansy',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getVacancyRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getVacansyDetail = createAsyncThunk(
   'vendor/getVacansyDetail',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getVacansyDetailRequest(id)

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
