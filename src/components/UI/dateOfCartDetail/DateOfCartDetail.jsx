import { styled } from '@mui/material'
import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const DateOfCartDetail = ({ setSelectedDate, selectedDate }) => {
   return (
      <DateStyle>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
               <DatePicker
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
               />
            </DemoContainer>
         </LocalizationProvider>
      </DateStyle>
   )
}
const DateStyle = styled('div')`
   .MuiOutlinedInput-root {
      width: 11rem;
   }
   .MuiOutlinedInput-notchedOutline {
      border: none;
   }
   .MuiInputLabel-root {
      display: none;
   }
   .MuiFormLabel-root-MuiInputLabel-root {
      display: none;
   }
   .MuiSvgIcon-root {
      color: #fff;
      font-size: 1.5rem;
      margin-right: 1rem;
   }
   .MuiOutlinedInput-input {
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      padding: 0;
   }
   .MuiIconButton-root {
      padding: 0;
   }
`
