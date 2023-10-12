import { styled } from '@mui/material'
import React from 'react'
import { UiInput } from '../UI/input/UiInput'

export const SignInPage = () => {
   return (
      <WrapperContainer>
         <Container>
            <MainContainer>
               <div>
                  <h1>MindMento</h1>
               </div>
               <div>
                  <InputStyle placeholder="helloo" />
               </div>
               <div>
                  <InputStyle placeholder="helloo" />
               </div>
            </MainContainer>
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
})
const MainContainer = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: '100%',
})

const InputStyle = styled(UiInput)({
   '& .MuiInputBase-input': {
      height: '2rem',
      background: 'transparent',
   },
})
