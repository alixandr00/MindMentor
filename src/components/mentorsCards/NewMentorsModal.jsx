import React from 'react'
import { styled } from '@mui/material'
import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'

export const NewMentorsModal = () => {
   return (
      <ModalContainer
         width="55rem"
         height="40rem"
         open
         backgroundColor="#1E1F22"
      >
         <Container>
            <Status>Paid</Status>
            <InputBlock>
               <UiInput
                  width="17.75rem"
                  height="2.0625rem"
                  bordercolor="#fff"
                  background="#252335"
                  borderradius=" 0.625rem"
                  placeholder="Name"
                  colors="#fff"
               />
               <UiInput
                  width="17.75rem"
                  height="2.0625rem"
                  bordercolor="#fff"
                  background="#252335"
                  borderradius=" 0.625rem"
                  placeholder="Surname"
                  colors="#fff"
               />
            </InputBlock>
            <Block>
               <UiInput
                  width="17.75rem"
                  height="2.0625rem"
                  bordercolor="#fff"
                  background="#252335"
                  borderradius=" 0.625rem"
                  placeholder="Tech Stack"
                  colors="#fff"
               />
               <UiInput
                  width="30.8125rem"
                  height="2.0625rem"
                  type="email"
                  bordercolor="#fff"
                  background="#252335"
                  borderradius=" 0.625rem"
                  placeholder="Email"
                  colors="#fff"
               />
               <UiInput
                  className="custom-width-input"
                  multiline
                  rows={4.5}
                  type="text"
                  background="#252335"
                  borderradius=" 0.625rem"
                  placeholder="Education "
                  bordercolor="#fff"
                  colors="#fff"
               />
               <UiInput
                  className="custom-width-input"
                  multiline
                  rows={4.5}
                  type="text"
                  borderradius=" 0.625rem"
                  placeholder="Work experiance "
                  background="#252335"
                  bordercolor="#fff"
                  colors="#fff"
               />
               <ButtonContainer>
                  <UiButton
                     width="5.375rem"
                     height="2.0625rem"
                     border="1px solid #fff"
                     background="#252335"
                  >
                     Delete
                  </UiButton>
                  <UiButton
                     width="5.375rem"
                     height="2.0625rem"
                     border="1px solid #fff"
                     background="#252335"
                  >
                     Save
                  </UiButton>
               </ButtonContainer>
            </Block>
         </Container>
      </ModalContainer>
   )
}

const ModalContainer = styled(UiModal)`
   border: 1px solid #fff;
`

const Container = styled('div')`
   margin-top: 1rem;
`

const InputBlock = styled('div')`
   display: flex;
   justify-content: center;
   gap: 2rem;
   margin-top: 1.75rem;
`
const Block = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin-top: 2.5rem;
   margin-left: 7.5rem;
   .custom-width-input {
      width: 30.8125rem;
   }
`
const ButtonContainer = styled('div')`
   display: flex;
   width: 68.5%;
   justify-content: flex-end;
   gap: 1.19rem;
`
const Status = styled('p')`
   display: flex;
   width: 7.1875rem;
   height: 1.75rem;
   padding: 0.25rem 1.875rem;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 0.9375rem;
   color: #fff;
   font-size: 1rem;
   border: 0.5px solid #5696f5;

   margin-left: 7.5rem;
`
