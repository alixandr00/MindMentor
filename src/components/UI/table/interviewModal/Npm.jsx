import * as React from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { styled } from '@mui/material'

const today = dayjs()
const todayStartOfTheDay = today.startOf('day')

export const Npm = () => {
   return (
      <Container>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
               components={[
                  'DatePicker',
                  'DateTimePicker',
                  'TimePicker',
                  'DateRangePicker',
               ]}
            >
               <DemoItem label="TimePicker">
                  <TimePicker
                     ampm={false}
                     defaultValue={todayStartOfTheDay}
                     disablePast
                  />
               </DemoItem>
            </DemoContainer>
         </LocalizationProvider>
      </Container>
   )
}

const Container = styled('div')`
   .MuiOutlinedInput-root {
      color: #fff;
      width: 7.625rem;
      height: 3.125rem;
      border-radius: 1.25rem;
      border: 1px solid #fff;
   }
   .MuiInputLabel-root {
      color: #fff;
   }
   .MuiInputLabel-root.Mui-focused {
      display: none;
   }
   .MuiSvgIcon-root {
      color: #fff;
   }
   .MuiTypography-root {
      display: none;
   }
`
