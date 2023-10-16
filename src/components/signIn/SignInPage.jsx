import { styled, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'
import { HideIcon, ShowIcon } from '../../assets/icons'

export const SignInPage = () => {
   const [showPassword, setShowPassword] = useState(false)
   const handleTogglePasswordVisibility = () => {
      setShowPassword((prev) => !prev)
   }
   return (
      <WrapperContainer>
         <Container>
            <SignInText>MindMento</SignInText>
            <ContainerInputs>
               <InputStyle placeholder="LOGIN" label="LOGIN" />
               <InputStyle
                  placeholder="PASSWORD"
                  label="PASSWORD"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <IconButton onClick={handleTogglePasswordVisibility}>
                           {showPassword ? (
                              <ShowIcon fill="white" />
                           ) : (
                              <HideIcon fill="white" />
                           )}
                        </IconButton>
                     ),
                  }}
               />
            </ContainerInputs>
            <ButtonStyled>LOGIN</ButtonStyled>
         </Container>
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
const Container = styled('div')({
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
   '& .MuiInputBase-input': {
      background: 'transparent',
      width: '27.6875rem',
      height: '2.5rem',
      fontFamily: 'Bai Jamjuree',
   },

   '& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill':
      {
         backgroundColor: 'red !important',
         width: '100%',
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
