import React from 'react'
import { styled } from '@mui/material'
import { vendorsCards } from '../../utils/general'
import { GmailIcon, LocationIcon, PhoneIcon } from '../../assets/icons'

export const VendorsCards = () => {
   return (
      <Container>
         {vendorsCards.map((card) => (
            <ContainerCards key={card.id}>
               <CardHead>
                  <ImageCards imageUrl={card.img} />
                  <CompanyName>{card.companyName}</CompanyName>
               </CardHead>
               <CardMain>
                  <MainContainers>
                     <GmailIcon />
                     <CardsTexts>{card.gmail}</CardsTexts>
                  </MainContainers>
                  <MainContainers>
                     <PhoneIcon />
                     <CardsTexts>{card.phone}</CardsTexts>
                  </MainContainers>
                  <MainContainers>
                     <LocationIcon />
                     <CardsTexts>{card.address}</CardsTexts>
                  </MainContainers>
               </CardMain>
            </ContainerCards>
         ))}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '1.20rem',
   marginTop: '2rem',
   maxHeight: '30rem',
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
   padding: '1rem 1rem',
   transition: 'transform 0.3s, background 0.3s',
   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',
      transform: 'scale(1.05)',
   },
}))
const CardHead = styled('div')(() => ({
   display: 'flex',
   gap: '0.44rem',
   alignItems: 'center',
}))
const ImageCards = styled('div')((props) => ({
   width: '2.4375rem',
   height: '2.4375rem',
   borderRadius: '2.4375rem',
   background: `url(${props.imageUrl}) center/cover no-repeat`,
}))

const CompanyName = styled('div')(() => ({
   color: '#FFF',
   fontSize: '1rem',
   fontWeight: '600',
}))
const CardMain = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.63rem',
   marginTop: '0.56rem',
})
const MainContainers = styled('div')({
   display: 'flex',
   gap: '0.25rem',
   alignItems: 'center',
})
const CardsTexts = styled('div')({
   fontSize: '0.8125rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   color: '#FFF',
})
