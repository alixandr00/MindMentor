/* eslint-disable prettier/prettier */
import { styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UiInput } from '../../UI/input/UiInput'
import { InternsAddStudentModalSelect } from './InternsAddStudentModalSelect'
import { UiButton } from '../../UI/button/UiButton'
import { postNewStudents } from '../../../store/interns/internsThunk'

export const InternsAddStudentModal = ({ onClose }) => {
   const dispatch = useDispatch()
   const [names, setName] = useState('')
   const [surName, setSurName] = useState('')
   const [emailValue, setEmail] = useState('')
   const [phoneValue, setPhone] = useState('')
   const [paymentValue, setPayment] = useState('')
   const [dataSelect, setDataSelect] = useState({
      stack: '',
      status: '',
   })

   const addNewStudents = () => {
      const data = {
         name: names,
         surname: surName,
         email: emailValue,
         phone_number: phoneValue,
         payment_cost: paymentValue,
         tech_stack: dataSelect.stack,
         status: dataSelect.status,
      }
      dispatch(postNewStudents(data))
   }

   const colectorStackSelectValue = (data) => {
      setDataSelect({ ...dataSelect, stack: data })
   }

   const handleOnChangeName = (e) => setName(e.target.value)
   const handleOnChangeSurName = (e) => setSurName(e.target.value)
   const handleOnChangeEmail = (e) => setEmail(e.target.value)
   const handleOnChangePhone = (e) => setPhone(e.target.value)
   const handleOnChangePayment = (e) => setPayment(e.target.value)
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
                           value={names}
                           onChange={handleOnChangeName}
                           colors="#fff"
                           bordercolor="#fff"
                           type="text"
                           id="name"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="surname">Surname</label>
                        <UiInputStyle
                           value={surName}
                           onChange={handleOnChangeSurName}
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
                           value={emailValue}
                           onChange={handleOnChangeEmail}
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
                           value={phoneValue}
                           onChange={handleOnChangePhone}
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
                           defaultName="Python"
                           name="stack"
                           dataMenuItem={[
                              { id: 1, name: 'Javascript' },
                              { id: 2, name: 'Java' },
                           ]}
                           colectorSelectValue={colectorStackSelectValue}
                        />
                     </BoxSelect>

                     <BoxSelect>
                        <label htmlFor="status">Status</label>
                        <InternsAddStudentModalSelect
                           name="status"
                           defaultName="New"
                           dataMenuItem={[
                              { id: 1, name: 'New' },
                              { id: 2, name: 'Paid' },
                              { id: 3, name: 'Pending' },
                              { id: 4, name: 'Validated' },
                              { id: 5, name: 'Graduate' },
                              { id: 6, name: 'Selected' },
                              { id: 7, name: 'Proposed' },
                              { id: 8, name: 'Onboarded' },
                           ]}
                           colectorSelectValue={colectorStackSelectValue}
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
                           value={paymentValue}
                           onChange={handleOnChangePayment}
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
                        onClick={addNewStudents}
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
