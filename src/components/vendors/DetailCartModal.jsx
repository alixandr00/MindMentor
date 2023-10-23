import React from 'react'
import { styled } from '@mui/material'
import { ReactComponent as Square } from '../../assets/icons/Square Arrow Right Up.svg'
import { UiModal } from '../UI/modal/UiModal'
import { DateOfCartDetail } from '../UI/dateOfCartDetail/DateOfCartDetail'
import { ReactComponent as Arrow } from '../../assets/icons/arrow-down.svg'

export const DetailCartModal = ({ onCloseDetailCarthandler }) => {
   return (
      <Modal
         width="31.75rem"
         height="34.5625rem"
         borderRadius="0.625rem"
         backgroundColor="rgba(84, 71, 170, 0.93)"
         open
         onClose={onCloseDetailCarthandler}
      >
         <Childe>
            <Title>JavaScript Developer</Title>
            <Arrow onClick={onCloseDetailCarthandler} />
         </Childe>
         <BlockArrow>
            <Square />
            <p>Senior</p>
         </BlockArrow>
         <DateOfCartDetail />
         <Desc>Описание</Desc>
         <Description>
            - Знание принципов ООП, шаблонов проектирования, SOLID; - C#, .NET
            CORE 3.1 и выше, CORE MVC, WebAPi,Razor Pages,Entity Framework
            Сore,LINQ, SignalR,Automapper - Javascript, Vanila JS,
            jQuery,HTML,CSS - будет плюсом знание frontend фреймворка (React,Vue
            JS,Angular) - RabbitMq,Linux, Git, REST,SOAP, oauth 2.0, identity
            server 4 - Postgres SQL, Mongo DB Профессиональные навыки C#
         </Description>
      </Modal>
   )
}

const Modal = styled(UiModal)`
   border: 1px solid #fff;
   padding: 0 1rem 0 2.56rem;
`
const Title = styled('p')`
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
`
const BlockArrow = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.3rem;
   margin-top: 0.69rem;
   p {
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
   }
`

const Desc = styled('p')`
   width: 25.625rem;
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
`
const Description = styled('p')`
   width: 25.625rem;
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
`
const Childe = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 1.19rem;
`
