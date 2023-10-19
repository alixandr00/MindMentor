import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { styled } from '@mui/material'

export const BasicDateCalendar = ({ date, setDate }) => {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DateCalendarStyled
            value={date}
            onChange={(newDate) => setDate(newDate)}
         />
      </LocalizationProvider>
   )
}

const DateCalendarStyled = styled(DateCalendar)({
   background: '#252335',
   borderRadius: '1rem',
   color: '#FFFFFF',
   marginTop: '6rem',
   marginLeft: '1rem',
   width: '23.75rem',
   marginBottom: '3rem',
   '& .css-1vs7z2v-MuiYearCalendar-root': {
      width: '23.75rem',
      '&::-webkit-scrollbar ': {
         width: '0.3rem',
      },
      '&::-webkit-scrollbar-track': {
         backgroundColor: ' #fff white',
      },
      '&::-webkit-scrollbar-thumb ': {
         backgroundColor: ' #fff',
         borderRadius: '0.25rem',
      },
   },
   '& .css-i5q14k-MuiDayCalendar-header': {
      justifyContent: 'space-evenly',
   },
   '& .css-flbe84-MuiDayCalendar-weekContainer': {
      justifyContent: 'space-evenly',
   },
   '& .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root': {
      color: '#FFFFFF !important',
   },
   '& .css-jgls56-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)': {
      color: '#FFFFFF !important',
      border: '1px solid red',
   },
   '& .css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel': {
      color: '#afafaf !important',
   },
   '& .css-1nkg345-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button':
      {
         color: '#FFFFFF !important',
      },
   '& .css-kg9q0s-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button':
      {
         color: '#FFFFFF !important',
      },
})
