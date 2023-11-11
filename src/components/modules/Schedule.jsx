import React, { useState } from 'react'
import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { TableInterviow } from '../UI/table/TableInterviow'
import {
   arrayInterviow,
   headerArrayInterview,
} from '../../utils/table-students'
import { NewInterviews } from '../UI/table/NewTableInterviows'

export const Schedule = () => {
   const [openDeleteModal, setOpenDeleteModal] = useState(false)
   const [selectedValue, setSelectedValue] = useState('All')

   const onOpenDeleteModal = () => {
      setOpenDeleteModal(true)
   }
   const onCloseDeleteModal = () => {
      setOpenDeleteModal(false)
   }

   return (
      <Container>
         <NewInterviews
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            openDeleteModal={openDeleteModal}
            onCloseDeleteModal={onCloseDeleteModal}
         >
            <TableInterviow
               selectedValue={selectedValue}
               onOpenDeleteModal={onOpenDeleteModal}
               array={arrayInterviow}
               headerArray={headerArrayInterview}
            />
         </NewInterviews>
         <Outlet />
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
`
