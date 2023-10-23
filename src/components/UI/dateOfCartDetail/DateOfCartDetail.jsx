import { styled } from '@mui/material'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const DateOfCartDetail = () => {
   const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))
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
   position: relative;
   left: 5rem;
   bottom: 40px;

   .MuiOutlinedInput-root {
      width: 7.5rem;
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
      font-size: 1rem;
      margin-right: 1rem;
   }
   .MuiOutlinedInput-input {
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
   }
   .MuiIconButton-root {
      padding: 0;
   }
`
