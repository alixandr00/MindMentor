import { styled } from '@mui/material'
import React from 'react'

export const WeekCalendar = ({ month }) => {
   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
   const DefaulWeeks = ['1', '2', '3', '4', '5', '6', '7']

   const weekNumbers = {
      January: ['1', '2', '3', '4', '5', '6', '7'],
      February: ['5', '6', '7', '8', '9', '10', '11'],
      March: ['1', '2', '3', '4', '5', '6', '7'],
      April: ['4', '5', '6', '7', '8', '9', '10'],
      May: ['2', '3', '4', '5', '6', '7', '8'],
      June: ['7', '8', '9', '10', '11', '12', '13'],
      July: ['3', '4', '5', '6', '7', '8', '9'],
      August: ['1', '2', '3', '4', '5', '6', '7'],
      September: ['7', '8', '9', '10', '11', '12', '13'],
      October: ['1', '2', '3', '4', '5', '6', '7'],
      November: ['5', '6', '7', '8', '9', '10', '11'],
      December: ['3', '4', '5', '6', '7', '8', '9'],
   }

   const selectedWeeks = weekNumbers[month] || []

   const timeBefore12 = [
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
   ]
   const timeBefore123 = Array.from({ length: 12 })

   const cellStyle = {
      border: '1px solid white',
      padding: '5px',
      height: 'fit-content',
      borderRight: 'none',
   }
   const numberStyle = {
      border: '1px solid white',
      borderTop: 'none',
      color: '#FFFF',
      marginBottom: '2rem',
      borderRight: 'none',
      fontSize: '2.25rem',
      position: 'relative',
      bottom: '1rem',
   }
   const daysWeek = {
      color: '#FFFFFF',
      position: 'relative',
      bottom: '1rem',
      fontSize: '2.25rem',
   }

   return (
      <>
         <TimeStyled>
            {timeBefore12.map((time) => (
               <div>{time}</div>
            ))}
         </TimeStyled>
         <TabelStyled style={{ borderCollapse: 'collapse' }}>
            <thead>
               <tr>
                  <th>{}</th>
                  {daysOfWeek.map((day) => (
                     <th key={day} style={daysWeek}>
                        {day}
                     </th>
                  ))}
               </tr>
               <tr>
                  <th>{}</th>
                  {selectedWeeks?.length === 0
                     ? DefaulWeeks.map((day) => (
                          <th key={day} style={numberStyle}>
                             {day}
                          </th>
                       ))
                     : selectedWeeks.map((day) => (
                          <th key={day} style={numberStyle}>
                             {day}
                          </th>
                       ))}
               </tr>
            </thead>
            {timeBefore123.map((hour) => (
               <tr key={hour}>
                  <td>{}</td>
                  {daysOfWeek.map((day, index) => (
                     <td key={day + index} style={cellStyle}>
                        {/* Insert content for each cell here */}
                     </td>
                  ))}
               </tr>
            ))}
         </TabelStyled>
      </>
   )
}

const TabelStyled = styled('table')({
   width: '49rem',
   maxHeight: '40rem',
   overflowY: 'scroll',
   marginLeft: '7rem',
   marginTop: '5rem',
})

const TimeStyled = styled('div')({
   position: 'absolute',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.5rem',
   left: '27rem',
   top: '12.3rem',
   color: '#FFFF',
   fontSize: '1.1rem',
   fontWeight: '500',
})
