/* eslint-disable react/button-has-type */
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { getMonth } from '../../util'

export default function SmallCalendar({ monthIndex, setSmallCalendarMonth }) {
   const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
   const [currentMonth, setCurrentMonth] = useState(getMonth())

   useEffect(() => {
      setCurrentMonth(getMonth(currentMonthIdx))
   }, [currentMonthIdx])

   useEffect(() => {
      setCurrentMonthIdx(monthIndex)
   }, [monthIndex])

   function handlePrevMonth() {
      setCurrentMonthIdx(currentMonthIdx - 1)
   }
   function handleNextMonth() {
      setCurrentMonthIdx(currentMonthIdx + 1)
   }
   function getDayClass(day) {
      const format = 'DD-MM-YY'
      const nowDay = dayjs().format(format)
      const currDay = day.format(format)
      if (nowDay === currDay) {
         return 'text-blue-500'
      }
   }

   return (
      <div className="mt-20 bg-[#252335] w-[20rem] p-4 h-[17rem] rounded-[30px] ml-8">
         <header className="flex justify-between">
            <p className="text-gray-500 font-bold">
               {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
                  'MMMM YYYY'
               )}
            </p>
            <div>
               <button onClick={handlePrevMonth}>
                  <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                     chevron_left
                  </span>
               </button>
               <button onClick={handleNextMonth}>
                  <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                     chevron_right
                  </span>
               </button>
            </div>
         </header>
         <div
            style={{ color: 'white', fontFamily: 'initial' }}
            className="grid grid-cols-7 grid-rows-6"
         >
            {currentMonth[0].map((day, i) => (
               <span
                  style={{ color: 'grey' }}
                  key={i}
                  className="text-sm py-1 text-center"
               >
                  {day.format('dd').charAt(0)}
               </span>
            ))}
            {currentMonth.map((row, i) => (
               <React.Fragment key={i}>
                  {row.map((day, idx) => (
                     <button
                        key={idx}
                        onClick={() => {
                           setSmallCalendarMonth(currentMonthIdx)
                        }}
                        className={`py-1 w-full ${getDayClass(day)}`}
                     >
                        <span className="text-sm">{day.format('D')}</span>
                     </button>
                  ))}
               </React.Fragment>
            ))}
         </div>
      </div>
   )
}
