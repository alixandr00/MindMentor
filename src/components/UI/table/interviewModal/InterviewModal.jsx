/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import CloseIcon from '@mui/icons-material/Close'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { UiModal } from '../../modal/UiModal'
import { UiInput } from '../../input/UiInput'
import { UiButton } from '../../button/UiButton'
import {
   internsDetailGetThunk,
   newInterviewPostThunk,
} from '../../../../store/interview/interview.thunk'
import { showSnackbar } from '../../snackbar/Snackbar'
import { InternData } from './InternsData'

export const AddInterviewModal = ({ onClose, iD = 8 }) => {
   const dispatch = useDispatch()
   const id = useSelector((state) => state.interview.selectedInternId)
   const { name } = useSelector((state) => state.interview.getDetailInters)
   const [openIternModal, setOpenInternModal] = useState(false)
   const [nameInterview, setNameInterview] = useState('')
   const [selectedDateTime, setSelectedDateTime] = useState(null)
   const [selectedDateTimes, setSelectedDateTimes] = useState(null)
   const [loc, setLocation] = useState('')
   const [desc, setDesc] = useState('')

   const date = dayjs(selectedDateTime)
   const timeStart = date.format('HH:mm')
   const dateEnd = dayjs(selectedDateTimes)
   const timeEnd = dateEnd.format('HH:mm')

   const onOpenIternModalHandler = () => {
      setOpenInternModal(true)
   }
   const onCloseIternModalHandler = () => {
      setOpenInternModal(false)
   }
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

   useEffect(() => {
      dispatch(internsDetailGetThunk(iD))
   }, [iD])

   const addNewInterview = () => {
      const data = {
         name_interview: nameInterview,
         date: '2021-12-10',
         start_time: timeStart,
         end_time: timeEnd,
         location: loc,
         descriptions: desc,
         intern: [id],
      }
      dispatch(newInterviewPostThunk(data))
         .unwrap()
         .then(() => {
            onClose()
            showSnackbar({
               message: 'Успешно добавлено!',
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
   return (
      <div>
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
                     onClick={onOpenIternModalHandler}
                  >
                     {name ? name : <p>Intern Name</p>}
                  </UiButtonStyle>
               </StyleBlocks>
               <StyleBlock>
                  <UiInput
                     value={nameInterview}
                     onChange={onChangeNameOfInt}
                     bordercolor="#fff"
                     colors="#fff"
                     type="text"
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
                        <DemoContainer components={['DateTimePicker']}>
                           <DemoItem>
                              <DateTimePicker
                                 ampm={false}
                                 value={selectedDateTime}
                                 onChange={handleDateTimeChange}
                                 views={['hours', 'minutes']}
                                 autoOpen={false}
                              />
                           </DemoItem>
                        </DemoContainer>
                     </LocalizationProvider>
                  </StyleBlockDate>
                  <StyleBlockDate>
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']}>
                           <DemoItem>
                              <DateTimePicker
                                 ampm={false}
                                 value={selectedDateTimes}
                                 onChange={handleDateTimeChanges}
                                 views={['hours', 'minutes']}
                              />
                           </DemoItem>
                        </DemoContainer>
                     </LocalizationProvider>
                  </StyleBlockDate>
               </CalendarContainer>
               <StyleBlock>
                  <UiInput
                     value={loc}
                     onChange={onChangeLoc}
                     colors="#fff"
                     bordercolor="#fff"
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
                     colors="#fff"
                     bordercolor="#fff"
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
                     onClick={addNewInterview}
                  >
                     Save
                  </UiButton>
               </ButtonBlock>
            </Container>
         </UiModal>
         {openIternModal ? (
            <InternData onCloseIternModalHandler={onCloseIternModalHandler} />
         ) : (
            ''
         )}
      </div>
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