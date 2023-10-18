import React from 'react'
import { styled } from '@mui/material'
import { HelloSuperAdmin } from '../Interns/HelloSuperAdmin'
import { TableInterviow } from '../UI/table/TableInterviow'
import {
   arrayInterviow,
   headerArrayInterview,
} from '../../utils/table-students'

export const Schedule = () => {
   return (
      <Container>
         <HelloSuperAdmin>
            <TableInterviow
               array={arrayInterviow}
               headerArray={headerArrayInterview}
            />
         </HelloSuperAdmin>
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
`
