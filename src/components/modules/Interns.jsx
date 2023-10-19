import styled from '@emotion/styled'
import React, { useState } from 'react'
import { HelloSuperAdmin } from '../Interns/HelloSuperAdmin'
import { TableStudents } from '../UI/table/TableStudents'
import { array, headerArray } from '../../utils/table-students'

export const Interns = () => {
   const [openPayModal, setOpenPayModal] = useState(false)

   const onOpenPayModalHandler = () => {
      setOpenPayModal(true)
   }
   const onClosePayModalHandler = () => {
      setOpenPayModal(false)
   }
   return (
      <Container>
         <div>
            <HelloSuperAdmin
               onClosePayModalHandler={onClosePayModalHandler}
               openPayModal={openPayModal}
            >
               <TableStudents
                  onOpenPayModalHandler={onOpenPayModalHandler}
                  array={array}
                  headerArray={headerArray}
               />
            </HelloSuperAdmin>
         </div>
      </Container>
   )
}

const Container = styled('div')`
   width: 100%;
`
