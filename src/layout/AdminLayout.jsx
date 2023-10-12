import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import { SideBar } from '../components/UI/sidebar/SideBar'

export const AdminLayout = () => {
   return (
      <Container>
         <SideBar />
         <Outlet />
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
`
