import { styled } from '@mui/material'
import React from 'react'
import { UiInput } from '../UI/input/UiInput'
import { DownLoadResumeIcon } from '../../assets/icons'
import { UiButton } from '../UI/button/UiButton'

export const MentorModalResume = () => {
   return (
      <WrapperContainer>
         <ContainerModal>
            <div>
               <ContainerInputs>
                  <WrapperInput>
                     <StyledLabel htmlFor="name">Name</StyledLabel>
                     <InputStyle placeholder="Name" id="name" />
                  </WrapperInput>
                  <WrapperInput>
                     <StyledLabel htmlFor="surname">Surname</StyledLabel>
                     <InputStyle placeholder="Surname" id="surname" />
                  </WrapperInput>
               </ContainerInputs>
               <ContainerStatus>
                  <StatusText>Status</StatusText>
                  <WrapperStatus>
                     <TextStatus className="bilable">bilable</TextStatus>
                     <TextStatus className="nonBilable">non-bilable</TextStatus>
                  </WrapperStatus>
               </ContainerStatus>
               <ContainerIcon>
                  <DownLoadResumeIconStyled />
               </ContainerIcon>
               <ContainerButtons>
                  <ButtonStyled>Delete</ButtonStyled>
                  <ButtonStyled>Save</ButtonStyled>
               </ContainerButtons>
            </div>
         </ContainerModal>
      </WrapperContainer>
   )
}
const DownLoadResumeIconStyled = styled(DownLoadResumeIcon)({
   cursor: 'pointer',
})
const WrapperContainer = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   height: '100vh',
})
const InputStyle = styled(UiInput)({
   width: '12.9375rem',
   height: '2.0625rem',
   borderRadius: '0.625rem',
   border: ' 1px solid #F9F9F9',
   boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
   background: '#1E1F22',
   '& .MuiInputBase-input': {
      color: '#fff',
   },
})
const ContainerModal = styled('div')({
   width: '55rem ',
   height: '40rem',
   borderRadius: ' 0.625rem',
   border: '1px solid #FFF',
   background: ' #1E1F22',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})
const ContainerInputs = styled('div')({
   marginTop: '9.44rem',
   display: 'flex',
   gap: '3.81rem',
})
const WrapperInput = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.58rem',
})
const ContainerStatus = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '1.20rem',
   gap: '1rem',
})
const WrapperStatus = styled('div')({
   display: 'flex',
   gap: '2rem',
})
const StatusText = styled('p')({
   color: '#FFF',
   fontSize: '1.25rem',
   fontWeight: 500,
})
const TextStatus = styled('p')(({ className }) => ({
   borderRadius:
      className === 'bilable' || className === 'nonBilable'
         ? '0.9375rem'
         : 'initial',
   color: 'white',
   padding: '0.25rem 1.875rem',
   cursor: 'pointer',
   '&.bilable': {
      border: '1px solid #257136',
   },
   '&.nonBilable': {
      border: '1px solid #5696F5',
   },
   '&:hover': {
      background: 'rgba(117, 108, 175, 0.93)',
   },
   '&:active': {
      background: 'rgba(84, 71, 170, 0.93)',
   },
}))
const StyledLabel = styled('label')({
   color: '#FFF',
   fontSize: '1.25rem',
   fontWeight: 500,
})
const ContainerIcon = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   marginTop: '3.94rem',
})
const ContainerButtons = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: '4.19rem',
   gap: '2rem',
})

const ButtonStyled = styled(UiButton)({
   width: '5.375rem',
   height: '2.0625rem',
   borderRadius: ' 0.625rem',
   border: '1px solid #F9F9F9',
   background: '#252335',
   boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
})
