import React from 'react'
import { styled } from '@mui/material'
import { mentorsCards } from '../../utils/general'
import { GmailIcon, PhoneIcon } from '../../assets/icons'

export const MentorsCards = () => {
   return (
      <Container>
         {mentorsCards.map((mentor) => (
            <ContainerCards key={mentor.id}>
               <MentorNameText>{mentor.mentorName}</MentorNameText>
               <MainWrapper>
                  <MentorTexts>{mentor.title}</MentorTexts>
                  <MainContainers>
                     <PhoneIcon />
                     <MentorTexts>{mentor.number}</MentorTexts>
                  </MainContainers>
                  <MainContainers>
                     <GmailIcon />
                     <MentorTexts>{mentor.gmailAddress}</MentorTexts>
                  </MainContainers>
               </MainWrapper>
            </ContainerCards>
         ))}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   height: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '1.31rem',
}))

const ContainerCards = styled('div')(() => ({
   width: '14.375rem',
   height: '10.4375rem',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   transition: 'transform 0.3s, background 0.3s',
   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',
      transform: 'scale(1.05)',
   },
}))

const MentorNameText = styled('p')({
   color: '#FFF',
   fontSize: '1rem',
   fontWeight: 500,
   textAlign: 'center',
   marginTop: '1.63rem',
})

const MainContainers = styled('div')({
   display: 'flex',
   gap: '0.25rem',
   alignItems: 'center',
})

const MentorTexts = styled('p')({
   color: '#ECECEC',

   fontSize: '0.8125rem',
   fontWeight: 500,
})

const MainWrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.52rem',
   marginLeft: '2.12rem',
   marginTop: '1.37rem',
})
