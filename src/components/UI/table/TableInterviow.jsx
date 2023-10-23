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
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteicon.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/editIcon.svg'
import { ReactComponent as NextIcon } from '../../../assets/icons/NextIcon.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/PrevIcon.svg'
import ProfileImage from '../../../assets/images/profileImage.jpg'

export const TableInterviow = ({ array, headerArray }) => {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [currentPage, setCurrentPage] = useState(1)

   useEffect(() => {
      const fetchData = () => {
         setTimeout(() => {
            // Simulated data
            const mockData = array
            setData(mockData)
            setLoading(false)
         }, 1500) // Simulated delay of 2 seconds
      }
      fetchData()
   }, [])

   const recordsPerPage = 5
   const lastIndex = currentPage * recordsPerPage
   const firstIndex = lastIndex - recordsPerPage
   const records = data.slice(firstIndex, lastIndex)
   const npage = Math.ceil(data.length / recordsPerPage)

   function prevPage() {
      setLoading(true) // Set loading state to true when starting the loading process
      setTimeout(() => {
         if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
         }
         setLoading(false) // Set loading state to false after loading is done
      }, 500)
   }

   function nextPage() {
      setLoading(true) // Set loading state to true when starting the loading process
      setTimeout(() => {
         if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
         }
         setLoading(false) // Set loading state to false after loading is done
      }, 500)
   }

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
                     records.map((item) => (
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
                                 <DeleteIcon />
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
                     <IconButton
                        onClick={() => prevPage()}
                        disabled={currentPage === 1}
                     >
                        <PrevIcon />
                        <StyledSpan>Prev</StyledSpan>
                     </IconButton>
                  </li>

                  <li>
                     <IconButton
                        disabled={currentPage === npage}
                        onClick={() => nextPage()}
                     >
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
`
const StyledTableRowOne = styled(TableRow)`
   &:nth-child(even) {
      width: 100%;
      background-color: #1a227e1a;
   }
`
const StyledTableRow = styled(TableRow)`
   &:nth-of-type(even) {
      width: 100%;
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
