import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   styled,
} from '@mui/material'
import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
// import dayjs from 'dayjs'
import { DownIcon, LeftIcon, UpIcon } from '../../assets/icons'
import { WeekCalendar } from './WeekCalendar'
import { UiButton } from '../UI/button/UiButton'
import { BasicDateCalendar } from './DateCalendar'

export const MyCalendar = () => {
   const [isSelectOpen, setIsSelectOpen] = useState(false)
   const [selectedValue, setSelectedValue] = useState('')
   const [date, setDate] = useState(null)
   console.log('date: ', date)

   const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ]
   const currentMonthIndex = date?.$M
   const currentMonth = monthNames[currentMonthIndex]
   const currentYear = date?.$y
   console.log('currentYear: ', currentYear)
   console.log('currentMonth: ', currentMonth)
   // const currentYear = date?.$H ? date?.$H.padStart(2, '0') : ''
   // console.log('currentYear: ', currentYear)

   const handleSelectClose = () => {
      setIsSelectOpen(false)
   }
   const handleSelectOpen = () => {
      setIsSelectOpen(true)
   }
   const handleSelectChange = (event) => {
      setSelectedValue(event.target.value)
   }

   return (
      <Container>
         <div>
            <Header>
               <div className="box">
                  <p className="textCalendarAndToday">Calendar</p>
                  <p className="textCalendarAndToday">Today</p>
                  <LeftIconStyledd />
               </div>
               {currentMonth ? (
                  <div className="textMonth">
                     <p className="currents">
                        <span>{currentMonth}</span>
                        <span>{currentYear}</span>
                     </p>
                  </div>
               ) : (
                  <p className="textMonth">October 2023</p>
               )}

               <div className="sortText">
                  <p>sort by</p>
                  <FormControlStyled size="medium">
                     <InputLabel
                        className="status"
                        id="demo-select-small-label"
                        style={{
                           marginTop: selectedValue ? '0' : '-12px',
                        }}
                     >
                        Month
                     </InputLabel>
                     <SelectStyled
                        open={isSelectOpen}
                        onClose={handleSelectClose}
                        onOpen={handleSelectOpen}
                        value={selectedValue}
                        onChange={handleSelectChange}
                        // eslint-disable-next-line react/no-unstable-nested-components
                        IconComponent={() => (
                           <SelectIcon
                              onClick={(e) => {
                                 e.stopPropagation()
                                 setIsSelectOpen(!isSelectOpen)
                              }}
                           >
                              <UpIconStyled isOpen={isSelectOpen} />
                              <DownIconStyled isOpen={isSelectOpen} />
                           </SelectIcon>
                        )}
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="status"
                     >
                        <MenuItem value="Month">Month</MenuItem>
                        <MenuItem value="Week">Week</MenuItem>
                        <MenuItem value="Day">Day</MenuItem>
                     </SelectStyled>
                  </FormControlStyled>
               </div>
            </Header>
            <div>
               <BasicDateCalendar date={date} setDate={setDate} />
            </div>
            <UiButtonStyled>Create +</UiButtonStyled>
         </div>
         <WeekCalendar month={currentMonth} />
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   height: '100vh',
   position: 'relative',
   display: 'flex',
   paddingTop: '1rem',
})

const Header = styled('div')({
   position: 'absolute',
   width: '100%',
   height: '3.125rem',
   display: 'flex',
   color: 'white',
   '.currents': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
   },
   '.textCalendarAndToday': {
      fontSize: '2rem',
   },
   '.box': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3rem',
      marginLeft: '3rem',
   },
   '.textMonth': {
      fontSize: '2rem',
      marginLeft: '11rem',
      marginTop: '0.5rem',
   },
   '.sortText': {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '4rem',
      gap: '2rem',
      marginTop: '0.5rem',
   },
})
const SelectStyled = styled(Select)({
   '&.MuiOutlinedInput-root': {
      width: '6.375rem',
      height: '1.875rem',
      borderRadius: '0.5rem',
      color: 'white',
      fieldset: {
         borderColor: '#D0D0D0',
      },
      '&:hover fieldset': {
         borderColor: '#8d8c8c',
      },
      '&.Mui-focused fieldset': {
         borderColor: '#0079BF',
      },
   },
})
const FormControlStyled = styled(FormControl)({
   position: 'relative',
   '& label': {
      color: 'white',
      marginTop: '-12px',
   },
})

const SelectIcon = styled('div')({
   position: 'absolute',
   right: '0.5rem',
   top: '50%',
   transform: 'translateY(-50%)',
   cursor: 'pointer',
})

const UpIconStyled = styled(UpIcon)((props) => ({
   display: props.isOpen ? 'block' : 'none',
}))

const DownIconStyled = styled(DownIcon)((props) => ({
   display: props.isOpen ? 'none' : 'block',
}))

const LeftIconStyledd = styled(LeftIcon)({
   position: 'relative',
   right: '2.5rem',
   top: '0.8rem',
})

const UiButtonStyled = styled(UiButton)({
   width: '20.75rem',
   height: '6rem',
   borderRadius: '1.875rem',
   background: '#252335',
   marginLeft: '0.5rem',
   marginTop: '1rem',
   fontSize: '2.25rem',
   fontWeight: 700,
   '&:hover': {
      background: '#252335',
   },
})
