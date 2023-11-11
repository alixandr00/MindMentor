/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import ExitIcon from '../../assets/icons/exit.svg'
import { getCalendarForId } from '../../store/calendar/calendar.thunk'
import { EventsModalTwo } from './EventsModalTwo'
import { Loading } from '../UI/loading/Loading'

const timeSlots = [
   '00:00',
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
   '13:00',
   '14:00',
   '15:00',
   '16:00',
   '17:00',
   '18:00',
   '19:00',
   '20:00',
   '21:00',
   '22:00',
   '23:00',
]

export const ClockComponent = ({
   setOpenClock,
   selectedDay,
   setShowEventModal,
   setSelectedStartTime,
   setClockClear,
   setEndTimeValue,
   setDayToday,
}) => {
   const dispatch = useDispatch()
   const [events, setEvents] = useState([])
   const [selectId, setSelectId] = useState(null)
   const [open2Modal, setOpen2Modal] = useState(false)

   const { calendarData, calendarDataForId, isLoading, isloading } =
      useSelector((state) => state.calendar)
   const day = selectedDay?.format('YYYY-MM-DD')

   const closeClockHandler = () => {
      setOpenClock(false)
   }

   useEffect(() => {
      if (calendarDataForId) {
         const updatedEvents = Array.from({ length: 24 }, () => ({
            title: 'Event',
            id: null,
         }))
         const matchingEvents = calendarData?.filter(
            (event) => event.date === day && event.start_time
         )

         matchingEvents?.forEach((event) => {
            const eventHour = parseInt(event.start_time.split(':')[0], 10)
            updatedEvents[eventHour] = event
         })
         setEvents(updatedEvents)
      }
   }, [calendarData])

   const getBackgroundStyle = (hour, event) => {
      const style = {
         backgroundColor: event.id ? '#5447AAED' : 'transparent',
         textDecoration: event.id ? ' underline' : 'none',
      }
      return style
   }

   const clickHandler = (id, time) => {
      setSelectedStartTime(time)
      if (calendarData) {
         const clickedEvent = calendarData.find((item) => item.id === id)
         if (clickedEvent !== undefined) {
            dispatch(getCalendarForId(id))
               .unwrap()
               .then(() => {
                  setSelectId(id)
                  setOpen2Modal(true)
               })
               .catch((error) => {
                  return error
               })
         } else {
            setShowEventModal(true)
            setClockClear(false)
            setEndTimeValue(true)
            setDayToday(false)
         }
      }
   }

   return (
      <>
         {isloading ? (
            <>
               <Loading />
            </>
         ) : (
            <Container
               className="flex mt-4 absolute scrollbar"
               style={{
                  width: '58.9rem',
                  height: '39.5rem',
                  overflowY: 'scroll',
               }}
            >
               <img
                  onClick={closeClockHandler}
                  className="fixed right-8 cursor-pointer top-40"
                  src={ExitIcon}
                  alt=""
               />
               <div className="flex flex-col gap-14 pt-6 text-white">
                  {timeSlots.map((time, index) => (
                     <div key={index}>
                        <p>{time}</p>
                     </div>
                  ))}
               </div>
               <div className="flex flex-col ml-4 h-full">
                  {events.map((event, index) => {
                     const time = timeSlots[index]

                     return (
                        <div
                           key={index}
                           onClick={() => clickHandler(events[index].id, time)}
                           style={{
                              width: '54rem',
                              padding: '1.7rem',
                              ...getBackgroundStyle(index, event),
                              color: 'white',
                           }}
                           className={`border-2 border-white cursor-pointer
               h-full flex item-center border-b-0`}
                        >
                           <p>{event.title}</p>
                        </div>
                     )
                  })}
               </div>
               {isLoading === true && (
                  <div className="fixed top-[22rem] left-[50rem]">
                     <Loading />
                  </div>
               )}

               <>
                  {open2Modal && (
                     <EventsModalTwo
                        setOpen2Modal={setOpen2Modal}
                        open2Modal={open2Modal}
                        selectId={selectId}
                        setShowEventModal={setShowEventModal}
                        calendarDataForId={calendarDataForId}
                     />
                  )}
               </>
            </Container>
         )}
      </>
   )
}

const Container = styled('div')({
   '&::-webkit-scrollbar ': {
      width: '0.4rem',
   },
   '&::-webkit-scrollbar-track': {
      backgroundColor: ' #fff white',
   },
   '&::-webkit-scrollbar-thumb ': {
      backgroundColor: ' #fff',
      borderRadius: '0.25rem',
   },
})
