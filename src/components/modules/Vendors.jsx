import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import { VendorsCards } from '../vendors/VendorsCards'
import { NewVendors } from '../vendors/NewVendors'

export const Vendors = () => {
   return (
      <NewVendors>
         <Container>
            <Outlet />
            <div>
               <VendorsCards />
            </div>
         </Container>
      </NewVendors>
   )
}
const Container = styled('div')`
   display: flex;
   gap: 0.81rem;
`
