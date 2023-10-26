import React, { useState } from 'react'
import { styled } from '@mui/material'
import { TableInterviow } from '../UI/table/TableInterviow'
import {
   arrayInterviow,
   headerArrayInterview,
} from '../../utils/table-students'
import { NewInterviews } from '../UI/table/NewTableInterviows'

export const Schedule = () => {
   const [openDeleteModal, setOpenDeleteModal] = useState(false)

   const onOpenDeleteModal = () => {
      setOpenDeleteModal(true)
   }
   const onCloseDeleteModal = () => {
      setOpenDeleteModal(false)
   }
   return (
      <Container>
         <NewInterviews
            openDeleteModal={openDeleteModal}
            onCloseDeleteModal={onCloseDeleteModal}
         >
            <TableInterviow
               onOpenDeleteModal={onOpenDeleteModal}
               array={arrayInterviow}
               headerArray={headerArrayInterview}
            />
         </NewInterviews>
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
`
