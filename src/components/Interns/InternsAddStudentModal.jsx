import { styled } from '@mui/material'
import React from 'react'
import { UiInput } from '../UI/input/UiInput'

export const InternsAddStudentModal = () => {
   return (
      <MainContainer>
         <Container>
            <HeadIconContainer>
               <span>Del</span>
               <span>Edt</span>
            </HeadIconContainer>

            <MainFormContainer>
               <div>
                  <FormContainer>
                     <InputBox>
                        <label htmlFor="name">Name</label>
                        <UiInput
                           background="#252335"
                           width="32vw"
                           type="text"
                           id="name"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="surname">Surname</label>
                        <UiInput
                           background="#252335"
                           width="32vw"
                           type="text"
                           id="surname"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="email">Email</label>
                        <UiInput
                           background="#252335"
                           width="32vw"
                           type="email"
                           id="email"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="phone">Phone number</label>
                        <UiInput
                           background="#252335"
                           width="32vw"
                           type="tel"
                           id="phone"
                        />
                     </InputBox>
                  </FormContainer>
                  <ContainerSelect>
                     <div>
                        <label htmlFor="dd">Stack</label>
                        <select name="dd">
                           <option value="Java">Java</option>
                           <option value="Java Script">Java Script</option>
                        </select>
                     </div>
                     <div>
                        <label htmlFor="dd">Stack</label>
                        <select name="dd">
                           <option value="Java">Java</option>
                           <option value="Java Script">Java Script</option>
                        </select>
                     </div>
                  </ContainerSelect>
                  <div>
                     <button type="button">Mentor</button>
                     <span>Mark Avans</span>
                  </div>
                  <div>
                     <div>
                        <p>Payment cost</p>
                     </div>
                     <div>
                        <input type="text" />
                        <span>som</span>
                     </div>
                  </div>
                  <div>
                     <button type="button">Delete</button>
                     <button type="button">Save</button>
                  </div>
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
   margin: 3.625rem 0 1.25rem 0;
   padding: 1.75rem 2.25rem 2.4375rem 2.25rem;

   width: 63vw;

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

const HeadIconContainer = styled('div')`
   display: flex;
   justify-content: flex-end;
   gap: 2.4375rem;
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
   display: flex;
`
