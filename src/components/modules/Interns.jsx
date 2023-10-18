import styled from '@emotion/styled'
import React from 'react'
import { HelloSuperAdmin } from '../Interns/HelloSuperAdmin'
import { TableStudents } from '../UI/table/TableStudents'
import { array, headerArray } from '../../utils/table-students'

export const Interns = () => {
   return (
      <Container>
         <div>
            <HelloSuperAdmin>
               <TableStudents array={array} headerArray={headerArray} />
            </HelloSuperAdmin>
         </div>
      </Container>
   )
}

const Container = styled('div')`
   width: 100%;
`
