import React, { useState } from 'react'
import { styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'
import { Calendar } from '../UI/calendar/Calendar'
import { UiButton } from '../UI/button/UiButton'

export const Modal = () => {
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
               <StyleBlock>
                  <Calendar
                     width="7.625rem"
                     height="3.125rem"
                     borderRadius="1.25rem"
                     value={null}
                     placeholder="Date"
                     fontSize="1rem"
                  />
               </StyleBlock>

               <StyleBlock>
                  <Calendar
                     width="7.625rem"
                     height="3.125rem"
                     borderRadius="1.25rem"
                     value={null}
                     placeholder="Start"
                     fontSize="1rem"
                  />
               </StyleBlock>
               <StyleBlock>
                  <Calendar
                     width="7.625rem"
                     height="3.125rem"
                     borderRadius="1.25rem"
                     value={null}
                     placeholder="End time"
                     fontSize="1rem"
                  />
               </StyleBlock>
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
                  type="text"
                  width="25.3125rem"
                  height="11.125rem"
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
                  borderRadius="1.25rem"
                  variant="outlined"
                  background="rgba(84, 71, 170, 0.93)"
               >
                  Cancel
               </UiButton>
               <UiButton
                  width="5.1875rem"
                  height="3.125rem"
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
`
const ButtonBlock = styled('div')`
   display: flex;
   width: 29.5vw;
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
