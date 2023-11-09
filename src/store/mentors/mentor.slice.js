import { createSlice } from '@reduxjs/toolkit'
import {
   deleteMentor,
   getStack,
   getStatusMentors,
   postCVMentor,
} from './mentor.thunk'
import { globalError } from '../../utils/common/constants/mentor'

const initialState = {
   isLoading: false,
   mentorData: [],
   stack: [],
   stackPostId: [],
   missingLanguages: [],
   createAMentorOrConfirm: false,
   deleteResume: false,

   createMentorForm: {
      name: '',
      skills: '',
      surname: '',
      status: true,
      stack: '',
      email: '',
      education: '',
      workExperience: '',
      pdf: '',
      phones: '',
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

         const formPartTwo = {
            name: createMentorForm.name,
            surname: createMentorForm.surname,
            status: createMentorForm.status,
            stack: createMentorForm.stack,
            email: createMentorForm.email,
            workExperience: createMentorForm.workExperience,
            phones: createMentorForm.phones,
         }

         const pageIdentifier = payload === 'one' ? formPartOne : formPartTwo

         const isEmpty = Object.values(pageIdentifier).some(
            (value) => value === ''
         )

         return {
            ...state,
            valid: isEmpty ? globalError : '',
         }
      },

      resetValidHandler(state) {
         return {
            ...state,
            valid: '',
         }
      },

      chengTextarea(state, { payload }) {
         return {
            ...state,
            createMentorForm: {
               ...state.createMentorForm,
               education: payload.education,
               workExperience: payload.workExperience,
               skills: payload.skills,
            },
         }
      },

      resetForm(state) {
         return {
            ...state,
            createMentorForm: {
               name: '',
               surname: '',
               status: true,
               stack: '',
               email: '',
               education: '',
               workExperience: '',
               pdf: '',
               phones: '',
            },
         }
      },

      validStack(state, { payload }) {
         const missingLanguages = []
         let resInputStringArray = []
         const inputString = payload.valueStack || ''
         const dataArray = payload.stack || []

         const inputArray = inputString
            .split(/[\s,]+/)
            .map((item) => item.trim())

         inputArray.forEach((inputItem) => {
            const foundItem = dataArray.find(
               (dataItem) =>
                  dataItem.name.toLowerCase() === inputItem.toLowerCase()
            )
            if (!foundItem) {
               missingLanguages.push(inputItem)
            }
         })

         if (!missingLanguages.length > 0) {
            resInputStringArray = inputArray.map((inputItem) => {
               const foundItem = dataArray.find(
                  (dataItem) =>
                     dataItem.name.toLowerCase() === inputItem.toLowerCase()
               )
               return foundItem ? foundItem.id : null
            })
         }

         return {
            ...state,
            stackPostId: resInputStringArray,
            missingLanguages,
         }
      },

      openAndCloseCreateMentor(state, { payload }) {
         return {
            ...state,
            createAMentorOrConfirm: payload,
         }
      },

      openModalEditMentor(state, { payload }) {
         const idData = payload.mentorData.filter(
            (item) => item.id === payload.id
         )

         const combinedText = idData[0].stack.join(', ')

         return {
            ...state,
            createMentorForm: {
               name: idData[0].first_name,
               surname: idData[0].last_name,
               stack: combinedText,
               email: idData[0].email,
               education: idData[0].education,
               workExperience: idData[0].work_experiance,
               phones: idData[0].phone_number,
               status: idData[0].status,
            },
         }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getStatusMentors.fulfilled, (state, action) => {
            state.isLoading = false
            state.mentorData = action.payload
         })
         .addCase(getStatusMentors.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getStatusMentors.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
         })

      builder
         .addCase(deleteMentor.fulfilled, (state) => {
            state.isLoading = false
            state.deleteResume = false
         })
         .addCase(deleteMentor.pending, (state) => {
            state.isLoading = true
         })
         .addCase(deleteMentor.rejected, (state) => {
            state.isLoading = false
            state.isError = 'Что то произошло не так'
         })

      builder
         .addCase(postCVMentor.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.deleteResume = true
            const stackRes = payload.extracted_data.skills
               .map((item) => item.name)
               .filter((item) => item.includes('(Programming Language)'))
               .map((item) => item.replace(' (Programming Language)', ''))

            const combinedText = stackRes.join(', ')

            const cleanPhoneNumber =
               payload.extracted_data.personal_infos.phones[0].substring(4)

            const educationText =
               payload.extracted_data.education.total_years_education === null
                  ? 'Средний'
                  : payload.extracted_data.education.total_years_education

            state.createMentorForm = {
               education: educationText,
               name: payload.extracted_data.personal_infos.name.last_name,
               surname: payload.extracted_data.personal_infos.name.first_name,
               status: state.createMentorForm.status,
               stack: combinedText,
               phones: cleanPhoneNumber,
               skills: payload.extracted_data.skills
                  .map((item) => item.name)
                  .join(', '),
               email: payload.extracted_data.personal_infos.mails[0],
               workExperience:
                  payload.extracted_data.personal_infos.self_summary,
            }
         })
         .addCase(postCVMentor.pending, (state) => {
            state.isLoading = true
         })
         .addCase(postCVMentor.rejected, (state) => {
            state.isLoading = false
            state.isError = 'Что то произошло не так'
         })

      builder
         .addCase(getStack.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.stack = payload
         })
         .addCase(getStack.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getStack.rejected, (state) => {
            state.isLoading = false
            state.isError = 'Что то произошло не так'
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
   chengTextarea,
   resetForm,
   validStack,
   openAndCloseCreateMentor,
   openModalEditMentor,
} = mentorSlice.actions
