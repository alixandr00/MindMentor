import styled from '@emotion/styled'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { NewInterns } from '../Interns/NewInterns'
import { TableStudents } from '../UI/table/TableStudents'
import { array, headerArray } from '../../utils/table-students'
// import { TableStudentsDetails } from '../UI/table/TabelStudentsDetails'

export const Interns = () => {
   return (
      <Container>
         <NewInterns>
            <StyledContent>
               {/* <TableStudentsDetails /> */}
               <Outlet />
               <TableStudents array={array} headerArray={headerArray} />
            </StyledContent>
         </NewInterns>
      </Container>
   )
}

const Container = styled('div')`
   width: 100%;
`

const StyledContent = styled('div')`
   display: flex;
   gap: 1rem;
`
