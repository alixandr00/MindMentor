import React, { useState } from 'react'
import { ClockComponent } from '../events/ClockComponent'

const DayComponent = React.lazy(() => import('./Day'))

export default function Month({
   month,
   setShowEventModal,
   setSelectedDay,
   selectedDay,
   setSelectedStartTime,
   setDayToday,
   setClockClear,
   setEndTimeValue,
}) {
   const [openClock, setOpenClock] = useState(false)

   const openClockHandler = (day) => {
      setSelectedDay(day)
      setOpenClock(true)
   }

   return (
      <div className="grid grid-cols-7 mt-8 mr-0 mb-4 ml-40 relative">
         {openClock !== true ? (
            <>
               {month.map((row, i) => (
                  <React.Fragment key={i}>
                     {row.map((day, idx) => (
                        <DayComponent
                           setClockClear={setClockClear}
                           setEndTimeValue={setEndTimeValue}
                           setDayToday={setDayToday}
                           setOpenClock={() => openClockHandler(day)}
                           setShowEventModal={setShowEventModal}
                           setSelectedDay={setSelectedDay}
                           day={day}
                           key={idx}
                           onSelectDay={() => setSelectedDay(day)}
                        />
                     ))}
                  </React.Fragment>
               ))}
            </>
         ) : (
            <ClockComponent
               setShowEventModal={setShowEventModal}
               setOpenClock={setOpenClock}
               selectedDay={selectedDay}
               setSelectedStartTime={setSelectedStartTime}
               setClockClear={setClockClear}
               setEndTimeValue={setEndTimeValue}
            />
         )}
      </div>
   )
}
