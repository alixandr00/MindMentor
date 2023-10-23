import { FormControl, MenuItem, Select, styled } from '@mui/material'
import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { DownIcon, UpIcon } from '../../assets/icons'
import { WeekCalendar } from './WeekCalendar'
import { UiButton } from '../UI/button/UiButton'
import { BasicDateCalendar } from './DateCalendar'

export const MyCalendar = () => {
   const [isSelectOpen, setIsSelectOpen] = useState(false)
   const [selectedValue, setSelectedValue] = useState('Month')
   const [date, setDate] = useState(null)

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
               </div>
               {currentMonth ? (
                  <div className="textMonth">
                     <div className="currents">
                        <p>{currentMonth}</p>
                        <p>{currentYear}</p>
                     </div>
                  </div>
               ) : (
                  <div className="textMonth">
                     <div className="currents">
                        <p>October</p>
                        <p>2023</p>
                     </div>
                  </div>
               )}

               <div className="sortText">
                  <p>sort by</p>
                  <FormControlStyled size="medium">
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
      gap: '1.3rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   '.textCalendarAndToday': {
      fontSize: '2rem',
   },
   '.box': {
      display: 'flex',
      gap: '3rem',
      marginLeft: '3rem',
   },
   '.textMonth': {
      fontSize: '2rem',
      marginLeft: '17rem',
      marginTop: '0.5rem',
   },
   '.sortText': {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '7rem',
      gap: '3rem',
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

const UiButtonStyled = styled(UiButton)({
   width: '23.75rem',
   height: '6rem',
   borderRadius: '1.875rem',
   background: '#252335',
   marginLeft: '0.7rem',
   marginTop: '1rem',
   fontSize: '2.25rem',
   fontWeight: 700,
   '&:hover': {
      background: '#252335',
   },
})
