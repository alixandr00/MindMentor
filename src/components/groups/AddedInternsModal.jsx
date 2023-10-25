import React from 'react'
import { styled } from '@mui/material'
import { TableStudents } from '../UI/table/TableStudents'
import { array, headerArray } from '../../utils/table-students'
import { UiModal } from '../UI/modal/UiModal'

export const AddedInternsModal = ({ openModal, oncloseModal }) => {
   return (
      <UiModal open={openModal} onClose={oncloseModal}>
         <Container>
            <TableStudents array={array} headerArray={headerArray} />
         </Container>
      </UiModal>
   )
}
const Container = styled('div')({
   width: '70rem',
   height: '40rem',
   background: 'black',
   padding: '0',
})
