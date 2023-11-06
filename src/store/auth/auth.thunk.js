import { createAsyncThunk } from '@reduxjs/toolkit'
import { LOGIN_USER_KEY } from '../../utils/common/constants/globalConstants'
import { profileRequest, signInRequest } from '../../api/authService'

export const profile = createAsyncThunk(
   'get/profile',
   async (page, { rejectWithValue }) => {
      try {
         const response = await profileRequest(page)
         console.log('response: ', response)

         const existingData = localStorage.getItem(LOGIN_USER_KEY)
         // eslint-disable-next-line prefer-const
         let userData = existingData ? JSON.parse(existingData) : {}

         userData.user_type = response.data.user_type

         localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(userData))

         return response.data
      } catch (error) {
         console.log('error: ', error)
         return rejectWithValue(error)
      }
   }
)

export const signIn = createAsyncThunk(
   'auth/signIn',
   async ({ data, snackbar }, { dispatch, rejectWithValue }) => {
      try {
         const response = await signInRequest(data)
         console.log('response: ', response)

         const result = {
            auth_token: 'YWRtaW46YWRtaW4=',
            token: response.data.auth_token,
         }

         const existingData = localStorage.getItem(LOGIN_USER_KEY)
         let userData = existingData ? JSON.parse(existingData) : {}

         userData = { auth_token: result.auth_token }

         localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(userData))

         snackbar({
            message: 'Вы успешно вошли',
            severity: 'success',
         })

         dispatch(profile())

         return result
      } catch (error) {
         snackbar({
            message: 'login или password не правильно, повторите ещё раз',
            severity: 'warning',
         })

         return rejectWithValue(error)
      }
   }
)

export const logOut = () => {
   window.location.pathname = '/'
   return localStorage.removeItem(LOGIN_USER_KEY)
}
