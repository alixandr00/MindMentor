import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   styled,
} from '@mui/material'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { DownIcon, LeftIcon, RightIcon, UpIcon } from '../../assets/icons'
import { WeekCalendar } from './WeekCalendar'

export const MyCalendar = () => {
   const [date, setDate] = useState(new Date())
   const [isSelectOpen, setIsSelectOpen] = useState(false)
   const [selectedValue, setSelectedValue] = useState('')

   const onChange = (newDate) => {
      setDate(newDate)
   }

   const nextMonth = () => {
      const newDate = new Date(date)
      newDate.setMonth(newDate.getMonth() + 1)
      setDate(newDate)
   }

   const prevMonth = () => {
      const newDate = new Date(date)
      newDate.setMonth(newDate.getMonth() - 1)
      setDate(newDate)
   }

   const handleSelectClose = () => {
      setIsSelectOpen(false)
   }
   const handleSelectOpen = () => {
      setIsSelectOpen(true)
   }
   const handleSelectChange = (event) => {
      setSelectedValue(event.target.value)
   }

   const tileContent = ({ view }) => {
      if (view === 'month') {
         return (
            <div>
               <style>
                  {`
                .react-calendar__month-view__days__day--neighboringMonth {
                  display: none;
                }
              `}
               </style>
            </div>
         )
      }
      return null
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
               <p className="textMonth">September 2023</p>
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
                        <MenuItem value="Week">Week</MenuItem>
                        <MenuItem value="Day">Day</MenuItem>
                     </SelectStyled>
                  </FormControlStyled>
               </div>
            </Header>
            <CalendarStyled
               key={date.toISOString()}
               onChange={onChange}
               value={date}
               prevLabel={null}
               prev2Label={null}
               next2Label={null}
               nextLabel={null}
               tileContent={tileContent}
            />
            <IconCont>
               <LeftIconStyled onClick={prevMonth} />
               <RightIconStyled onClick={nextMonth} />
            </IconCont>
         </div>
         <WeekCalendar />
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   height: '100vh',
   position: 'relative',
   display: 'flex',
   paddingTop: '2rem',
   background: 'black',
})

const CalendarStyled = styled(Calendar)({
   padding: '1rem',
   width: '23.75rem',
   marginLeft: '1rem',
   height: 'fit-content',
   borderRadius: '1.875rem',
   marginTop: '6rem',
   backgroundColor: '#252335',
   border: 'none',
   '& .react-calendar__tile': {
      color: 'white',
      fontSize: '1.25rem',
      lineHeight: '1.5625rem',
      borderRadius: '50%',
      background: 'transparent',

      '&:hover': {
         background: 'none !important',
         borderRadius: '50%',
         color: 'red',
      },
   },
   '& .react-calendar__month-view__weekdays__weekday': {
      color: 'white',
      fontSize: '1.25rem',
      lineHeight: '1.5625rem',
      textDecoration: 'underline',
   },
   '& .react-calendar__tile--active': {
      background: '#5447AA !important',
      borderRadius: '50%',
   },
   '& .react-calendar__navigation__label': {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: '700',
      marginRight: '3rem',
      background: 'transparent !important',
   },
})

const IconCont = styled('div')({
   position: 'absolute',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   left: '18rem',
   gap: '1rem',
   top: '10rem',
})

const LeftIconStyled = styled(LeftIcon)({
   cursor: 'pointer',
})

const RightIconStyled = styled(RightIcon)({
   cursor: 'pointer',
})
const Header = styled('div')({
   position: 'absolute',
   width: '100%',
   height: '3.125rem',
   display: 'flex',
   color: 'white',
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
