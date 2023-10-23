import { CircularProgress, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'
import { showSnackbar } from '../UI/snackbar/Snackbar'
import { profile, signIn } from '../../store/auth/auth.thunk'

export const SignInPage = () => {
   const dispatch = useDispatch()
   const { token, isLoading } = useSelector((state) => state.auth)
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [validForm, setValidForm] = useState(false)

   const onSubmitHandler = (e) => {
      e.preventDefault()

      if (username !== '' && password !== '') {
         const data = {
            username,
            password,
         }

         dispatch(signIn({ data, snackbar: showSnackbar }))

         setValidForm(false)
      } else {
         showSnackbar({
            message: 'Bce поле должны быть заполнены',
            severity: 'warning',
         })

         setValidForm(true)
      }
   }

   useEffect(() => {
      if (token !== '') {
         dispatch(profile())
      }
   }, [token])

   return (
      <WrapperContainer>
         <ContainerForm onSubmit={onSubmitHandler}>
            <SignInText>MindMentor</SignInText>

            <ContainerInputs>
               <InputStyle
                  placeholder="LOGIN"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  error={validForm && username === ''}
               />
               <InputStyle
                  placeholder="PASSWORD"
                  type="password"
                  classpadding="true"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  error={validForm && password === ''}
               />
            </ContainerInputs>
            <ButtonStyled type="submit">
               {isLoading ? (
                  <CircularProgress
                     size={24}
                     sx={{
                        color: '#fff',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                     }}
                  />
               ) : (
                  'SIGN IN'
               )}
            </ButtonStyled>
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

const InputStyle = styled(UiInput)(({ error }) => ({
   width: '27.6875rem',
   height: '2.5rem',
   borderRadius: '0.625rem',
   border: `1px solid ${error === true ? '#f00' : '#fff'}`,

   background: '#1E1F22',
   '& .MuiInputBase-input': {
      color: '#fff',
   },
}))

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
