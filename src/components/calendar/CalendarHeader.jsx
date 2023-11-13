/* eslint-disable react/button-has-type */
import dayjs from 'dayjs'

export default function CalendarHeader({ monthIndex, setMonthIndex }) {
   function handlePrevMonth() {
      setMonthIndex(monthIndex - 1)
   }
   function handleNextMonth() {
      setMonthIndex(monthIndex + 1)
   }
   function handleReset() {
      setMonthIndex(
         monthIndex === dayjs().month()
            ? monthIndex + Math.random()
            : dayjs().month()
      )
   }

   return (
      <header className="px-4 py-2 flex items-center relative">
         <p className="mr-10 text-white fond-bold text-[2rem] cursor-pointer mt-8 ml-4 ">
            Calendar
         </p>
         <p
            className="text-white fond-bold text-[2rem] cursor-pointer mt-8 ml-4 animate-pulse"
            onClick={handleReset}
         >
            Today
         </p>
         <div className="flex text-[2rem] text-white ml-[20rem]">
            <button className="relative" onClick={handlePrevMonth}>
               <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                  chevron_left
               </span>
            </button>
            <button className="relative left-[18rem]" onClick={handleNextMonth}>
               <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                  chevron_right
               </span>
            </button>
            <h2>
               {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
            </h2>
         </div>
         <div className="absolute text-white left-[26rem] top-[6.9rem]">
            <div className="flex gap-[5.5rem]">
               <p className="w-[2.9rem] text-[1.4rem] pl-[2.8rem] border-l-[1px] border-[white]">
                  Sun
               </p>
               <p className="w-[2.9rem] text-[1.4rem] pl-[2.8rem] border-l-[1px] border-[white]">
                  Mon
               </p>
               <p className="w-[2.9rem] text-[1.4rem] pl-[2.8rem] border-l-[1px] border-[white]">
                  Tue
               </p>
               <p className="w-[2.9rem] text-[1.4rem] pl-[2.8rem] border-l-[1px] border-[white]">
                  Wed
               </p>
               <p className="w-[2.9rem] text-[1.4rem] pl-[2.8rem] border-l-[1px] border-[white]">
                  Thu
               </p>
               <p className="w-[2.9rem] text-[1.4rem] pl-[2.8rem] border-l-[1px] border-[white]">
                  Fri
               </p>
               <p className="w-[2.9rem] text-[1.4rem] pl-[2.8rem] border-l-[1px] border-[white]">
                  Sat
               </p>
            </div>
         </div>
      </header>
   )
}
