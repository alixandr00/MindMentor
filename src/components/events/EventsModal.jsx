import React, { useState } from 'react'
import { styled } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import CloseIcon from '@mui/icons-material/Close'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'
import { Time } from '../UI/time/Time'

export const EventsModal = () => {
   const [close, setClose] = useState(true)

   const onClose = () => {
      setClose(false)
   }

   return close ? (
      <UiModal
         open
         width="36.75rem"
         height="43.0625rem"
         backgroundColor="rgba(84, 71, 170, 0.93)"
      >
         <CloseIconContainer>
            <CloseIconBlock onClick={onClose}>
               <CloseIcon />
            </CloseIconBlock>
         </CloseIconContainer>
         <Container>
            <StyleBlocks>
               <UiInput
                  type="text"
                  width="9.3125rem"
                  height="3.125rem"
                  borderRadius="1.25rem"
                  placeholder="Intern Name "
                  backgroundColor="rgba(84, 71, 170, 0.93)"
                  hoverBorderColor="#fff"
               />
            </StyleBlocks>
            <StyleBlock>
               <UiInput
                  type="text"
                  width="25.3125rem"
                  height="3.125rem"
                  borderRadius="1.25rem"
                  placeholder="Name of the interview"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
                  hoverBorderColor="#fff"
               />
            </StyleBlock>
            <CalendarContainer>
               <StyleBlockCalendar>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DatePicker />
                  </LocalizationProvider>
               </StyleBlockCalendar>

               <StyleBlockDate>
                  <Time
                     width="7.625rem"
                     height="3.125rem"
                     borderRadius="1.25rem"
                     value={null}
                     placeholder="Start"
                     fontSize="1rem"
                  />
               </StyleBlockDate>
               <StyleBlockDate>
                  <Time
                     width="7.625rem"
                     height="3.125rem"
                     borderRadius="1.25rem"
                     value={null}
                     placeholder="End time"
                     fontSize="1rem"
                  />
               </StyleBlockDate>
            </CalendarContainer>
            <StyleBlock>
               <UiInput
                  width="22.7rem"
                  height="3.125rem"
                  borderRadius="1.25rem"
                  placeholder="Location"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
                  hoverBorderColor="#fff"
                  InputProps={{
                     startAdornment: <LocationOnIcon />,
                  }}
               />
            </StyleBlock>
            <StyleBlock>
               <UiInput
                  className="custom-width-input"
                  id="outlined-multiline-static"
                  multiline
                  rows={6.5}
                  type="text"
                  borderRadius="1.25rem"
                  placeholder="Description"
                  backgroundColor="rgba(84, 71, 170, 0.93)"
                  hoverBorderColor="#fff"
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
               >
                  Save
               </UiButton>
            </ButtonBlock>
         </Container>
      </UiModal>
   ) : (
      ''
   )
}

const Container = styled('div')`
   margin-left: 3rem;
`

const CalendarContainer = styled('div')`
   display: flex;
   gap: 1.7rem;
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
   margin-top: 2rem;

   .MuiOutlinedInput-root {
      width: 7.625rem;
      height: 3.125rem;
      border-radius: 1.25rem;
      border: 1px solid #fff;
      /* padding-right: 0px; */
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
   margin-top: 2rem;
   .MuiOutlinedInput-root {
      color: #fff;
      width: 7.625rem;
      height: 3.125rem;
      border-radius: 1.25rem;
   }
   .MuiSvgIcon-root {
      display: none;
   }
   .MuiInputLabel-root {
      color: #fff;
   }
   .MuiInputLabel-root.Mui-focused {
      display: none;
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
