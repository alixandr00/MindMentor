import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import SmallCalendar from './SmallCalendar'
import { UiButton } from '../UI/button/UiButton'
import { EventsModal } from '../events/EventsModal'

export default function Sidebar({
   smallCalendarMonth,
   setMonthIndex,
   setSmallCalendarMonth,
   monthIndex,
   showEventModal,
   setShowEventModal,
   setDayToday,
   setClockClear,
   setEndTimeValue,
}) {
   const openTodayModal = () => {
      setShowEventModal((prev) => !prev)
      setDayToday(true)
      setClockClear(true)
      setEndTimeValue(true)
   }
   useEffect(() => {
      if (smallCalendarMonth !== null) {
         setMonthIndex(smallCalendarMonth)
      }
   }, [smallCalendarMonth])

   return (
      <aside className="w-64">
         <div className="flex flex-col gap-8">
            <SmallCalendar
               setSmallCalendarMonth={setSmallCalendarMonth}
               monthIndex={monthIndex}
            />
            <UiButtonStyled onClick={openTodayModal}>Create +</UiButtonStyled>
         </div>
         {showEventModal && <EventsModal />}
      </aside>
   )
}

const UiButtonStyled = styled(UiButton)({
   background: '#252335',
   width: '20rem',
   height: '6rem',
   fontSize: '2.25rem',
   borderRadius: '1.875rem',
   '&:hover': {
      background: '#252335',
   },
   marginLeft: '2rem',
})
