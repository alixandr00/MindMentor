import React, { useState, useEffect } from 'react'
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   Skeleton,
   styled,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { internsGetThunk } from '../../../../store/interview/interview.thunk'
import { headerArray } from '../../../../utils/table-students'
import { UiModal } from '../../modal/UiModal'
import { setSelectedInternId } from '../../../../store/interview/interview.slice'

export const InternData = ({ onCloseIternModalHandler }) => {
   const dispatch = useDispatch()
   const handleRowClick = (id) => {
      dispatch(setSelectedInternId(id))
      onCloseIternModalHandler()
   }

   const interns = useSelector((state) => state.interview.getInters)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      dispatch(internsGetThunk())
      const fetchData = () => {
         setTimeout(() => {
            setLoading(false)
         }, 1500)
      }
      fetchData()
   }, [])

   return (
      <UiModal
         open
         width="62.5rem"
         backgroundColor="none"
         onClose={onCloseIternModalHandler}
      >
         <StyledTableContainer component={Paper}>
            <Table>
               <TableHead>
                  <TableRow>
                     <StyledTableCell align="left" colSpan={7}>
                        Total candidates
                     </StyledTableCell>
                  </TableRow>
                  {headerArray.map((headerArray) => (
                     <TableRow>
                        <StyledTableCell>{headerArray.name}</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">
                           Tech Stack
                        </StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                     </TableRow>
                  ))}
               </TableHead>
               <StyleTableBody>
                  {loading ? (
                     <>
                        <StyledTableRowOne>
                           <StyledTableCellForData colSpan={7}>
                              <Skeleton
                                 height={38}
                                 variant="rectangular"
                                 animation="wave"
                              />
                           </StyledTableCellForData>
                        </StyledTableRowOne>
                        <StyledTableRowOne>
                           <StyledTableCellForData colSpan={7}>
                              <Skeleton
                                 height={38}
                                 variant="rectangular"
                                 animation="wave"
                              />
                           </StyledTableCellForData>
                        </StyledTableRowOne>
                        <StyledTableRowOne>
                           <StyledTableCellForData colSpan={7}>
                              <Skeleton
                                 height={38}
                                 variant="rectangular"
                                 animation="wave"
                              />
                           </StyledTableCellForData>
                        </StyledTableRowOne>
                        <StyledTableRowOne>
                           <StyledTableCellForData colSpan={7}>
                              <Skeleton
                                 height={38}
                                 variant="rectangular"
                                 animation="wave"
                              />
                           </StyledTableCellForData>
                        </StyledTableRowOne>
                        <StyledTableRowOne>
                           <StyledTableCellForData colSpan={7}>
                              <Skeleton
                                 height={38}
                                 variant="rectangular"
                                 animation={false}
                              />
                           </StyledTableCellForData>
                        </StyledTableRowOne>
                     </>
                  ) : (
                     interns?.map((el) => (
                        <StyledTableRow
                           key={el.id}
                           onClick={() => handleRowClick(el.id)}
                        >
                           <StyledTableCellForData>
                              <StyledContainerImageName>
                                 <p>{el.name}</p>
                                 <p>{el.surname}</p>
                              </StyledContainerImageName>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              <p>{el.name}</p>
                           </StyledTableCellForData>
                           <StyledTableCellForData
                              align="center"
                              className="red"
                           >
                              <p>{el.tech_stack}</p>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              {el.status}
                           </StyledTableCellForData>
                        </StyledTableRow>
                     ))
                  )}
               </StyleTableBody>
            </Table>
         </StyledTableContainer>
      </UiModal>
   )
}

const StyleTableBody = styled(TableBody)({
   backgroundColor: '#2B2D31',
   border: 'none',

   '& .inprogress': {
      padding: '2px 1px',

      borderRadius: '15px',
      color: 'white',
      border: '1px solid #F9F9F9',
   },
   '& .New': {
      borderRadius: '15px',
      border: '1px solid blue',
      padding: '2px 1px',
      color: 'white',
   },
   '& .Java': {
      borderRadius: '15px',
      border: '1px solid #ffd902',
      padding: '2px 1px',
      color: 'white',
   },
   '& .JavaScript': {
      padding: '2px 1px',
      borderRadius: '15px',
      border: '1px solid gold',
      color: 'white',
   },
   '& .cola': {
      borderRadius: '15px',
      border: '1px solid green',
      padding: '2px 1px',
      color: 'white',
   },
   '& .fanta': {
      borderRadius: '15px',
      border: '1px solid gold',
      padding: '2px 1px',
      color: 'white',
   },
   '& .Python': {
      borderRadius: '15px',
      border: '1px solid  #50BF69',
      padding: '2px 1px',
      color: 'white',
   },
   '& .ProjectManager': {
      borderRadius: '15px',
      border: '1px solid  #4169E1',
      padding: '2px 1px',
      color: 'white',
   },
})

const StyledTableContainer = styled(TableContainer)`
   width: 100%;
   border-radius: 10px;
   margin-top: 2rem;
`
const StyledTableRowOne = styled(TableRow)`
   &:nth-child(even) {
      width: 100px;
      background-color: #1a227e1a;
   }
`
const StyledTableRow = styled(TableRow)`
   &:nth-of-type(even) {
      width: 100px;
   }
   border: none;
   :hover {
      background: linear-gradient(
         to bottom,
         rgba(84, 71, 170, 0.93) 2.33%,
         rgba(0, 0, 0, 0) 181.49%
      );
   }
`
const StyledTableCell = styled(TableCell)`
   font-weight: 500;
   font-family: 'Roboto', sans-serif;
   padding: 15px 8px 15px 20px;
   font-size: 1rem;
   color: #fdfdfd;
   background-color: black;
`
const StyledTableCellForData = styled(TableCell)`
   padding: 20px 8px 8px 20px;
   color: white;
   font-size: 1rem;
   border: none;
`

const StyledContainerImageName = styled('div')`
   display: flex;
   align-items: center;
   gap: 10px;
`
