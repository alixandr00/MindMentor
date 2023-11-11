import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { getMonth } from '../../utils/common/constants/util'
import { EventsModal } from '../events/EventsModal'
import { getCalendars } from '../../store/calendar/calendar.thunk'
import { useEventModal } from '../../hooks/useEventModal'
import CalendarHeader from '../calendar/CalendarHeader'
import Sidebar from '../calendar/Sidebar'
import Month from '../calendar/Month'

export const Events = () => {
   const [currenMonth, setCurrentMonth] = useState(getMonth())
   const { showEventModal, setShowEventModal } = useEventModal()
   const [monthIndex, setMonthIndex] = useState(dayjs().month())
   const [dayToday, setDayToday] = useState(false)
   const [clockClear, setClockClear] = useState(false)
   const [endTimeValue, setEndTimeValue] = useState(false)
   const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
   const [isRequestSuccess, setIsRequestSuccess] = useState(false)
   const [selectedDay, setSelectedDay] = useState(null)
   const [selectedStartTime, setSelectedStartTime] = useState()
   const [groupId, setGroupId] = useState()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCalendars())
   }, [getCalendars])

   useEffect(() => {
      setCurrentMonth(getMonth(monthIndex))
   }, [monthIndex])

   return (
      <div className="w-[100%] bg-[#000]">
         {showEventModal && (
            <EventsModal
               selectedDay={selectedDay}
               setIsRequestSuccess={setIsRequestSuccess}
               setShowEventModal={setShowEventModal}
               showEventModal={showEventModal}
               setSelectedDay={setSelectedDay}
               selectedStartTime={selectedStartTime}
               dayToday={dayToday}
               clockClear={clockClear}
               endTimeValue={endTimeValue}
               setGroupId={setGroupId}
               groupId={groupId}
            />
         )}

         <div className="h-screen flex flex-col">
            <CalendarHeader
               monthIndex={monthIndex}
               setMonthIndex={setMonthIndex}
            />
            <div className="flex flex-1">
               <Sidebar
                  showEventModal={showEventModal}
                  smallCalendarMonth={smallCalendarMonth}
                  setMonthIndex={setMonthIndex}
                  setSmallCalendarMonth={setSmallCalendarMonth}
                  monthIndex={monthIndex}
                  setShowEventModal={setShowEventModal}
                  setDayToday={setDayToday}
                  setClockClear={setClockClear}
                  setEndTimeValue={setEndTimeValue}
               />
               <Month
                  setShowEventModal={setShowEventModal}
                  month={currenMonth}
                  isRequestSuccess={isRequestSuccess}
                  setSelectedDay={setSelectedDay}
                  selectedDay={selectedDay}
                  setSelectedStartTime={setSelectedStartTime}
                  setDayToday={setDayToday}
                  setClockClear={setClockClear}
                  setEndTimeValue={setEndTimeValue}
               />
            </div>
         </div>
      </div>
   )
}
