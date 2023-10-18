import React from 'react'
import { styled } from '@mui/material'
import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'
import { ReactComponent as Icon } from '../../assets/images/Ellipse 5 (1).svg'

export const NewVendorModal = () => {
   return (
      <ModalComponent
         open
         width="60.4375rem"
         height="47.1875rem"
         border="1px solid #fff"
      >
         <Container>
            <BrandBlock>
               <UiButton
                  width="6.625rem"
                  height="2.0625rem"
                  border="1px solid #F9F9F9"
                  borderRadius="0.625rem"
                  background="rgba(84, 71, 170, 0.93)"
               >
                  Company
               </UiButton>
               <Icon />
               <Brand>Nike</Brand>
            </BrandBlock>
            <div>
               <InputTitle>Vacancy Name</InputTitle>
               <UiInput
                  background="#252335"
                  width="30.8125rem"
                  height="2.0625rem"
                  type="tel"
                  colors="#fff"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <LevelContainer>
               <Level>Level</Level>
               <SelectBlock>
                  <option>Junior</option>
                  <option>Senior</option>
                  <option>Middle</option>
               </SelectBlock>
            </LevelContainer>
            <InputContainer>
               <InputTitle>Requirements</InputTitle>
               <UiInput
                  className="custom-width-input"
                  multiline
                  rows={9}
                  type="text"
                  colors="#fff"
                  borderradius="0.626rem"
                  background="#252335"
                  borderColor="#fff"
               />
            </InputContainer>
            <BlockBtn>
               <UiButton
                  width="5.375rem"
                  height="2.0625rem"
                  border="1px solid #F9F9F9"
                  borderRadius="0.625rem"
                  background="#252335"
               >
                  Delete
               </UiButton>
               <UiButton
                  width="5.375rem"
                  height="2.0625rem"
                  border="1px solid #F9F9F9"
                  borderRadius="0.625rem"
                  background="#252335"
               >
                  Save
               </UiButton>
            </BlockBtn>
         </Container>
      </ModalComponent>
   )
}

const ModalComponent = styled(UiModal)`
   display: flex;
   justify-content: center;
   background-color: #1e1f22;
`
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin-top: 5.81rem;
   .custom-width-input {
      width: 30.8125rem;
   }
`
const InputTitle = styled('p')`
   color: #fff;
   font-size: 1.25rem;
   font-weight: 500;
   padding-bottom: 0.5rem;
`
const BlockBtn = styled('div')`
   display: flex;
   gap: 2.88rem;
   justify-content: flex-end;
   margin-top: 0.56rem;
`
const SelectBlock = styled('select')`
   width: 6.625rem;
   height: 2.0625rem;
   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 1.25rem;
   border: 1px solid #f9f9f9;
   border-radius: 0.625rem;
   background: rgba(84, 71, 170, 0.93);
   cursor: pointer;
`
const InputContainer = styled('div')`
   margin-top: 3.5rem;
`
const Level = styled('p')`
   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 1.25rem;
`
const LevelContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 1rem;
`
const Brand = styled('p')`
   font-size: 1rem;
   font-weight: 600;
   color: #fff;
`
const BrandBlock = styled('div')`
   display: flex;
   align-items: center;
   gap: 1rem;
`
