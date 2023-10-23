import styled from '@emotion/styled'
import React from 'react'
import { NewInterns } from '../Interns/NewInterns'
import { TableStudents } from '../UI/table/TableStudents'
import { array, headerArray } from '../../utils/table-students'
import { TabelStudentsDetils } from '../UI/table/TabelStudentsDetails'

export const Interns = () => {
   return (
      <Container>
         <NewInterns>
            <StyledContent>
               <TabelStudentsDetils />
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
`
