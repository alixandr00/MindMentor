import { Box, Modal, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'
import {
   formValidHandler,
   onChangeDataMentorForm,
   resetValidHandler,
   statusHandler,
} from '../../store/mentors/mentor.slice'
import { PDFMentor } from './PDFMentor'
import { showSnackbar } from '../UI/snackbar/Snackbar'
import { MentorModalTextarea } from './textarea/MentorModalTextarea'

export const MentorModalResume = ({ open, onClose }) => {
   const dispatch = useDispatch()
   const { createMentorForm, valid } = useSelector((state) => state.mentor)
   const [validForm, setValidForm] = useState(false)
   const [createAMentorOrConfirm, setCreateAMentorOrConfirm] = useState(true)

   const onCloseHandler = () => {
      setCreateAMentorOrConfirm(false)
      setValidForm(false)
      dispatch(resetValidHandler())
      onClose()
   }

   const onChangeHandlerForm = (event) => {
      const { name, value } = event.target
      dispatch(onChangeDataMentorForm({ name, value }))
   }

   const onTrueStatusHandler = () => {
      dispatch(statusHandler(true))
   }

   const onFalseStatusHandler = () => {
      dispatch(statusHandler(false))
   }

   const onPaidHandler = () => {
      if (createMentorForm.status) {
         onFalseStatusHandler()
      } else {
         onTrueStatusHandler()
      }
   }

   const inValid = valid !== ''

   const onSaveHandler = () => {
      if (!createAMentorOrConfirm) {
         dispatch(formValidHandler('one'))
      } else {
         dispatch(formValidHandler('two'))
      }

      setCreateAMentorOrConfirm(true)
   }

   useEffect(() => {
      if (inValid) {
         showSnackbar({ message: valid, severity: 'error' })
         setValidForm(true)
      } else {
         setValidForm(false)
      }
   }, [valid])

   return (
      <WrapperContainer open={open} onClose={onCloseHandler}>
         <ContainerModal>
            <div>
               {createAMentorOrConfirm && (
                  <Paid onClick={onPaidHandler}>
                     {createMentorForm.status ? 'Paid' : 'Un Paid'}
                  </Paid>
               )}

               <ContainerInputs>
                  <WrapperInput>
                     {!createAMentorOrConfirm && (
                        <StyledLabel htmlFor="name">Name</StyledLabel>
                     )}
                     <InputStyle
                        placeholder="Name"
                        colors="#fff"
                        value={createMentorForm.name}
                        id="name"
                        name="name"
                        width="17.2vw"
                        onChange={onChangeHandlerForm}
                        error={validForm && createMentorForm.name === ''}
                     />
                  </WrapperInput>
                  <WrapperInput>
                     {!createAMentorOrConfirm && (
                        <StyledLabel htmlFor="surname">Surname</StyledLabel>
                     )}
                     <InputStyle
                        placeholder="Surname"
                        colors="#fff"
                        id="surname"
                        value={createMentorForm.surname}
                        name="surname"
                        width="17.2vw"
                        onChange={onChangeHandlerForm}
                        error={validForm && createMentorForm.surname === ''}
                     />
                  </WrapperInput>
               </ContainerInputs>
               {!createAMentorOrConfirm ? (
                  <div>
                     <ContainerStatus two={createAMentorOrConfirm}>
                        <StatusText>Status</StatusText>
                        <WrapperStatus>
                           <TextStatus
                              className="bilable"
                              onClick={onTrueStatusHandler}
                              background={
                                 createMentorForm.status
                                    ? '#257136'
                                    : 'transparent'
                              }
                           >
                              bilable
                           </TextStatus>
                           <TextStatus
                              className="nonBilable"
                              onClick={onFalseStatusHandler}
                              background={
                                 createMentorForm.status
                                    ? 'transparent'
                                    : '#5696F5'
                              }
                           >
                              non-bilable
                           </TextStatus>
                        </WrapperStatus>
                     </ContainerStatus>

                     <PDFMentor
                        error={validForm && createMentorForm.pdf === ''}
                     />
                  </div>
               ) : (
                  <TwoContainerInput>
                     <InputStyle
                        type="text"
                        bordercolor="#fff"
                        borderradius="0.625rem"
                        width="17.2vw"
                        onChange={onChangeHandlerForm}
                        value={createMentorForm.stack}
                        name="stack"
                        error={validForm && createMentorForm.stack === ''}
                     />
                     <InputStyle
                        type="text"
                        bordercolor="#fff"
                        borderradius="0.625rem"
                        width="38vw"
                        onChange={onChangeHandlerForm}
                        name="email"
                        value={createMentorForm.email}
                        error={validForm && createMentorForm.email === ''}
                     />
                     {/* <textarea
                        onChange={onChangeHandlerForm}
                        value={createMentorForm.education}
                        name="education"
                     />
                     <textarea
                        onChange={onChangeHandlerForm}
                        value={createMentorForm.workExperience}
                        name="workExperience"
                     /> */}
                     <MentorModalTextarea
                        onChangeHandlerForm={onChangeHandlerForm}
                        createMentorForm={createMentorForm}
                     />
                  </TwoContainerInput>
               )}
               <ContainerButtons>
                  <ButtonStyled onClick={onCloseHandler}>Cancel</ButtonStyled>
                  <ButtonStyled onClick={onSaveHandler}>Save</ButtonStyled>
               </ContainerButtons>
            </div>
         </ContainerModal>
      </WrapperContainer>
   )
}

const WrapperContainer = styled(Modal)(({ ...rest }) => ({
   position: 'fixed',
   top: '0',
   left: '0',
   right: '0',
   bottom: '0',
   width: '100%',
   height: '100vh',
   backgroundColor: 'rgba(240, 230, 230, 0.288)',
   backdropFilter: rest.backdropFilter || 'blur(2px)',
   zIndex: '990',
}))

const ContainerModal = styled(Box)(() => ({
   width: '50vw',
   borderRadius: ' 0.625rem',
   border: '1px solid #FFF',
   background: ' #1E1F22',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',

   padding: '2.625rem',

   position: 'fixed',
   left: '50%',
   top: '50%',
   transform: 'translate(-50%, -50%)',
}))

const InputStyle = styled(UiInput)(({ error }) => ({
   height: '2.0625rem',
   borderRadius: '0.625rem',
   border: `1px solid ${error ? '#f00' : '#F9F9F9'}`,
   boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
   background: '#252335',

   '& .MuiInputBase-input': {
      color: '#fff',
   },
}))

const Paid = styled('button')`
   border-radius: 0.9375rem;
   border: 0.5px solid #5696f5;
   background-color: transparent;

   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 1rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;

   padding: 0.25rem 1.875rem;
`

const ContainerInputs = styled('div')(() => ({
   marginTop: '1.75rem',
   display: 'flex',
   gap: '3.81rem',
}))

const TwoContainerInput = styled('div')`
   margin-top: 2.25rem;

   display: flex;
   flex-direction: column;
   gap: 1.375rem;
`

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

const StyledLabel = styled('label')({
   color: '#FFF',
   fontSize: '1.25rem',
   fontWeight: 500,
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
const TextStatus = styled('button')(({ background }) => ({
   backgroundColor: background,
   borderRadius: '0.9375rem',
   color: 'white',
   fontSize: '1rem',
   padding: '0.25rem 1.875rem',
   cursor: 'pointer',
   '&.bilable': {
      border: '1px solid #257136',

      '&:hover': {
         backgroundColor: '#257135ec',
      },
      '&:active': {
         backgroundColor: '#208436',
      },
   },
   '&.nonBilable': {
      border: '1px solid #5696F5',

      '&:hover': {
         backgroundColor: '#5696f5e6',
      },
      '&:active': {
         backgroundColor: '#337ff0',
      },
   },
}))

const ContainerButtons = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: '3rem',
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
