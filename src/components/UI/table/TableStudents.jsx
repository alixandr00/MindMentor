/* eslint-disable camelcase */
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
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as History } from '../../../assets/icons/History.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteicon.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/editIcon.svg'
import { ReactComponent as CommentIcon } from '../../../assets/icons/Comment.svg'
import { ReactComponent as NextIcon } from '../../../assets/icons/NextIcon.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/PrevIcon.svg'
import { fetchInterns } from '../../../store/interns/internsThunk'
import { Loading } from '../loading/Loading'

export const TableStudents = ({ headerArray, onOpenPayModalHandler }) => {
   const dispatch = useDispatch()

   const interns = useSelector((state) => state.interns.interns)
   const loading = useSelector((state) => state.interns.isLoading)
   const error = useSelector((state) => state.interns.error)
   const [data, setData] = useState([])
   const [loadings, setLoadings] = useState(true)
   const [currentPage, setCurrentPage] = useState(1)

   const navigate = useNavigate()
   useEffect(() => {
      const fetchData = async () => {
         dispatch(fetchInterns())
      }
      fetchData()
   }, [dispatch])

   useEffect(() => {
      if (interns) {
         setData(interns)
      }

      setLoadings(false)
   }, [interns])

   const recordsPerPage = 5
   const lastIndex = currentPage * recordsPerPage
   const firstIndex = lastIndex - recordsPerPage
   const records = data?.slice(firstIndex, lastIndex)
   const dd = data?.length
   const npage = Math.ceil(dd / recordsPerPage)

   if (error) {
      return <div>Error: {error}</div>
   }

   function prevPage() {
      setLoadings(true)
      setTimeout(() => {
         if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
         }
         setLoadings(false)
      }, 1500)
   }

   function nextPage() {
      setLoadings(true)
      setTimeout(() => {
         if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
         }
         setLoadings(false)
      }, 1500)
   }
   const onOpenModalHandler = (e, id) => {
      navigate(`details/${id}`)
   }

   return (
      <StyledContent>
         {loading && <Loading />}
         <StyledTableContainer component={Paper}>
            <Table>
               <TableHead>
                  <TableRow>
                     <StyledTableCell align="left" colSpan={7}>
                        All interns
                     </StyledTableCell>
                  </TableRow>
                  {headerArray?.map((headerArray) => (
                     <TableRow>
                        <StyledTableCell>{headerArray.name}</StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.group}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.techStack}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.status}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.mentor}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.pay}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {headerArray.action}
                        </StyledTableCell>
                     </TableRow>
                  ))}
               </TableHead>
               <StyleTableBody>
                  {loadings ? (
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
                     records?.map((intern) => (
                        <StyledTableRow key={intern.id}>
                           <StyledTableCellForData>
                              <p
                                 className="internName"
                                 onClick={(e) => {
                                    onOpenModalHandler(
                                       e.preventDefault(),
                                       intern?.id
                                    )
                                 }}
                              >
                                 {intern.name} {intern.surname}
                              </p>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              <p className={intern.surname}>{intern.surname}</p>
                           </StyledTableCellForData>
                           <StyledTableCellForData
                              align="center"
                              className="red"
                           >
                              <p
                                 className={
                                    intern.tech_stack === 'Project Manager'
                                       ? 'ProjectManager'
                                       : intern.tech_stack
                                 }
                              >
                                 {intern.tech_stack}
                              </p>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              <p
                                 className={
                                    intern.status === 'in progress'
                                       ? 'inprogress'
                                       : intern.status
                                 }
                              >
                                 {intern.status}
                              </p>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              {intern.mentor}
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              <IconButton>
                                 <CommentIcon onClick={onOpenPayModalHandler} />
                              </IconButton>
                           </StyledTableCellForData>
                           <StyledTableCellForData align="center">
                              <IconButton>
                                 <EditIcon />
                              </IconButton>
                              <IconButton>
                                 <DeleteIcon />
                              </IconButton>
                              <IconButton>
                                 <History />
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
      </StyledContent>
   )
}

const StyledUl = styled('ul')`
   display: flex;
   gap: 0.8rem;
`
const StyledContent = styled('div')`
   width: 100%;
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
   /* width: 100vh; */
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
   .internName {
      cursor: pointer;
      width: auto;
      width: fit-content;
      :hover {
         text-decoration: underline;
      }
   }
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
