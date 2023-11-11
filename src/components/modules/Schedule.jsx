import React from 'react'
import { styled } from '@mui/material'
import { TableInterviow } from '../UI/table/TableInterviow'
import {
   arrayInterviow,
   headerArrayInterview,
} from '../../utils/table-students'
import { NewInterviews } from '../UI/table/NewTableInterviows'

export const Schedule = () => {
   return (
      <Container>
         <NewInterviews>
            <TableInterviow
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
