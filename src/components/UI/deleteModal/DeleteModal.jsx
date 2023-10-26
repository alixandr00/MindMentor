import { styled } from '@mui/material'
import React from 'react'
import { UiModal } from '../modal/UiModal'
import { UiButton } from '../button/UiButton'

export const DeleteModal = ({ onClick, unClick }) => {
   return (
      <Modal open onClose={unClick}>
         <p>Are you sure that you want to delete this Vendor?</p>
         <UiButtonBlock>
            <Button
               onClick={onClick}
               backgroundColor="linear-gradient(180deg, rgba(4, 1, 22, 0.93) 0%, rgba(43, 45, 49, 0.00) 100%)"
            >
               Yes
            </Button>
            <Button
               onClick={unClick}
               backgroundColor="linear-gradient(180deg, rgba(4, 1, 22, 0.93) 0%, rgba(43, 45, 49, 0.00) 100%)"
            >
               No
            </Button>
         </UiButtonBlock>
      </Modal>
   )
}
const Modal = styled(UiModal)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 34.1875rem;
   height: 16.8125rem;
   border-radius: 1.875rem;
   border: 1px solid #ececec;
   background: linear-gradient(
      176deg,
      #252335 26.77%,
      rgba(84, 71, 170, 0.93) 97.4%
   );
   p {
      width: 350px;
      color: #fffefe;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
   }
`
const UiButtonBlock = styled('div')`
   display: flex;
   gap: 2rem;
   margin-top: 2.75rem;
`
const Button = styled(UiButton)`
   border: 1px solid #fff;
`
