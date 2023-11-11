import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { forwardRef } from 'react'

export const Time = forwardRef(function TimerComponent(
   { placeholder, value, onChange, onBlur, name, error, ...props },
   ref
) {
   return (
      <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledTimePicker
               label={placeholder}
               value={value || null}
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

const StyledTimePicker = styled(TimePicker)(
   ({ fontSize, width, height, marginTop, error, borderRadius }) => ({
      '& label': {
         color: '#fff',
         marginTop,
         fontSize,
         textAlign: 'center',
      },
      '& .MuiOutlinedInput-notchedOutline': {
         borderColor: `${
            error === true ? '#ff0000 !important' : '#fff !important'
         }`,
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
