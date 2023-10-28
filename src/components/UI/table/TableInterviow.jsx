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
   IconButton,
   styled,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteicon.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/editIcon.svg'
import { ReactComponent as NextIcon } from '../../../assets/icons/NextIcon.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/PrevIcon.svg'
import ProfileImage from '../../../assets/images/profileImage.jpg'
import { interviewThunk } from '../../../store/interview/interview.thunk'

export const TableInterviow = ({ headerArray, onOpenDeleteModal }) => {
   const dispatch = useDispatch()
   const getInterviews = useSelector((state) => state.interview.getInterview)
   console.log(getInterviews)

   const [loading, setLoading] = useState(true)

   useEffect(() => {
      dispatch(interviewThunk())
      const fetchData = () => {
         setTimeout(() => {
            setLoading(false)
         }, 1500)
      }
      fetchData()
   }, [])

   return (
      <>
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
                        <StyledTableCell align="center">
                           {headerArray.email}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.techStack}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.interviewTime}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.interviewDate}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.location}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.action}
                        </StyledTableCell>
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
                     getInterviews?.map((item) => (
                        <StyledTableRow key={item.id}>
                           <StyledTableCellForData>
                              <StyledContainerImageName>
                                 <StyledImage
                                    src={
                                       item.image !== 'null'
                                          ? item.image
                                          : ProfileImage
                                    }
                                    alt="photo"
                                 />
                                 <p>{item.name}</p>
                              </StyledContainerImageName>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              <p>{item.email}</p>
                           </StyledTableCellForData>
                           <StyledTableCellForData
                              align="center"
                              className="red"
                           >
                              <p
                                 className={
                                    item.techStack === 'Project Manager'
                                       ? 'ProjectManager'
                                       : item.techStack
                                 }
                              >
                                 {item.techStack}
                              </p>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              <p>{item.time}</p>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              {item.date}
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              {item.location}
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              <IconButton>
                                 <EditIcon />
                              </IconButton>
                              <IconButton>
                                 <DeleteIcon onClick={onOpenDeleteModal} />
                              </IconButton>
                           </StyledTableCellForData>
                        </StyledTableRow>
                     ))
                  )}
               </StyleTableBody>
            </Table>
         </StyledTableContainer>
         <StyledContainer>
            <nav>
               <StyledUl>
                  <li>
                     <IconButton>
                        <PrevIcon />
                        <StyledSpan>Prev</StyledSpan>
                     </IconButton>
                  </li>

                  <li>
                     <IconButton>
                        <StyledSpan>Next</StyledSpan>
                        <NextIcon />
                     </IconButton>
                  </li>
               </StyledUl>
            </nav>
         </StyledContainer>
      </>
   )
}

const StyledUl = styled('ul')`
   display: flex;
   gap: 0.8rem;
`

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

const StyledSpan = styled('span')`
   font-size: 0.9rem;
   color: #ffff;
`

const StyledContainer = styled('div')`
   display: flex;
   justify-content: end;
   margin-right: 15px;
`
const StyledImage = styled('img')`
   width: 40px;
   height: 40px;
   border-radius: 100%;
`

const StyledContainerImageName = styled('div')`
   display: flex;
   align-items: center;
   gap: 10px;
`
