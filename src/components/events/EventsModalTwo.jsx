/* eslint-disable jsx-a11y/no-static-element-interactions */
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import {
   CalendarDeleteRequestForId,
   getCalendars,
} from '../../store/calendar/calendar.thunk'
import { UiModal } from '../UI/modal/UiModal'
import ExitIconn from '../../assets/icons/Close Square.svg'
import DeleteIcon from '../../assets/icons/deleteicon.svg'
import EditIcon from '../../assets/icons/editIcon.svg'
import { showSnackbar } from '../UI/snackbar/Snackbar'
import { resetCalendarDataForId } from '../../store/calendar/calendar.slice'

export const EventsModalTwo = ({
   open2Modal,
   setOpen2Modal,
   selectId,
   setShowEventModal,
   calendarDataForId,
}) => {
   const dispatch = useDispatch()

   const data = calendarDataForId
   const startTime = data?.start_time?.slice(0, 5)

   const endTime = data?.end_time?.slice(0, 5)

   const closeHandler = () => {
      setOpen2Modal(false)
      dispatch(resetCalendarDataForId.resetCalendarDataForId())
   }

   const deleteHandler = () => {
      dispatch(CalendarDeleteRequestForId({ selectId, setOpen2Modal }))
         .unwrap()
         .then(() => {
            showSnackbar({
               message: 'Date successfully deleted!',
               severity: 'success',
            })

            dispatch(getCalendars())
         })
         .catch(() => {
            showSnackbar({
               message: 'Something went wrong, Please try again',
               severity: 'error',
            })
         })
      dispatch(resetCalendarDataForId.resetCalendarDataForId())
   }

   const editHandler = () => {
      setShowEventModal(true)
   }

   return (
      <UiModalStyled
         className="border-none	p-0"
         open={open2Modal}
         onClose={closeHandler}
      >
         <div
            // eslint-disable-next-line react/jsx-curly-brace-presence
            className={`rounded-lg w-80 h-fit bg-[#5447AAED] my-animation`}
         >
            <div className="flex flex-col p-4 pt-2 text-white">
               <div onClick={closeHandler} className="flex justify-end">
                  <img className="cursor-pointer" src={ExitIconn} alt="" />
               </div>
               <p className="text-xl">Group name: {data?.group_name}</p>
               <p className="text-xl">{data?.title}</p>
               <div>
                  <span className="text-xl">{data?.date}.</span>{' '}
                  <span className="text-xl">
                     {startTime}-{endTime}
                  </span>
               </div>
               <p className="text-xl">Location: {data?.location}</p>
               <p className="text-xl">{data?.description}</p>
               <div className="flex justify-end gap-4 items-center	">
                  <img
                     onClick={editHandler}
                     className="cursor-pointer"
                     src={EditIcon}
                     alt=""
                  />
                  <img
                     onClick={deleteHandler}
                     className="cursor-pointer"
                     src={DeleteIcon}
                     alt=""
                  />
               </div>
            </div>
         </div>
      </UiModalStyled>
   )
}

const UiModalStyled = styled(UiModal)({
   padding: '0px',
   border: 'none',
   '.my-animation': {
      transition: 'height 0.3s',
   },
})
