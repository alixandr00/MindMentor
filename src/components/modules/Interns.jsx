import styled from '@emotion/styled'
import React from 'react'
import { NewInterns } from '../Interns/NewInterns'
import { TableStudents } from '../UI/table/TableStudents'
import { array, headerArray } from '../../utils/table-students'

export const Interns = () => {
   return (
      <Container>
         <NewInterns>
            <TableStudents array={array} headerArray={headerArray} />
         </NewInterns>
      </Container>
   )
}

const Container = styled('div')`
   width: 100%;
`
