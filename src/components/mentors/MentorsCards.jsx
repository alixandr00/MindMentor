import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { GmailIcon, PhoneIcon } from '../../assets/icons'
import { getMentors } from '../../store/mentors/mentor.thunk'
import { MentorResumeModal } from './MentorResumeModal'

export const MentorsCards = () => {
   const dispatch = useDispatch()
   const { mentorData } = useSelector((state) => state.mentor)

   useEffect(() => {
      dispatch(getMentors())
   }, [])

   const db = false

   return (
      <Container>
         {mentorData?.map((mentor) => (
            <ContainerCards key={mentor.id}>
               <MentorNameText>
                  {mentor.first_name} {mentor.last_name}
               </MentorNameText>
               <MainWrapper>
                  <MentorTexts>{mentor.work_experiance}JavaScript</MentorTexts>
                  <MainContainers>
                     <PhoneIcon />
                     <MentorTexts>{mentor.phone_number}</MentorTexts>
                  </MainContainers>
                  <MainContainers>
                     <GmailIcon />
                     <MentorTexts>{mentor.email}</MentorTexts>
                  </MainContainers>
               </MainWrapper>
            </ContainerCards>
         ))}

         {db && <MentorResumeModal />}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   marginTop: '2rem',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '2rem',
   maxHeight: '67vh',
   overflowY: 'auto',
   scrollbarWidth: 'thin',
   scrollbarColor: ' #b3b3b30 transparent',
   '&::-webkit-scrollbar ': {
      width: '0.3rem',
   },
   '&::-webkit-scrollbar-track': {
      backgroundColor: ' #fff white',
   },
   '&::-webkit-scrollbar-thumb ': {
      backgroundColor: ' #fff',
      borderRadius: '0.25rem',
   },

   padding: '0.5rem',
}))

const ContainerCards = styled('div')(() => ({
   width: '19.2vw',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   transition: 'transform 0.3s, background 0.3s',
   padding: '26px 32px',

   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',
      transform: 'scale(1.05)',
   },

   color: '#FFF',
   fontFamily: 'Bai Jamjuree',
   fontSize: '13px',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',

   cursor: 'pointer',
}))

const MentorNameText = styled('p')({
   color: '#FFF',
   fontSize: '18px',
   fontWeight: 500,
   fontFamily: 'Bai Jamjuree',
   textAlign: 'center',
   margin: '0',
})

const MainContainers = styled('div')({
   display: 'flex',
   gap: '0.25rem',
   alignItems: 'center',
})

const MentorTexts = styled('p')({
   color: '#ECECEC',

   fontSize: '1rem',
   fontWeight: 500,
})

const MainWrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.52rem',
   margin: '0',
   marginTop: '1.37rem',
})
