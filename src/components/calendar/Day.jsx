/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { Skeleton } from '@mui/material'
import ClockIcon from '../../assets/icons/History.svg'

export default function Day({
   day,
   setShowEventModal,
   setOpenClock,
   setSelectedDay,
   setDayToday,
   setClockClear,
   setEndTimeValue,
}) {
   const { calendarData, isloading } = useSelector((state) => state.calendar)

   const dataOfDate = calendarData?.map((data) => data.date)

   const openClockHandler = () => {
      setOpenClock(true)
   }

   const openModalFirst = () => {
      setShowEventModal(true)
      setSelectedDay(day)
      setDayToday(false)
      setClockClear(true)
      setEndTimeValue(true)
   }

   const isDateInData = dataOfDate?.includes(day?.format('YYYY-MM-DD'))

   return (
      <div>
         <>
            {isloading ? (
               <>
                  <Skeleton />
                  <Skeleton
                     sx={{ bgcolor: 'grey.900' }}
                     variant="rectangular"
                     width={135}
                     height={100}
                  />
               </>
            ) : (
               <div
                  className={`border border-gray-200 w-[8.4rem] border-r-0 mt-4 h-[100%]
             flex flex-col relative`}
                  style={{
                     background: isDateInData ? '#5447AAED' : 'transparent',
                  }}
               >
                  <header className="flex-col items-start">
                     <img
                        onClick={openClockHandler}
                        className="w-5 h-5 cursor-pointer ml-28 absolute top-2 "
                        src={ClockIcon}
                        alt=""
                     />
                     <p
                        className="text-sm p-1 cursor-pointer text-white"
                        style={{
                           color:
                              day.format('DD-MM-YY') ===
                              dayjs().format('DD-MM-YY')
                                 ? 'blue'
                                 : '',
                           zIndex: 2,
                        }}
                     >
                        {day.format('DD')}
                     </p>
                  </header>

                  <div
                     className="flex-1 cursor-pointer "
                     onClick={openModalFirst}
                  />
               </div>
            )}
         </>
      </div>
   )
}
