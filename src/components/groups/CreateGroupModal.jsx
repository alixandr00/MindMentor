import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'

export const CreateGroupModal = ({ openModal, oncloseModal }) => {
   return (
      <UiModal open={openModal} onClose={oncloseModal}>
         <Container>
            <CloseIconBlock onClick={oncloseModal}>
               <CloseIcon />
            </CloseIconBlock>
            <FirstWrapper>
               <GroupText>Group Name</GroupText>
               <UiInputStyled placeholder="group name" />
            </FirstWrapper>
            <SecondWrapper>
               <UiButtonStyled>Group</UiButtonStyled>
            </SecondWrapper>
            <ThirdWrapper>
               <StatusText>Status</StatusText>
               <WrapperButtons>
                  <StatusButtonsStyled>ACTIVE</StatusButtonsStyled>
                  <StatusButtonsStyled>INACTIVE</StatusButtonsStyled>
                  <StatusButtonsStyled>FINISHED</StatusButtonsStyled>
               </WrapperButtons>
               <WrapperData>
                  <StyleBlockCalendar>
                     <DataTexts>Start data</DataTexts>
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                     </LocalizationProvider>
                  </StyleBlockCalendar>
                  <StyleBlockCalendar>
                     <DataTexts>End data</DataTexts>
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                     </LocalizationProvider>
                  </StyleBlockCalendar>
               </WrapperData>
               <ButtonWrapper>
                  <ButtonsStyled>Cancel</ButtonsStyled>
                  <ButtonsStyled>Save</ButtonsStyled>
               </ButtonWrapper>
            </ThirdWrapper>
         </Container>
      </UiModal>
   )
}

const Container = styled('div')({
   width: '55rem ',
   height: '40rem',
   backgroundColor: '#1E1F22',
   borderRadius: '0.625rem',
   border: ' 1px solid #FFF',
   paddingTop: '4rem',
   paddingLeft: '13rem',
})
const CloseIconBlock = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 1.5rem;
   height: 1.5rem;
   border: 1px solid #fff;
   border-radius: 5px;
   position: absolute;
   right: 1.3rem;
   top: 1.3rem;
   cursor: pointer;
   .MuiSvgIcon-root {
      width: 1rem;
      color: #fff;
   }
`
const DataTexts = styled('h2')({
   color: '#FFF',
   fontSize: '1.25rem',
   fontWeight: 500,
})
const StyleBlockCalendar = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   .MuiOutlinedInput-root {
      width: 8rem;
      height: 2.125rem;
      border-radius: 0.625rem;
      border: 1px solid #fff;
      background-color: #252335;
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
const WrapperData = styled('div')({
   display: 'flex',
   gap: '3rem',
   marginTop: '0.5rem',
})

const GroupText = styled('h1')({
   color: ' #FFF',
   fontSize: ' 1.25rem',
   fontWeight: 500,
})
const UiInputStyled = styled(UiInput)({
   border: `1px solid #F9F9F9`,
   width: '30.8125rem',
   height: '2.0625rem',
   borderRadius: '0.625rem',
   background: '#252335',
   boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
   color: 'white',
})
const FirstWrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
})
const SecondWrapper = styled('div')({
   width: '30rem',
   height: '12rem',
   marginTop: '1rem',
   // backgroundColor: 'red',
   border: '1px solid white',
})
const ThirdWrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.5rem',
})
const UiButtonStyled = styled(UiButton)({
   borderRadius: '0.625rem',
   border: '1px solid #F9F9F9',
   background: '#252335',
   width: '6.25rem',
   height: '2.0625rem',
   '&:hover': {
      backgroundColor: 'rgba(84, 71, 170, 0.93)',
   },
})
const StatusText = styled('h2')({
   color: ' #FFF',
   fontSize: ' 1.25rem',
   fontWeight: 500,
   marginTop: '0.7rem',
})
const WrapperButtons = styled('div')({
   display: 'flex',
   gap: '2rem',
})

const StatusButtonsStyled = styled(UiButton)({
   borderRadius: '0.625rem',
   border: '1px solid #F9F9F9',
   background: '#252335',
   width: '6.25rem',
   height: '2.0625rem',
   '&:hover': {
      backgroundColor: 'rgba(84, 71, 170, 0.93)',
   },
})
const ButtonsStyled = styled(UiButton)({
   borderRadius: '0.625rem',
   border: '1px solid #F9F9F9',
   background: '#252335',
   width: '5.25rem',
   height: '2.0625rem',
   '&:hover': {
      backgroundColor: 'rgba(84, 71, 170, 0.93)',
   },
})

const ButtonWrapper = styled('div')({
   display: 'flex',
   gap: '2rem',
   justifyContent: 'flex-end',
   marginRight: '11rem',
   marginTop: '3rem',
})
