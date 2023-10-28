import React from 'react'
import { styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { UiModal } from '../../UI/modal/UiModal'
import { UiInput } from '../../UI/input/UiInput'
import { UiButton } from '../../UI/button/UiButton'
import { ReactComponent as Money } from '../../../assets/icons/Chat Round Money.svg'

export const PayModal = ({ onClosePayModalHandler, open }) => {
   return (
      <Modal
         width=" 26.875rem"
         height="23.4375rem"
         onClose={onClosePayModalHandler}
         open={open}
      >
         <IconContainer>
            <CloseIconContainer onClick={onClosePayModalHandler}>
               <StyldeIcon />
            </CloseIconContainer>
         </IconContainer>
         <Container>
            <Title>Replenishment</Title>
            <Input>
               <MoneyStyle />
               <UiInput
                  width="11.8125rem"
                  height="3.5rem"
                  background="#2B2D31"
                  bordercolor="#fff"
                  colors="#fff"
                  placeholder="0 c"
                  padding="0px 0px 0px 50px"
               />
            </Input>

            <UiInput
               width="14.25rem"
               height="3.875rem"
               background="#2B2D31"
               bordercolor="#fff"
               colors="#fff"
               placeholder="0 c"
            />
            <UiButton
               width="14.25rem"
               height="2.875rem"
               fontSize="1.3rem"
               border="1px solid #fff"
               background=" linear-gradient(180deg, rgba(4, 1, 22, 0.93) 0%, rgba(43, 45, 49, 0.00) 100%)"
            >
               Pay
            </UiButton>
         </Container>
      </Modal>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.94rem;
`
const Modal = styled(UiModal)`
   border: 1px solid #fff;
   background: linear-gradient(
      176deg,
      #252335 26.77%,
      rgba(84, 71, 170, 0.93) 97.4%
   );
`
const Title = styled('p')`
   color: #f9f9f9;
   font-size: 1.5rem;
   font-weight: 500;
`
const IconContainer = styled('div')`
   display: flex;
   justify-content: flex-end;
`
const CloseIconContainer = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 1.5rem;
   height: 1.5rem;
   border: 1px solid #fff;
   border-radius: 0.5rem;
   cursor: pointer;
`
const StyldeIcon = styled(CloseIcon)`
   color: #fff;
   font-size: 0.8rem;
`
const Input = styled('div')`
   display: flex;
`
const MoneyStyle = styled(Money)`
   position: absolute;
   top: 7.2rem;
   left: 8.5rem;
   z-index: 999;
`
