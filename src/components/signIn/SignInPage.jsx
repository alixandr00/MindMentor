import { styled } from '@mui/material'
import React from 'react'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'

export const SignInPage = () => {
   return (
      <WrapperContainer>
         <ContainerForm>
            <SignInText>MindMento</SignInText>

            <ContainerInputs>
               <InputStyle placeholder="LOGIN" />
               <InputStyle placeholder="PASSWORD" type="password" />
            </ContainerInputs>
            <ButtonStyled>LOGIN</ButtonStyled>
         </ContainerForm>
      </WrapperContainer>
   )
}

const WrapperContainer = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   height: '97vh',
})
const ContainerForm = styled('form')({
   width: '40.75rem',
   height: '36.125rem',
   border: '1px solid white',
   borderRadius: '1.875rem',
   background: '#1E1F22',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})

const InputStyle = styled(UiInput)({
   width: '27.6875rem',
   height: '2.5rem',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',

   background: '#1E1F22',
   '& .MuiInputBase-input': {
      color: '#fff',
   },
})

const SignInText = styled('h1')({
   color: '#FFF',
   fontSize: '2rem',
   fontWeight: 500,
   marginTop: '6.81rem',
})

const ContainerInputs = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   gap: '2.31rem',
   marginTop: '3.25rem',
})
const ButtonStyled = styled(UiButton)({
   marginTop: '3.94rem',
   width: '13rem',
   height: '2.875rem',
   borderRadius: '2.3125rem',
})
