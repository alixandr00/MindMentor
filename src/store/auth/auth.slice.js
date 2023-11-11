import { createSlice } from '@reduxjs/toolkit'
import {
   LOGIN_USER_KEY,
   USER_ROLE,
} from '../../utils/common/constants/globalConstants'
import { profile, signIn } from './auth.thunk'

const GUEST = 0

const getInitialState = () => {
   const json = localStorage.getItem(LOGIN_USER_KEY)

   if (json) {
      const userData = JSON.parse(json)

      return {
         isAuthorization: true,
         token: userData.auth_token,
         role: USER_ROLE[userData.user_type],
         isLoading: false,
      }
   }

   return {
      isAuthorization: false,
      token: '',
      role: USER_ROLE[GUEST],
      error: '',
      isLoading: false,
      profileData: '',
   }
}

const initialState = getInitialState()

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(signIn.fulfilled, (state, action) => {
            state.isAuthorization = true
            state.token = action.payload.auth_token

            state.role = 'ADMIN'
            state.isLoading = false
         })
         .addCase(signIn.pending, (state) => {
            state.isLoading = true
         })
         .addCase(signIn.rejected, (state, action) => {
            state.error = action.payload.message
            state.isLoading = false
         })
      builder.addCase(profile.fulfilled, (state, { payload }) => {
         state.profileData = payload
         state.isLoading = false
      })
      builder.addCase(profile.pending, (state) => {
         state.isLoading = true
      })
   },
})
