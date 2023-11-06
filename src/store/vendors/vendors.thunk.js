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
   async (id, { dispatch, rejectWithValue }) => {
      try {
         const response = await vendorsGetCartDeyailRequest(id)
         dispatch(getSearchVendors(''))
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
   async (data, { dispatch, rejectWithValue }) => {
      try {
         await postNewCartRequest(data)
         dispatch(getSearchVendors(''))
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
   async (_, { dispatch, rejectWithValue }) => {
      try {
         const response = await getVacancyRequest()
         dispatch(getSearchVendors(''))
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

         dispatch(getSearchVendors(''))
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
   async (data, { dispatch, rejectWithValue }) => {
      try {
         await editVacansyRequest(data)
         dispatch(getSearchVendors(''))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
