import React from 'react'
import { styled } from '@mui/material'
import { vendorsCards } from '../../../utils/general'

export const VendorsCards = () => {
   return (
      <Container>
         {vendorsCards.map((card) => (
            <ContainerCards key={card.id}>
               <CardHead>
                  <ImageCards imageUrl={card.img} />
                  <CompanyName>{card.companyName}</CompanyName>
               </CardHead>
            </ContainerCards>
         ))}
      </Container>
   )
}

const Container = styled('div')(() => ({
   backgroundColor: 'red',
   width: '100%',
   height: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '1.19rem',
}))
const ContainerCards = styled('div')(() => ({
   width: '14.375rem',
   height: '10.4375rem',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   padding: '1rem 1rem',
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
