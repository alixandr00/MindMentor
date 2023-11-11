import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import CloseIcon from '@mui/icons-material/Close'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'
import {
   CalendarPutRequestForId,
   createData,
} from '../../store/calendar/calendar.thunk'
import { showSnackbar } from '../UI/snackbar/Snackbar'
import { useEditEventModal } from '../../hooks/useEditEventModal'
import { validationSchema } from '../../utils/common/constants/util'
import { GroupsModalSelect } from './GroupsModalSelect'
import { getGroups } from '../../store/groups/groupThunk'

export const EventsModal = ({
   setShowEventModal,
   showEventModal,
   setIsRequestSuccess,
   selectedDay,
   setSelectedDay,
   selectedStartTime,
   dayToday,
   endTimeValue,
   clockClear,
   setGroupId,
}) => {
   const dispatch = useDispatch()

   const { calendarDataForId } = useSelector((state) => state.calendar)
   const { groups } = useSelector((state) => state.groups)
   const [grouppsId, setGrouppsId] = useState()
   const id = calendarDataForId?.group_name
   const groupId = groups?.find(
      (state) => state?.id === id || state?.id === grouppsId
   )

   useEffect(() => {
      dispatch(getGroups())
   }, [])
   const [openGroupModal, setOpenGroupModal] = useState(false)

   const [internNameError, setInternNameError] = useState('')

   const {
      setDescription,
      setStartTime,
      setEndTime,
      startTime,
      description,
      endTime,
      setLocationError,
      locationError,
      location,
      setInterviewNameError,
      setLocation,
      interviewNameError,
      interviewName,
      setInterviewName,
   } = useEditEventModal(calendarDataForId, selectedStartTime)

   const onSave = async () => {
      try {
         await validationSchema.validate(
            {
               interviewName,
               location,
            },
            { abortEarly: false }
         )
         // eslint-disable-next-line no-unsafe-optional-chaining
         const monthInDate = `${selectedDay?.$M + 1}`.padStart(2, '0')
         const DayInDate = `${selectedDay?.$D}`.padStart(2, '0')
         const date = `${selectedDay?.$y}-${monthInDate}-${DayInDate}`
         const clockStart = `${(startTime?.$H || '')
            .toString()
            .padStart(2, '0')}:${(startTime?.$m || '')
            .toString()
            .padStart(2, '0')}`
         const clockEnd = `${(endTime?.$H || '')
            .toString()
            .padStart(2, '0')}:${(endTime?.$m || '')
            .toString()
            .padStart(2, '0')}`

         const data = {
            title: interviewName,
            date,
            start_time: clockStart,
            location,
            description,
            group_name: groupId?.id || grouppsId,
            end_time: clockEnd,
         }
         const formEntries = Object.values({
            title: calendarDataForId.title,
            date: calendarDataForId.date,
            start_time: calendarDataForId.start_time,
            location: calendarDataForId.location,
            description: calendarDataForId.description,
            group_name: calendarDataForId.group_name,
            end_time: calendarDataForId.end_time,
         }).some((s) => !s)
         if (!formEntries) {
            dispatch(
               CalendarPutRequestForId({ id: calendarDataForId?.id, data })
            )
               .unwrap()
               .then(() => {
                  showSnackbar({
                     message: 'Date successfully updated!',
                     severity: 'success',
                  })
               })
               .catch(() => {
                  showSnackbar({
                     message: 'Something went wrong, Please try again',
                     severity: 'error',
                  })
               })
         } else {
            dispatch(createData(data))
               .unwrap()
               .then(() => {
                  showSnackbar({
                     message: 'Date created successfully!',
                     severity: 'success',
                  })
               })
               .catch(() => {
                  showSnackbar({
                     message: 'You wrote something wrong, Try again please',
                     severity: 'error',
                  })
               })
         }
         setShowEventModal(false)
         setIsRequestSuccess(true)
      } catch (error) {
         const validationErrors = {}
         error.inner.forEach((err) => {
            validationErrors[err.path] = err.message
         })

         setInternNameError(validationErrors.internName || '')
         setInterviewNameError(validationErrors.interviewName || '')
         setLocationError(validationErrors.location || '')
      }
   }

   const onClose = () => {
      setShowEventModal(false)
   }

   const openGroupModalHandler = () => {
      setOpenGroupModal(true)
   }
   const closeGroupModalHandler = () => {
      setOpenGroupModal(false)
   }
   const today = dayjs()
   const todayStartOfTheDay = today.startOf('day')

   const initialDatePickerValue = dayToday ? undefined : selectedDay
   const initialTimePickerValue = clockClear ? null : startTime
   const initialEndTimePickerValue = endTimeValue ? null : endTime

   return showEventModal ? (
      <UiModal
         open
         onClose={onClose}
         width="36.75rem"
         padding="1rem"
         height="43.0625rem"
         backgroundColor="rgba(84, 71, 170, 0.93)"
      >
         <div className="flex justify-end">
            <CloseIconBlock onClick={onClose}>
               <CloseIcon />
            </CloseIconBlock>
         </div>
         <div className="ml-12">
            <div className="mt-2 ">
               <UiButtonStyled onClick={openGroupModalHandler}>
                  {groupId || grouppsId ? groupId?.name : 'Group'}
               </UiButtonStyled>
               {openGroupModal && (
                  <GroupsModalSelect
                     setGroupId={setGroupId}
                     openGroupModalHandler={openGroupModalHandler}
                     closeGroupModalHandler={closeGroupModalHandler}
                     setGrouppsId={setGrouppsId}
                  />
               )}
               {internNameError && (
                  <div className="text-red-600 text-sm mt-1 absolute">
                     {internNameError}
                  </div>
               )}
            </div>
            <div className="mt-8">
               <UiInputStyled
                  type="text"
                  width="25.3125rem"
                  height="3.125rem"
                  borderRadius="1.25rem"
                  placeholder="Name of the interview"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
                  hoverBorderColor="#fff"
                  onChange={(e) => setInterviewName(e.target.value)}
                  value={interviewName}
               />
               {interviewNameError && (
                  <div className="text-red-600 text-sm mt-1 absolute">
                     {interviewNameError}
                  </div>
               )}
            </div>
            <div className="flex gap-[1.7rem] h-[fit-content]">
               <StyleBlockCalendar>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DatePicker
                        value={initialDatePickerValue}
                        onChange={(date) => setSelectedDay(date)}
                     />
                  </LocalizationProvider>
               </StyleBlockCalendar>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeContainer>
                     <DemoContainer
                        components={[
                           'DatePicker',
                           'DateTimePicker',
                           'TimePicker',
                           'DateRangePicker',
                        ]}
                     >
                        <DemoItem label="TimePicker">
                           <TimePicker
                              value={initialTimePickerValue}
                              onChange={(time) => setStartTime(time)}
                              ampm={false}
                              defaultValue={todayStartOfTheDay}
                           />
                        </DemoItem>
                     </DemoContainer>
                  </TimeContainer>
                  <TimeContainer>
                     <DemoContainer
                        components={[
                           'DatePicker',
                           'DateTimePicker',
                           'TimePicker',
                           'DateRangePicker',
                        ]}
                     >
                        <DemoItem label="TimePicker">
                           <TimePicker
                              ampm={false}
                              value={initialEndTimePickerValue}
                              onChange={(time) => setEndTime(time)}
                              defaultValue={todayStartOfTheDay}
                           />
                        </DemoItem>
                     </DemoContainer>
                  </TimeContainer>
               </LocalizationProvider>
            </div>
            <div className="mt-8">
               <UiInputStyled
                  width="22.7rem"
                  height="3.125rem"
                  borderRadius="1.25rem"
                  placeholder="Location"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
                  hoverBorderColor="#fff"
                  InputProps={{
                     startAdornment: <LocationOnIcon />,
                  }}
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
               />
               {locationError && (
                  <div className="text-red-600 text-sm mt-1 absolute">
                     {locationError}
                  </div>
               )}
            </div>
            <div className="mt-8">
               <UiInputStyled
                  className="w-[26rem]"
                  id="outlined-multiline-static"
                  multiline
                  rows={6.5}
                  type="text"
                  borderRadius="1.25rem"
                  placeholder="Description"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
                  hoverBorderColor="#fff"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
               />
            </div>
            <div className="flex w-[28.9vw] gap-[2rem] justify-end mt-8">
               <UiButton
                  onClick={onClose}
                  width="5.1875rem"
                  height="3.125rem"
                  border="1px solid #fff"
                  borderRadius="1.25rem"
                  variant="outlined"
                  background="rgba(84, 71, 170, 0.93)"
               >
                  Cancel
               </UiButton>
               <UiButton
                  onClick={onSave}
                  width="5.1875rem"
                  height="3.125rem"
                  border="1px solid #fff"
                  borderRadius="1.25rem"
                  variant="outlined"
                  background="rgba(84, 71, 170, 0.93)"
               >
                  Save
               </UiButton>
            </div>
         </div>
      </UiModal>
   ) : null
}

const StyleBlockCalendar = styled('div')`
   margin-top: 2rem;

   .MuiOutlinedInput-root {
      width: 7.625rem;
      height: 3.125rem;
      border-radius: 1.25rem;
      border: 1px solid #fff;
   }
   .MuiSvgIcon-root {
      font-size: 1rem;
      color: #fff;
   }
   .MuiOutlinedInput-input {
      font-size: 0.7rem;
      color: #fff;
   }
`

const CloseIconBlock = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 1.5rem;
   height: 1.5rem;
   border: 1px solid #fff;
   border-radius: 5px;
   cursor: pointer;
   .MuiSvgIcon-root {
      width: 1rem;
      color: #fff;
   }
`

const UiInputStyled = styled(UiInput)`
   border-radius: 20px;
   color: white;
`

const TimeContainer = styled('div')`
   margin-top: 12px;
   .MuiOutlinedInput-root {
      color: #fff;
      width: 7.625rem;
      height: 3.5rem;
      border-radius: 1.25rem;
      border: 1px solid #fff;
   }
   .MuiInputLabel-root {
      color: #fff;
   }
   .MuiInputLabel-root.Mui-focused {
      display: none;
   }
   .MuiSvgIcon-root {
      color: #fff;
   }
   .MuiTypography-root {
      display: none;
   }
`

const UiButtonStyled = styled('div')({
   borderRadius: '0.8rem',
   border: '1px solid #F9F9F9',
   background: 'transparent',
   width: '10rem',
   height: '2.5rem',
   color: '#FFFFFF',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer',
   '&:hover': {
      backgroundColor: 'rgba(67, 56, 136, 0.93)',
   },
   '&:active': {
      backgroundColor: 'rgba(80, 72, 132, 0.93)',
   },
})
