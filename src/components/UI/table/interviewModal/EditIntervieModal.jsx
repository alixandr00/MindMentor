/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import CloseIcon from '@mui/icons-material/Close'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { UiModal } from '../../modal/UiModal'
import { UiInput } from '../../input/UiInput'
import { UiButton } from '../../button/UiButton'
import {
   editInterviewThunk,
   interviewThunk,
} from '../../../../store/interview/interview.thunk'
import { showSnackbar } from '../../snackbar/Snackbar'

export const EditInterviewModal = ({ onClose }) => {
   const dispatch = useDispatch()
   const { id, name_interview, location, descriptions } = useSelector(
      (state) => state.interview.getInterviewDetail
   )
   const [nameInterview, setNameInterview] = useState(name_interview)
   const [selectedDateTime, setSelectedDateTime] = useState(null)
   const [selectedDateTimes, setSelectedDateTimes] = useState(null)
   const [loc, setLocation] = useState(location)
   const [desc, setDesc] = useState(descriptions)

   const date = dayjs(selectedDateTime)
   const timeStart = date.format('HH:mm')
   const dateEnd = dayjs(selectedDateTimes)
   const timeEnd = dateEnd.format('HH:mm')

   const handleDateTimeChange = (newDateTime) => {
      setSelectedDateTime(newDateTime)
   }
   const handleDateTimeChanges = (newDateTime) => {
      setSelectedDateTimes(newDateTime)
   }
   const onChangeNameOfInt = (e) => {
      setNameInterview(e.target.value)
   }

   const onChangeLoc = (e) => {
      setLocation(e.target.value)
   }
   const onChangeDesc = (e) => {
      setDesc(e.target.value)
   }

   const editNewInterview = () => {
      const data = {
         name_interview: nameInterview,
         date: '2021-12-10',
         start_time: timeStart,
         end_time: timeEnd,
         location: loc,
         descriptions: desc,
      }
      dispatch(editInterviewThunk({ id, data }))
      onClose()
      dispatch(interviewThunk())
         .unwrap()
         .then(() => {
            showSnackbar({
               message: 'Данные успешно обновлены!',
               severity: 'success',
            })
         })
         .catch(() => {
            showSnackbar({
               message: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.',
               severity: 'warning',
            })
         })
   }

   useEffect(() => {
      if (name_interview) {
         setNameInterview(name_interview)
      }
      if (location) {
         setLocation(location)
      }
      if (descriptions) {
         setDesc(descriptions)
      }
   }, [name_interview, location, descriptions])

   return (
      <UiModal
         open
         width="36.75rem"
         height="43.0625rem"
         backgroundColor="rgba(84, 71, 170, 0.93)"
         onClose={onClose}
      >
         <CloseIconContainer>
            <CloseIconBlock onClick={onClose}>
               <CloseIcon />
            </CloseIconBlock>
         </CloseIconContainer>
         <Container>
            <StyleBlocks>
               <UiButtonStyle
                  width="9.3125rem"
                  height="3.125rem"
                  background="rgba(84, 71, 170, 0.93)"
               >
                  Intern name
               </UiButtonStyle>
            </StyleBlocks>
            <StyleBlock>
               <UiInput
                  value={nameInterview}
                  onChange={onChangeNameOfInt}
                  bordercolor="#fff"
                  colors="#fff"
                  width="26rem"
                  height="3.125rem"
                  borderradius="1.25rem"
                  placeholder="Name of the interview"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
               />
            </StyleBlock>
            <CalendarContainer>
               <StyleBlockCalendar>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DatePicker />
                  </LocalizationProvider>
               </StyleBlockCalendar>

               <StyleBlockDate>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DemoContainer components={['TimePicker']}>
                        <TimePicker
                           label="Start time"
                           ampm={false}
                           value={selectedDateTime}
                           onChange={handleDateTimeChange}
                        />
                     </DemoContainer>
                  </LocalizationProvider>
               </StyleBlockDate>
               <StyleBlockDate>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DemoContainer components={['TimePicker']}>
                        <TimePicker
                           label="End time"
                           ampm={false}
                           value={selectedDateTimes}
                           onChange={handleDateTimeChanges}
                        />
                     </DemoContainer>
                  </LocalizationProvider>
               </StyleBlockDate>
            </CalendarContainer>
            <StyleBlock>
               <UiInput
                  value={loc}
                  onChange={onChangeLoc}
                  bordercolor="#fff"
                  colors="#fff"
                  width="26rem"
                  height="3.125rem"
                  borderradius="1.25rem"
                  placeholder="Location"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
               />
            </StyleBlock>
            <StyleBlock>
               <UiInput
                  value={desc}
                  onChange={onChangeDesc}
                  bordercolor="#fff"
                  colors="#fff"
                  className="custom-width-input"
                  id="outlined-multiline-static"
                  multiline
                  rows={6.5}
                  type="text"
                  borderradius="1.25rem"
                  placeholder="Description"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
               />
            </StyleBlock>
            <ButtonBlock>
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
                  width="5.1875rem"
                  height="3.125rem"
                  border="1px solid #fff"
                  borderRadius="1.25rem"
                  variant="outlined"
                  background="rgba(84, 71, 170, 0.93)"
                  onClick={editNewInterview}
               >
                  Edit
               </UiButton>
            </ButtonBlock>
         </Container>
      </UiModal>
   )
}

const Container = styled('div')`
   margin-left: 3rem;
`

const CalendarContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 1.7rem;
   margin-top: 1.5rem;
`
const StyleBlocks = styled('div')`
   margin-top: 1rem;
`
const StyleBlock = styled('div')`
   margin-top: 2rem;
   .custom-width-input {
      width: 26rem;
   }
`
const StyleBlockCalendar = styled('div')`
   margin-top: 0.5rem;
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
const StyleBlockDate = styled('div')`
   .MuiOutlinedInput-root {
      color: #fff;
      width: 7.625rem;
      height: 3.125rem;
      border-radius: 1.25rem;
      border: 1px solid #fff;
   }
   .MuiStack-root > .MuiTextField-root {
      min-width: 20px !important;
   }
   .MuiInputLabel-root {
      color: #fff;
   }
   .MuiInputLabel-root.Mui-focused {
      display: none;
   }
   .MuiSvgIcon-root {
      font-size: 1rem;
      color: #fff;
   }
`

const ButtonBlock = styled('div')`
   display: flex;
   width: 28.9vw;
   gap: 2rem;
   justify-content: flex-end;
   margin-top: 2rem;
`

const CloseIconContainer = styled('div')`
   display: flex;
   justify-content: flex-end;
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
const UiButtonStyle = styled(UiButton)`
   border: 1px solid #fff;
   border-radius: 1.25rem;
`
