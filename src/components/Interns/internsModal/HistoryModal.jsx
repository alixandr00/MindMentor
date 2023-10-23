import React from 'react'
import { styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { UiModal } from '../../UI/modal/UiModal'

export const HistoryModal = ({ onCloseModalHandler }) => {
   return (
      <Modal width="32.375rem" height="43.0625rem" open>
         <IconContainer onClick={onCloseModalHandler}>
            <CloseIconContainer>
               <StyldeIcon />
            </CloseIconContainer>
         </IconContainer>
         <Magazine>Activity log of Keldibekova Begimay</Magazine>
         <Date>Today</Date>
         <StatusContainer>
            <StatusBlock>
               <StatusTitle>Status changed from</StatusTitle>
               <StatusBlockChilde>
                  <Paid>Paid</Paid>
                  <p>to</p>
                  <Finished>Finished</Finished>
               </StatusBlockChilde>
               <Time>12:00</Time>
            </StatusBlock>

            <CurrentDate>23.12.23</CurrentDate>

            <RegistratedBlock>
               <RegTitle>Intern has been registrated</RegTitle>
               <Time>12:00</Time>
            </RegistratedBlock>
            <RegistratedBlock>
               <Title>Intern has been added to group</Title>
               <Fanta>Fanta</Fanta>
               <Times>12:00</Times>
            </RegistratedBlock>
         </StatusContainer>
      </Modal>
   )
}

const Modal = styled(UiModal)`
   border: 1px solid #fff;
   background: linear-gradient(
      176deg,
      #252335 26.77%,
      rgba(84, 71, 170, 0.93) 97.4%
   );
`

const Magazine = styled('p')`
   color: #f9f9f9;
   font-size: 1.5rem;
   font-weight: 500;
`
const Date = styled('p')`
   margin-top: 0.5rem;
   color: #fff;
   font-size: 1rem;
   font-weight: 500;
`

const StatusContainer = styled('div')`
   display: flex;
   gap: 2rem;
   margin-top: 1rem;
   flex-direction: column;
   align-items: center;
`
const StatusBlock = styled('div')`
   width: 22.5rem;
   height: 6rem;
   border-radius: 1.25rem;
   border: 1px solid #f9f9f9;
   background: #2b2d31;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const Paid = styled('p')`
   display: flex;
   width: 6.82125rem;
   height: 1.16669rem;
   padding: 0.25rem 1.875rem;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 0.75rem;
   border-radius: 0.9375rem;
   border: 0.5px solid rgba(80, 191, 105, 0.9);
`
const Finished = styled('p')`
   display: flex;
   width: 6.82125rem;
   height: 1.16669rem;
   padding: 0.25rem 1.875rem;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 0.75rem;
   border-radius: 0.9375rem;
   border: 0.5px solid rgba(80, 191, 105, 0.9);
`
const StatusBlockChilde = styled('div')`
   display: flex;
   gap: 1.8rem;
   margin-top: 0.31rem;
   margin-left: 0.69rem;
   p {
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
   }
`
const StatusTitle = styled('p')`
   margin-top: 0.75rem;
   margin-left: 0.69rem;
   color: #fff;
   font-size: 1rem;
   font-weight: 500;
`
const RegistratedBlock = styled('div')`
   position: relative;
   width: 22.5rem;
   height: 4.8125rem;
   border-radius: 1.25rem;
   border: 1px solid #f9f9f9;
   background: #2b2d31;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const Fanta = styled('p')`
   display: flex;
   position: relative;
   left: 70px;
   bottom: 16px;
   width: 6.82125rem;
   height: 1.16669rem;
   padding: 0.25rem 1.875rem;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 0.9375rem;
   border: 0.5px solid #e5ff47;

   color: #fff;
   font-size: 1rem;
   font-weight: 500;
`
const Title = styled('p')`
   width: 200px;
   margin-top: 1.12rem;
   margin-left: 1.31rem;
   color: #fff;
   font-size: 1rem;
   font-weight: 500;
`
const RegTitle = styled('p')`
   margin-top: 0.94rem;
   margin-left: 0.62rem;
   color: #fff;
   font-size: 1rem;
   font-weight: 500;
`
const Time = styled('p')`
   color: #8b8b8b;
   font-size: 0.875rem;
   font-weight: 500;
   margin-top: 1rem;
   margin-left: 19.12rem;
`
const Times = styled('p')`
   position: absolute;
   top: 3.37rem;
   left: 19.12rem;
   color: #8b8b8b;
   font-size: 0.875rem;
   font-weight: 500;
`
const CurrentDate = styled('p')`
   position: relative;
   right: 12.8125rem;
   color: #fff;
   font-size: 1rem;
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
