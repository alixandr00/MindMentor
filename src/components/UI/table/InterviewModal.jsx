/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import { UiModal } from '../modal/UiModal'
import { interviewDetailThunk } from '../../../store/interview/interview.thunk'

export const InterviewModal = () => {
   const dispatch = useDispatch()
   const param = useParams()
   const navigate = useNavigate()
   const {
      name_interview,
      date,
      start_time,
      end_time,
      location,
      descriptions,
   } = useSelector((state) => state.interview.getInterviewDetail)

   const onPrevHandler = () => {
      navigate(-1)
   }

   useEffect(() => {
      dispatch(interviewDetailThunk(param.id))
   }, [])
   return (
      <Modal
         open
         width="31.75rem"
         height="34.5625rem"
         backgroundColor="rgba(84, 71, 170, 0.93)"
         borderRadius="0.625rem"
      >
         <CloseIconBlock onClick={onPrevHandler}>
            <CloseIcon />
         </CloseIconBlock>
         <Title>{name_interview}</Title>
         <LocDate>
            <LocationOnIconBlock>
               <LocationOnIcon />
               <p>{location}</p>
            </LocationOnIconBlock>
            <CalendarBlock>
               <CalendarMonthIcon />
               <p>{date}</p>
            </CalendarBlock>
         </LocDate>
         <TimeContainer>
            <div>
               <TimeTitle>Start time:</TimeTitle>
               <DescTime>{start_time}</DescTime>
            </div>
            <div>
               <TimeTitle>End time:</TimeTitle>
               <DescTime>{end_time}</DescTime>
            </div>
         </TimeContainer>
         <DescBlock>
            <p>Описание:</p>
            <p>{descriptions}</p>
         </DescBlock>
      </Modal>
   )
}

const Modal = styled(UiModal)`
   border: 1px solid #fff;
   padding: 0 1.58rem 0 2.58rem;
`
const Title = styled('p')`
   color: #fff;
   font-size: 1.5rem;
   font-weight: 600;
`
const TimeContainer = styled('div')`
   display: flex;
   width: 48%;
   justify-content: space-between;
   margin-top: 1rem;
`
const TimeTitle = styled('p')`
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
`
const DescTime = styled('p')`
   text-align: center;
   color: #fff;
   font-size: 0.75rem;
   font-weight: 600;
`
const LocDate = styled('p')`
   display: flex;
   width: 50%;
   justify-content: space-between;
   margin-top: 1rem;
   p {
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
   }
`
const DescBlock = styled('p')`
   margin-top: 2.25rem;
   p {
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
   }
`
const LocationOnIconBlock = styled('div')`
   display: flex;
   align-items: center;
   p {
      margin-left: 0.25rem;
   }
   .MuiSvgIcon-root {
      color: #fff;
   }
`
const CalendarBlock = styled('div')`
   display: flex;
   align-items: center;
   p {
      margin-left: 0.25rem;
   }
   .MuiSvgIcon-root {
      color: #fff;
   }
`
const CloseIconBlock = styled('div')`
   display: flex;
   justify-content: flex-end;
   margin-top: 1rem;
   cursor: pointer;
   .MuiSvgIcon-root {
      color: #fff;
   }
`
