import { createSlice } from '@reduxjs/toolkit'
import { getMentors } from './mentor.thunk'

const initialState = {
   isLoading: false,
   mentorData: [],

   createMentorForm: {
      name: '',
      surname: '',
      status: true,
      stack: '',
      email: '',
      education: '',
      workExperience: '',
      pdf: '',
   },
   sort: 'All',
   valid: '',
   isError: '',
}

export const mentorSlice = createSlice({
   name: 'mentor',
   initialState,
   reducers: {
      statusHandler(state, { payload }) {
         return {
            ...state,
            createMentorForm: {
               ...state.createMentorForm,
               status: payload,
            },
         }
      },
      onChangeDataMentorForm(state, { payload }) {
         return {
            ...state,
            createMentorForm: {
               ...state.createMentorForm,
               [payload.name]: payload.value,
            },
         }
      },
      pdfChange(state, { payload }) {
         return {
            ...state,
            createMentorForm: {
               ...state.createMentorForm,
               pdf: payload,
            },
         }
      },

      sortHandler(state, { payload }) {
         return {
            ...state,
            sort: payload,
         }
      },

      formValidHandler(state, { payload }) {
         const { createMentorForm } = state

         const formPartOne = {
            name: createMentorForm.name,
            surname: createMentorForm.surname,
            pdf: createMentorForm.pdf,
         }

         const dd = payload === 'one' ? formPartOne : createMentorForm

         const isEmpty = Object.values(dd).some((value) => value === '')

         return {
            ...state,
            valid: isEmpty ? 'Обязательно заполните все поле !!!' : '',
         }
      },

      resetValidHandler(state) {
         return {
            ...state,
            valid: '',
         }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getMentors.fulfilled, (state, action) => {
         state.isLoading = false
         state.mentorData = action.payload
      })
      builder.addCase(getMentors.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getMentors.rejected, (state, action) => {
         state.isLoading = false
         state.isError = action.payload
      })
   },
})

export const {
   statusHandler,
   onChangeDataMentorForm,
   pdfChange,
   sortHandler,
   formValidHandler,
   resetValidHandler,
} = mentorSlice.actions
