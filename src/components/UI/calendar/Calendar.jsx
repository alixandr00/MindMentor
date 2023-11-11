import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { forwardRef } from 'react'

export const Calendar = forwardRef(function CalendarComponent(
   { placeholder, value, onChange, onBlur, name, error, ...props },
   ref
) {
   return (
      <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
               label={placeholder}
               value={value === undefined || null ? '' : value}
               marginTop="-5px"
               onChange={onChange}
               name={name}
               error={error}
               onBlur={onBlur}
               ref={ref}
               {...props}
            />
         </LocalizationProvider>
      </div>
   )
})

const StyledDatePicker = styled(DatePicker)(
   ({ fontSize, width, height, marginTop, error, borderRadius }) => ({
      '& label': {
         color: '#fff',
         marginTop,
         fontSize,
         marginLeft: '1.5rem',
         marginLeft: '25px',
      },

      '& .MuiOutlinedInput-notchedOutline': {
         borderColor: `${
            error === true ? '#ff0000 !important' : '#fff !important'
         } `,
      },
      '& .MuiOutlinedInput-input': {
         color: '#fff',
      },
      '& .MuiOutlinedInput-root': {
         width,
         borderRadius,
         height,
         fontSize: fontSize || '0.8rem',
         fontWeight: '400',
      },
      '& .MuiSvgIcon-root': {
         display: 'none',
         fontSize: '12px',
         fontWeight: '600',
      },
      '& .MuiSvgIcon-root': {
         color: '#fff',
         fontSize: '1rem',
         marginTop: '0.5rem',
      },
      '& label.Mui-focused': {
         display: 'none',
      },
      '& .MuiTextField-root label': {
         display: 'none',
      },
      '& .MuiFormLabel-filled': {
         display: 'none',
      },
      '& .MuiOutlinedInput-notchedOutline legend span': {
         display: 'none',
      },
   })
)
