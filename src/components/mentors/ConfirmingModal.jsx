import { Box, Modal, styled } from '@mui/material'
import React from 'react'
import { UiButton } from '../UI/button/UiButton'

export const ConfirmingModal = ({ open, onClose, onDeleteMentorHandler }) => {
   return (
      <WrapperContainer open={open} onClose={onClose}>
         <Container>
            <Card>
               <p>Are you sure that you want to delete this Mentor?</p>

               <div className="box-button">
                  <UiButton
                     width="0"
                     padding="1rem"
                     fontSize="1.25rem"
                     background="linear-gradient(180deg, #252335 0%, rgba(37, 35, 53, 0.00) 100%)"
                     border="1px solid #fff"
                     type="button"
                     onClick={onClose}
                  >
                     No
                  </UiButton>
                  <UiButton
                     width="0"
                     padding="1rem"
                     fontSize="1.25rem"
                     background="linear-gradient(180deg, #252335 0%, rgba(37, 35, 53, 0.00) 100%)"
                     border="1px solid #fff"
                     type="button"
                     onClick={onDeleteMentorHandler}
                  >
                     Yes
                  </UiButton>
               </div>
            </Card>
         </Container>
      </WrapperContainer>
   )
}

const WrapperContainer = styled(Modal)`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100%;
   height: 100vh;
`

const Container = styled(Box)`
   position: fixed;
   left: 50%;
   border-radius: 0.625rem;
   transform: translate(-50%, 0%);
   width: 32vw;

   margin-top: 13%;
`

const Card = styled('div')`
   display: flex;
   flex-direction: column;
   padding: 4.6875rem 6rem 2.625rem 6rem;
   gap: 2.75rem;

   border-radius: 30px;
   border: 1px solid #ececec;
   background: linear-gradient(
      176deg,
      #252335 26.77%,
      rgba(84, 71, 170, 0.93) 97.4%
   );

   color: #fffefe;
   text-align: center;
   font-family: Bai Jamjuree;
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;

   .box-button {
      display: flex;
      justify-content: space-around;
   }
`
