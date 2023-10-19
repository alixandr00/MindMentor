import React from 'react'
import { styled } from '@mui/material'
import { groupsCards } from '../../utils/general'
import { NotesIcon, PeopleIcon, ProgressIcon } from '../../assets/icons'

export const GroupsCards = () => {
   return (
      <Container>
         {groupsCards.map((card) => (
            <ContainerCards key={card.id}>
               <CompanyNameText>{card.companyName}</CompanyNameText>
               <WrapperMain>
                  <MainContainers>
                     <IconWrapper>
                        <ProgressIcon />
                     </IconWrapper>
                     <CardTexts>{card.progress}</CardTexts>
                  </MainContainers>
                  <MainContainers>
                     <IconWrapper>
                        <PeopleIcon />
                     </IconWrapper>
                     <CardTexts>{card.peoples}</CardTexts>
                  </MainContainers>
                  <MainContainers>
                     <IconWrapper>
                        <NotesIcon />
                     </IconWrapper>
                     <CardTexts>{card.data}</CardTexts>
                  </MainContainers>
               </WrapperMain>
            </ContainerCards>
         ))}
      </Container>
   )
}

const Container = styled('div')(() => ({
   marginTop: '2rem',
   width: '100%',
   // height: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '1.31rem',
   maxHeight: '68vh',
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
}))

const ContainerCards = styled('div')(() => ({
   width: '14.375rem',
   height: '10.4375rem',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   paddingTop: '1.75rem',
   transition: 'transform 0.3s, background 0.3s',
   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',
      transform: 'scale(1.05)',
   },
}))
const CompanyNameText = styled('p')({
   color: '#FFF',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: 500,
   textAlign: 'center',
})

const IconWrapper = styled('div')({
   width: '1.4375rem',
   height: ' 1.4375rem',
   backgroundColor: '#2B2D31',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: '50%',
})

const MainContainers = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '0.38rem',
})

const CardTexts = styled('p')({
   color: '#ECECEC',
   fontSize: '0.8125rem',
   fontStyle: 'normal',
   fontWeight: 500,
   lineHeight: 'normal',
})

const WrapperMain = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.69rem',
   marginTop: '1.37rem',
   paddingLeft: '2.19rem',
})
