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
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteicon.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/editIcon.svg'
import { ReactComponent as NextIcon } from '../../../assets/icons/NextIcon.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/PrevIcon.svg'
import {
   deleteInterviewThunk,
   interviewAllThunk,
   interviewDetailThunk,
} from '../../../store/interview/interview.thunk'
import { EditInterviewModal } from './interviewModal/EditIntervieModal'
import { DeleteModal } from '../deleteModal/DeleteModal'
import { showSnackbar } from '../snackbar/Snackbar'

export const TableInterviow = ({ selectedValue, headerArray }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const getInterviews = useSelector((state) => state.interview.getInterviewAll)

   const [currentPage, setCurrentPage] = useState(1)
   const itemsPerPage = 5

   const filteredData = getInterviews?.filter((interview) => {
      return interview.intern.length > 0
   })

   const filteredInterviewsData = filteredData?.filter((interview) => {
      return interview.intern.some(
         (intern) => intern.tech_stack === selectedValue
      )
   })

   const filteredInterviews =
      selectedValue !== 'All' ? filteredInterviewsData : filteredData

   const [loading, setLoading] = useState(true)
   const [openModal, setOpenModal] = useState(false)
   const [openDeleteModal, setOpenDeleteModal] = useState(false)
   const [getId, setGetId] = useState(null)

   const onOpenModalHandler = () => {
      setOpenModal(true)
   }
   const onCloseModalHandler = () => {
      setOpenModal(false)
   }
   const onOpenDeleteModals = () => {
      setOpenDeleteModal(true)
   }
   const onCloseDeleteModal = () => {
      setOpenDeleteModal(false)
   }

   const deleteInterviewHandler = () => {
      dispatch(deleteInterviewThunk(getId))
         .unwrap()
         .then(() => {
            dispatch(interviewAllThunk())
            onCloseDeleteModal()
            showSnackbar({
               message: 'Успешно удалено!',
               severity: 'success',
            })
         })
         .catch(() => {
            showSnackbar({
               message: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.',
               severity: 'warning',
            })
         })
   }

   useEffect(() => {
      dispatch(interviewAllThunk())
      const fetchData = () => {
         setTimeout(() => {
            setLoading(false)
         }, 1500)
      }
      fetchData()
   }, [])

   const startIndex = (currentPage - 1) * itemsPerPage
   const endIndex = startIndex + itemsPerPage
   const currentItems = filteredInterviews.slice(startIndex, endIndex)

   // const totalPages = Math.ceil(filteredInterviews.length / itemsPerPage)

   // const goToPage = (page) => {
   //    setCurrentPage(page)
   // }
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
                     currentItems?.map((el) => {
                        return el.intern.map((item) => (
                           <StyledTableRow key={el.id}>
                              <StyledTableCellForData
                                 onClick={() => navigate(`detail/${el.id}`)}
                              >
                                 <StyledContainerImageName>
                                    <p>{item.name}</p>
                                 </StyledContainerImageName>
                              </StyledTableCellForData>
                              <StyledTableCellForData
                                 onClick={() => navigate(`detail/${el.id}`)}
                                 align="center"
                              >
                                 <p>{item.email}</p>
                              </StyledTableCellForData>
                              <StyledTableCellForData
                                 onClick={() => navigate(`detail/${el.id}`)}
                                 align="center"
                                 className="red"
                              >
                                 <p
                                    className={
                                       item.tech_stack === 'Project Manager'
                                          ? 'ProjectManager'
                                          : item.tech_stack
                                    }
                                 >
                                    {item.tech_stack}
                                 </p>
                              </StyledTableCellForData>
                              <StyledTableCellForData
                                 onClick={() => navigate(`detail/${el.id}`)}
                                 align="center"
                              >
                                 <p>{el.start_time}</p>
                              </StyledTableCellForData>
                              <StyledTableCellForData
                                 onClick={() => navigate(`detail/${el.id}`)}
                                 align="center"
                              >
                                 {el.date}
                              </StyledTableCellForData>
                              <StyledTableCellForData
                                 onClick={() => navigate(`detail/${el.id}`)}
                                 align="center"
                              >
                                 {el.location}
                              </StyledTableCellForData>
                              <StyledTableCellForDatas align="center">
                                 <IconButton>
                                    <EditIcon
                                       onClick={() => {
                                          onOpenModalHandler()
                                          dispatch(interviewDetailThunk(el.id))
                                       }}
                                    />
                                 </IconButton>
                                 <IconButton>
                                    <DeleteIcon
                                       onClick={() => {
                                          onOpenDeleteModals()
                                          setGetId(el.id)
                                       }}
                                    />
                                 </IconButton>
                              </StyledTableCellForDatas>
                           </StyledTableRow>
                        ))
                     })
                  )}
               </StyleTableBody>
            </Table>
         </StyledTableContainer>
         {(currentItems.length >= itemsPerPage || currentPage > 1) && (
            <StyledContainer>
               <nav>
                  <StyledUl>
                     {currentPage > 1 && (
                        <li>
                           <IconButton
                              onClick={() =>
                                 setCurrentPage((prevPage) => prevPage - 1)
                              }
                              disabled={currentPage === 1}
                           >
                              <PrevIcon />
                              <StyledSpan>Prev</StyledSpan>
                           </IconButton>
                        </li>
                     )}
                     {currentItems.length >= itemsPerPage && (
                        <li>
                           <IconButton
                              onClick={() =>
                                 setCurrentPage((prevPage) => prevPage + 1)
                              }
                              disabled={endIndex >= filteredInterviews.length}
                           >
                              <StyledSpan>Next</StyledSpan>
                              <NextIcon />
                           </IconButton>
                        </li>
                     )}
                  </StyledUl>
               </nav>
            </StyledContainer>
         )}

         {openModal ? <EditInterviewModal onClose={onCloseModalHandler} /> : ''}
         {openDeleteModal ? (
            <DeleteModal
               onClick={deleteInterviewHandler}
               unClick={onCloseDeleteModal}
            />
         ) : (
            ''
         )}
      </>
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
const StyledTableCellForDatas = styled(TableCell)`
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
const StyledSpan = styled('span')`
   font-size: 0.9rem;
   color: #ffff;
`
const StyledUl = styled('ul')`
   display: flex;
   gap: 0.8rem;
`
const StyledContainer = styled('div')`
   display: flex;
   justify-content: end;
   margin-right: 15px;
`
