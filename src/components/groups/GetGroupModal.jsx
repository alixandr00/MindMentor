import {
   IconButton,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   styled,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'
import { NotesIcon, ProgressIcon } from '../../assets/icons'
import { UiModal } from '../UI/modal/UiModal'
import { headerArray } from '../../utils/table-students'
import { ReactComponent as CommentIcon } from '../../assets/icons/Comment.svg'
import { ReactComponent as History } from '../../assets/icons/History.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteicon.svg'
import { deleteInternInGroup } from '../../store/groups/groupThunk'
import { DeleteInternsModal } from './DeleteInternsModal'

export const GetGroupModal = ({ openModal, oncloseModal }) => {
   const [deletOpenModal, setDeleteOpenModal] = useState(false)
   const [getInetrnId, setGetIternId] = useState(null)

   const { getGroupId } = useSelector((state) => state.groups)
   const dispatch = useDispatch()

   const deleteInternModalOpenHandler = (internId) => {
      setGetIternId(internId)
      setDeleteOpenModal(true)
   }
   const deleteInternHandler = () => {
      const data = {
         internId: getInetrnId,
         groupId: getGroupId.id,
      }
      dispatch(deleteInternInGroup(data))
   }

   return (
      <UiModalStyled open={openModal} onClose={oncloseModal}>
         <Container>
            <WrapperHead>
               <WrapperTexts>
                  <IconWrapper>
                     <NotesIcon />
                  </IconWrapper>
                  <HeadTexts>
                     {getGroupId.start_date} / {getGroupId.end_date}
                  </HeadTexts>
               </WrapperTexts>
               <WrapperTexts>
                  <IconWrapper>
                     <ProgressIcon />
                  </IconWrapper>
                  <HeadTexts>{getGroupId.status}</HeadTexts>
               </WrapperTexts>
               <div>
                  <GroupName>{getGroupId.name}</GroupName>
               </div>
               <IconButtonStyled onClick={oncloseModal}>
                  <CloseIconBlock>
                     <CloseIcon />
                  </CloseIconBlock>
               </IconButtonStyled>
            </WrapperHead>

            {getGroupId.people?.length > 0 ? (
               <StyledContent>
                  <StyledTableContainer component={Paper}>
                     <Table>
                        <TableHead>
                           <TableRow>
                              <StyledTableCell align="left" colSpan={7}>
                                 Mentor name:{' '}
                                 {getGroupId.mentor
                                    ? getGroupId.mentor
                                    : 'Ментор не назначен'}
                              </StyledTableCell>
                           </TableRow>
                           {headerArray?.map((headerArray) => (
                              <TableRow>
                                 <StyledTableCell>
                                    {headerArray.name}
                                 </StyledTableCell>
                                 <StyledTableCell align="center">
                                    {headerArray.group}
                                 </StyledTableCell>
                                 <StyledTableCell align="center">
                                    {headerArray.techStack}
                                 </StyledTableCell>
                                 <StyledTableCell>
                                    {headerArray.mentor}
                                 </StyledTableCell>
                                 <StyledTableCell align="center">
                                    {headerArray.status}
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
                           {getGroupId.people?.map((intern) => (
                              <StyledTableRow key={intern.id}>
                                 <StyledTableCellForData>
                                    <p className="internName">
                                       {intern.name} {intern.surname}
                                    </p>
                                 </StyledTableCellForData>
                                 <StyledTableCellForData align="center">
                                    <p className={intern.surname}>
                                       {intern.surname}
                                    </p>
                                 </StyledTableCellForData>
                                 <StyledTableCellForData
                                    align="center"
                                    className="red"
                                 >
                                    <p
                                       className={
                                          intern.tech_stack ===
                                          'Project Manager'
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
                                       <CommentIcon />
                                    </IconButton>
                                 </StyledTableCellForData>
                                 <StyledTableCellForData align="center">
                                    <IconButton
                                       onClick={() =>
                                          deleteInternModalOpenHandler(
                                             intern.id
                                          )
                                       }
                                    >
                                       <DeleteIcon />
                                    </IconButton>
                                    {deletOpenModal ? (
                                       <DeleteInternsModal
                                          onOpen={deletOpenModal}
                                          onCloseModal={setDeleteOpenModal}
                                          deleteInternById={deleteInternHandler}
                                       />
                                    ) : null}
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
            ) : (
               <TextNoPeople>No peoples .</TextNoPeople>
            )}
         </Container>
      </UiModalStyled>
   )
}
const GroupName = styled('p')({
   color: ' #FFF',
   fontSize: '1.2rem',
   fontWeight: 600,
})
const TextNoPeople = styled('p')({
   color: ' #FFF',
   fontSize: '1.2rem',
   fontWeight: 600,
   display: 'flex',
   justifyContent: 'center',
   marginTop: '5rem',
})
const UiModalStyled = styled(UiModal)({
   borderRadius: ' 1.25rem',
   border: '1px solid #F9F9F9',
})
const IconButtonStyled = styled(IconButton)({
   position: 'absolute',
   right: '0.5rem',
   top: '0',
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
const Container = styled('div')({
   width: '62.5rem',
   maxHeight: '35rem',
   backgroundColor: '#1E1F22',
   borderRadius: ' 1.25rem',
   border: '1px solid #F9F9F9',
   minHeight: '10rem',
   overflowY: 'auto',
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
const WrapperHead = styled('div')({
   display: 'flex',
   gap: '5rem',
   padding: '0.5rem',
   alignItems: 'center',
   borderBottom: '3px solid #FFF',
   position: 'fixed',
   width: '100%',
   background: 'black',
   borderTopLeftRadius: '1.25rem',
   borderTopRightRadius: '1.25rem',
})
const WrapperTexts = styled('div')`
   display: flex;
   gap: 0.5rem;
`
const HeadTexts = styled('p')`
   color: #fff;
`

const IconWrapper = styled('div')({
   width: '1.4375rem',
   height: ' 1.4375rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})
const StyledContent = styled('div')`
   margin-top: 2.6rem;
`
const StyledTableContainer = styled(TableContainer)`
   border-radius: 10px;
   margin-top: 2rem;
`
const StyledTableCell = styled(TableCell)`
   font-weight: 500;
   font-family: 'Roboto', sans-serif;
   padding: 15px 8px 15px 20px;
   font-size: 1rem;
   color: #fdfdfd;
   background-color: #1e1f22;
`
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

// const StyledTableRowOne = styled(TableRow)`
//    &:nth-child(even) {
//       width: 100px;
//       background-color: #1a227e1a;
//    }
// `
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
// const StyledContainer = styled('div')`
//    display: flex;
//    justify-content: end;
//    margin-right: 15px;
// `
// const StyledUl = styled('ul')`
//    display: flex;
//    gap: 0.8rem;
// `
// const StyledSpan = styled('span')`
//    font-size: 0.9rem;
//    color: #ffff;
// `
