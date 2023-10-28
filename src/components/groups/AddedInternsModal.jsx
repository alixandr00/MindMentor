import React, { useEffect } from 'react'
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   IconButton,
   styled,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'

import { ReactComponent as History } from '../../assets/icons/History.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteicon.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg'
import { ReactComponent as CommentIcon } from '../../assets/icons/Comment.svg'
import { fetchInterns } from '../../store/interns/internsThunk'
import { UiModal } from '../UI/modal/UiModal'
import { Loading } from '../UI/loading/Loading'

export const AddedInternsModal = ({
   headerArray,
   onOpenPayModalHandler,
   setState,
   state,
   internName,
   internId,
   openModal,
   oncloseModal,
}) => {
   const dispatch = useDispatch()
   const interns = useSelector((state) => state.interns.interns)
   const loading = useSelector((state) => state.interns.isLoading)

   useEffect(() => {
      const fetchData = async () => {
         dispatch(fetchInterns())
      }
      fetchData()
   }, [dispatch])

   const getInternById = (intern) => {
      const fullName = [intern.name, intern.surname].filter(Boolean).join(' ')
      internName.push(fullName)
      internId.push(intern.id)
      state = {
         name: internName,
         internId,
      }
      setState(state)
   }

   return (
      <UiModalStyled open={openModal} onClose={oncloseModal}>
         <IconButtonStyled onClick={oncloseModal}>
            <CloseIconBlock>
               <CloseIcon />
            </CloseIconBlock>
         </IconButtonStyled>
         {loading && <Loading />}
         <StyledContent>
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
                     {interns?.map((intern) => (
                        <StyledTableRow
                           key={intern.id}
                           onClick={() => getInternById(intern)}
                        >
                           <StyledTableCellForData>
                              <p className="internName">
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
                     ))}
                  </StyleTableBody>
               </Table>
            </StyledTableContainer>
         </StyledContent>
      </UiModalStyled>
   )
}
const IconButtonStyled = styled(IconButton)({
   position: 'absolute',
   right: '1.3rem',
   top: '1.3rem',
})
const CloseIconBlock = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 1.5rem;
   height: 1.5rem;
   border: 1px solid #fff;
   border-radius: 5px;
   cursor: pointer;
   .MuiSvgIcon-root {
      width: 1rem;
      color: #fff;
   }
`
const UiModalStyled = styled(UiModal)({
   width: '55rem',
   maxHeight: '40rem',
   minHeight: '40rem',
   backgroundColor: '#1E1F22',
   borderRadius: '0.625rem',
   border: ' 1px solid #FFF',
   scrollbarWidth: 'thin',
   scrollbarColor: ' #b3b3b30 transparent',
   '&::-webkit-scrollbar ': {
      width: '0.2rem',
   },
   '&::-webkit-scrollbar-track': {
      backgroundColor: ' #fff white',
   },
   '&::-webkit-scrollbar-thumb ': {
      backgroundColor: ' #fff',
      borderRadius: '0.25rem',
   },
})

const StyledContent = styled('div')``
const StyleTableBody = styled(TableBody)({
   backgroundColor: '#2B2D31',
   border: 'none',
   '& .css-1e890aq-MuiTableCell-root': {
      fontFamily: 'Bai Jamjuree',
   },

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
   border-radius: 10px;
   margin-top: 2rem;
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
   background-color: #1e1f22;
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
