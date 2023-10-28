import { styled } from '@mui/material'
import { UiInput } from '../../UI/input/UiInput'
import { InternsAddStudentModalSelect } from './InternsAddStudentModalSelect'
import { UiButton } from '../../UI/button/UiButton'
import { useState } from 'react'
import { addedInterns } from '../../../api/authService'

export const InternsAddStudentModal = ({ onClose }) => {

   const onSubmitHandler = (values) => {
      const newData = {
         firstName: values.firstName,
         lastName: values.lastName,
         phoneNumber: values.phoneNumber,
         email: values.email,
      }
      addedInterns(newData)
      onClose()
   }
   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: 'Здесь будет линк create password',
         phoneNumber: '',
      },
      onSubmit: onSubmitHandler,
   })
   const { handleChange, handleSubmit, values, setFieldValue } = formik

   const isEmailValid = () => {
      return (
         values.email.length === 0 ||
         (values.email.length > 0 && values.email.includes('@'))
      )
   }
   const handlePhoneChange = (value) => {
      setFieldValue('phoneNumber', value)
   }
   return (
      <MainContainer>
         <Container>
            <MainFormContainer>
               <div>
                  <FormContainer>
                     <InputBox>
                        <label htmlFor="name">Name</label>
                        <UiInputStyle
                           background="#252335"
                           width="32vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="text"
                           id="name"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="surname">Surname</label>
                        <UiInputStyle
                           background="#252335"
                           width="32vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="text"
                           id="surname"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="email">Email</label>
                        <UiInputStyle
                           background="#252335"
                           width="32vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="email"
                           id="email"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="phone">Phone number</label>
                        <UiInputStyle
                           background="#252335"
                           width="32vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="tel"
                           id="phone"
                        />
                     </InputBox>
                  </FormContainer>
                  <ContainerSelect>
                     <BoxSelect>
                        <label htmlFor="stack">Stack</label>

                        <InternsAddStudentModalSelect
                           name="stack"
                           dataMenuItem={[
                              { id: 1, name: 'Python' },
                              { id: 2, name: 'Java' },
                              { id: 3, name: 'Javascript' },
                           ]}
                           defaultName="Python"
                        />
                     </BoxSelect>

                     <BoxSelect>
                        <label htmlFor="status">Status</label>
                        <InternsAddStudentModalSelect
                           name="status"
                           dataMenuItem={[
                              { id: 1, name: 'In progress' },
                              { id: 2, name: 'Hired' },
                              { id: 3, name: 'Graduate' },
                           ]}
                           defaultName="In progress"
                        />
                     </BoxSelect>
                  </ContainerSelect>
                  <ContainerAddMentorAndGroup>
                     <BoxAddMentorAndGroup>
                        <UiButton
                           backgroundColor="#252335"
                           backgroundhover="#28263a"
                           border="1px solid #fff"
                           fontSize="1.25rem"
                           type="button"
                        >
                           Mentor
                        </UiButton>
                        <span>Daniel Kubanychbecov</span>
                     </BoxAddMentorAndGroup>

                     <BoxAddMentorAndGroup>
                        <UiButton
                           backgroundColor="#252335"
                           backgroundhover="#28263a"
                           border="1px solid #fff"
                           fontSize="1.25rem"
                           type="button"
                        >
                           Group
                        </UiButton>
                        <span>Java Script</span>
                     </BoxAddMentorAndGroup>
                  </ContainerAddMentorAndGroup>
                  <ContainerPayment>
                     <p>Payment cost</p>

                     <div className="box">
                        <UiInputStyle
                           background="#252335"
                           width="7.4vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="number"
                        />

                        <span>som</span>
                     </div>
                  </ContainerPayment>

                  <FooterButtonContainer>
                     <UiButton
                        onClick={onClose}
                        backgroundColor="#252335"
                        backgroundhover="#28263a"
                        border="1px solid #fff"
                        fontSize="1.25rem"
                        type="button"
                     >
                        Cancel
                     </UiButton>
                     <UiButton
                        backgroundColor="#252335"
                        backgroundhover="#28263a"
                        border="1px solid #fff"
                        fontSize="1.25rem"
                        type="button"
                     >
                        Save
                     </UiButton>
                  </FooterButtonContainer>
               </div>
            </MainFormContainer>
         </Container>
      </MainContainer>
   )
}

const MainContainer = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
`

const Container = styled('div')`
   margin: 3rem 0 1.25rem 0;
   padding: 1.3rem 2.25rem 1.3rem 2.25rem;

   width: 52vw;

   background-color: #1e1f22;
   border-radius: 0.625rem;
   border: 1px solid #fff;

   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 20px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;

   display: flex;
   flex-direction: column;
   gap: 0.375rem;
`

const MainFormContainer = styled('div')`
   display: flex;
   justify-content: center;
`

const FormContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.0625rem;
`

const InputBox = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.6875rem;
`

const ContainerSelect = styled('div')`
   margin-top: 0.875rem;
   margin-bottom: 1.4375rem;

   display: flex;
   gap: 2.875rem;
`

const UiInputStyle = styled(UiInput)`
   padding: 0;
   font-size: 1rem;
`

const BoxSelect = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.6875rem;
`

const ContainerAddMentorAndGroup = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

const BoxAddMentorAndGroup = styled('div')`
   display: flex;
   gap: 1.125rem;
`

const ContainerPayment = styled('div')`
   margin-top: 0.75rem;

   p {
      margin: 0;
   }

   .box {
      display: flex;
      gap: 1.25rem;
      margin-top: 0.5rem;
   }
`

const FooterButtonContainer = styled('div')`
   display: flex;
   justify-content: flex-end;
   gap: 2.375rem;
`
