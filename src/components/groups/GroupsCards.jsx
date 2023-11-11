/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, styled } from '@mui/material'
// import { useSearchParams } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteicon.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg'
import { NotesIcon, PeopleIcon, ProgressIcon } from '../../assets/icons'
import {
   deleteGroups,
   getGroupById,
   getGroups,
} from '../../store/groups/groupThunk'
import { Loading } from '../UI/loading/Loading'
import { DeleteGroupModal } from './DeleteGroupModal'
import { GetGroupModal } from './GetGroupModal'
import { showSnackbar } from '../UI/snackbar/Snackbar'
import { EditModal } from './EditModal'
import { fetchInterns } from '../../store/interns/internsThunk'
import { getMentors } from '../../store/mentors/mentor.thunk'

export const GroupsCards = ({ groups }) => {
   const [deleteOpenModal, setDeleteOpenModal] = useState(false)
   const [groupOpenModal, setGroupOpenModal] = useState(false)
   const [openEditModal, setOpenEditModal] = useState(false)

   const { isLoading } = useSelector((state) => state.groups)
   const { mentorData } = useSelector((state) => state.mentor)
   const [getId, setGetId] = useState(null)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getGroups())
   }, [dispatch])

   const deleteOpenModalHandler = (id) => {
      setDeleteOpenModal(true)
      setGetId(id)
   }

   const deleteGroupById = () => {
      dispatch(deleteGroups({ getId, setDeleteOpenModal }))
   }

   const openModalHandler = () => {
      setGroupOpenModal(true)
   }

   const closeModalHandler = () => {
      setGroupOpenModal(false)
   }
   const openModalHandlerEdit = () => {
      setOpenEditModal(true)
      dispatch(fetchInterns())
   }
   const closeModalHandlerEdit = () => {
      setOpenEditModal(false)
   }

   const getGroupsById = (id) => {
      dispatch(getGroupById(id))
         .unwrap()
         .then(() => {
            setGroupOpenModal(true)
         })
         .catch(() => {
            showSnackbar({
               severity: 'error',
               message: 'error getting group',
            })
         })
   }
   const editModalHandler = (id) => {
      dispatch(getGroupById(id))
         .unwrap()
         .then(() => {
            openModalHandlerEdit()
         })
         .catch((err) => {
            return err.message
         })
   }

   useEffect(() => {
      dispatch(getMentors())
   }, [dispatch])

   return (
      <Container>
         {isLoading && <Loading />}
         {groups?.map((card) => (
            <ContainerCards key={card.id}>
               {groupOpenModal ? (
                  <GetGroupModal
                     openModal={() => openModalHandler()}
                     oncloseModal={closeModalHandler}
                  />
               ) : null}
               <IconButtonEditStyled
                  className="dd"
                  onClick={() => editModalHandler(card.id)}
               >
                  <EditIcon />
               </IconButtonEditStyled>
               {openEditModal ? (
                  <EditModal
                     openModalHandlerEdit={openModalHandlerEdit}
                     closeModalHandlerEdit={closeModalHandlerEdit}
                     openEditModal={openEditModal}
                     // getGroupId={getGroupId}
                     mentorData={mentorData}
                  />
               ) : null}
               <IconButtonStyled
                  className="dd"
                  onClick={() => deleteOpenModalHandler(card.id)}
               >
                  <DeleteIcon />
               </IconButtonStyled>
               {deleteOpenModal ? (
                  <DeleteGroupModal
                     onOpen={deleteOpenModal}
                     onCloseModal={setDeleteOpenModal}
                     deleteGroupById={deleteGroupById}
                  />
               ) : null}
               <div onClick={() => getGroupsById(card.id)}>
                  <CompanyNameText>{card.name}</CompanyNameText>
                  <WrapperMain>
                     <MainContainers>
                        <IconWrapper>
                           <ProgressIcon />
                        </IconWrapper>
                        <CardTexts>{card.status}</CardTexts>
                     </MainContainers>
                     <MainContainers>
                        <IconWrapper>
                           <PeopleIcon />
                        </IconWrapper>
                        <CardTexts>{card.people} people</CardTexts>
                     </MainContainers>
                     <MainContainers>
                        <IconWrapper>
                           <NotesIcon />
                        </IconWrapper>
                        <CardTexts>
                           {card.start_date}/{card.end_date}
                        </CardTexts>
                     </MainContainers>
                  </WrapperMain>
               </div>
            </ContainerCards>
         ))}
      </Container>
   )
}
const IconButtonStyled = styled(IconButton)({
   position: 'absolute',
   top: '-0.3rem',
   right: 0,
   display: 'none',
})
const IconButtonEditStyled = styled(IconButton)({
   position: 'absolute',
   top: '-0.3rem',
   right: '2rem',
   display: 'none',
})
const Container = styled('div')(() => ({
   marginTop: '2rem',
   width: '100%',
   display: 'flex',
   cursor: 'pointer',
   flexWrap: 'wrap',
   gap: '1.31rem',
   maxHeight: '68vh',
   overflowY: 'auto',
   scrollbarWidth: 'thin',
   scrollbarColor: ' #b3b3b30 transparent',
   '&::-webkit-scrollbar ': {
      width: '0.3rem',
   },
   '&::-webkit-scrollbar-track': {
      backgroundColor: ' #fff white',
   },
   '&::-webkit-scrollbar-thumb ': {
      backgroundColor: ' #fff',
      borderRadius: '0.25rem',
   },
}))

const ContainerCards = styled('div')(() => ({
   width: '14.375rem',
   height: '10.4375rem',
   borderRadius: '0.625rem',
   position: 'relative',
   border: '1px solid #FFF',
   paddingTop: '1.75rem',
   transition: 'transform 0.3s, background 0.3s',
   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',

      '& .dd': {
         display: 'block',
      },
   },
}))
const CompanyNameText = styled('p')({
   color: '#FFF',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: 500,
   textAlign: 'center',
})

const IconWrapper = styled('div')({
   width: '1.4375rem',
   height: ' 1.4375rem',
   backgroundColor: '#2B2D31',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: '50%',
})

const MainContainers = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '0.38rem',
})

const CardTexts = styled('p')({
   color: '#ECECEC',
   fontSize: '0.8125rem',
   fontStyle: 'normal',
   fontWeight: 500,
   lineHeight: 'normal',
})

const WrapperMain = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.69rem',
   marginTop: '1.37rem',
   paddingLeft: '2.19rem',
})
