import React, { useState } from 'react'
import { styled } from '@mui/material'
import { VendorsCards } from '../vendors/VendorsCards'
import { NewVendors } from '../vendors/NewVendors'
import { DetailCart } from '../vendors/DetailCart'

export const Vendors = () => {
   const [onOpening, setOnOpening] = useState(false)
   const onOpeningHandler = () => {
      setOnOpening(true)
   }
   const onClosingHandler = () => {
      setOnOpening(false)
   }
   return (
      <NewVendors>
         <Container>
            {onOpening ? (
               <DetailCart onClosingHandler={onClosingHandler} />
            ) : (
               ''
            )}
            <VendorsCards onOpeningHandler={onOpeningHandler} />
         </Container>
      </NewVendors>
   )
}
const Container = styled('div')`
   display: flex;
   gap: 0.81rem;
`
