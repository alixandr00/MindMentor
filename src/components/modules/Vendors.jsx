import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import { VendorsCards } from '../vendors/VendorsCards'
import { NewVendors } from '../vendors/NewVendors'

export const Vendors = () => {
   const [showButton, setShowButton] = useState(false)

   const onOpenShowButton = () => {
      setShowButton(true)
   }
   // const onCloseShowButton = () => {
   //    setShowButton(false)
   // }
   return (
      <NewVendors showButton={showButton}>
         <Container>
            <Outlet />
            <div>
               <VendorsCards onOpenShowButton={onOpenShowButton} />
            </div>
         </Container>
      </NewVendors>
   )
}
const Container = styled('div')`
   display: flex;
   gap: 0.81rem;
`
