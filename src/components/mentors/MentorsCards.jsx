import { useDispatch, useSelector } from 'react-redux'
import { IconButton, styled } from '@mui/material'
import { useState } from 'react'
import { GmailIcon, PhoneIcon, DeleteIcon, EditIcon } from '../../assets/icons'
import { MentorResumeModal } from './MentorResumeModal'
import { getMentorDetail } from '../../store/mentors/mentor.thunk'
import {
   openAndCloseCreateMentor,
   openModalEditMentor,
} from '../../store/mentors/mentor.slice'
import { ConfirmingModal } from './ConfirmingModal'
import { Loading } from '../UI/loading/Loading'

export const MentorsCards = ({
   mentor,
   deleteMentors,
   valueSearchParams,
   setValueSearchParams,
   mentorData,
}) => {
   const dispatch = useDispatch()
   const { isLoading } = useSelector((state) => state.mentor)
   const [idMentor, setIdMentor] = useState()

   const mentorStackJoin = mentor?.stack?.join(',')
   const mentorStack = mentorStackJoin
      ? mentorStackJoin?.replace(/,/g, ', ')
      : 'undefined'

   const onOpenResumeHandler = () => {
      valueSearchParams.set(
         'resume',
         `${mentor.first_name}-${mentor.id}-${mentorStack}`
      )
      setValueSearchParams(valueSearchParams)

      dispatch(getMentorDetail(mentor.id))
   }

   const closeResumeHandler = () => {
      valueSearchParams.delete('resume')
      setValueSearchParams(valueSearchParams)
   }

   const openResume = valueSearchParams.has('resume')
   const openMentorDelete = valueSearchParams.has('delete')

   const onEditMentorHandler = (event) => {
      event.stopPropagation()
      dispatch(openAndCloseCreateMentor(true))

      valueSearchParams.set(
         'edit',
         `${mentor.first_name}-${mentor.id}-${mentorStack}`
      )

      setValueSearchParams(valueSearchParams)
      dispatch(openModalEditMentor({ id: mentor.id, mentorData }))
   }

   const closeAndSaveModalHandler = () => {
      valueSearchParams.delete('delete')
      setValueSearchParams(valueSearchParams)
   }

   const onDeleteMentorHandler = (id) => {
      deleteMentors(id)
      closeAndSaveModalHandler()
   }

   const onConfirmingModal = (event) => {
      event.stopPropagation()
      setIdMentor(mentor.id)

      valueSearchParams.set(
         'delete',
         `${mentor.first_name}-${mentor.id}-${mentorStack}`
      )

      setValueSearchParams(valueSearchParams)
   }

   const { email } = mentor
   const maxLength = 21

   const lengthEmail =
      email?.length > maxLength ? email?.substring(0, maxLength) : email

   return (
      <>
         {isLoading && <Loading />}
         <ContainerCards onClick={onOpenResumeHandler}>
            <div className="action-icon-container">
               <div className="action-icon-box">
                  <ContainerActionIcon>
                     <IconButton className="edit" onClick={onEditMentorHandler}>
                        <EditIcon />
                     </IconButton>

                     <IconButton className="del" onClick={onConfirmingModal}>
                        <DeleteIcon />
                     </IconButton>
                  </ContainerActionIcon>
               </div>
            </div>

            <MentorNameText>
               {mentor.first_name} {mentor.last_name}
            </MentorNameText>
            <MainWrapper>
               <MentorTexts>{mentorStack}</MentorTexts>
               <MainContainers>
                  <div>
                     <PhoneIcon />
                  </div>
                  <MentorTexts>{mentor.phone_number}</MentorTexts>
               </MainContainers>
               <MainContainers>
                  <div>
                     <GmailIcon />
                  </div>
                  <MentorTexts>{lengthEmail}</MentorTexts>
               </MainContainers>
            </MainWrapper>
         </ContainerCards>

         {!isLoading && (
            <MentorResumeModal open={openResume} onClose={closeResumeHandler} />
         )}

         {idMentor && (
            <ConfirmingModal
               open={openMentorDelete}
               id={idMentor}
               onClose={closeAndSaveModalHandler}
               onDeleteMentorHandler={onDeleteMentorHandler}
            />
         )}
      </>
   )
}

const ContainerCards = styled('div')(() => ({
   width: '15vw',

   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   transition: 'transform 0.3s, background 0.3s',
   padding: '1.625rem 1.5rem',

   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',
      transform: 'scale(1.05)',

      '& .action-icon-box': {
         display: 'block',
      },
   },

   color: '#FFF',
   fontFamily: 'Bai Jamjuree',
   fontSize: '0.875rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',

   cursor: 'pointer',

   '& .action-icon-container': {
      height: '2rem',
      margin: '-1.5rem -1rem 0.5rem 0',
   },

   '& .action-icon-box': {
      display: 'none',
   },
}))

const ContainerActionIcon = styled('div')`
   display: flex;
   justify-content: flex-end;
   align-items: center;

   .del {
      svg {
         width: 1.5625rem;
         height: 1.5625rem;
         margin-top: -4px;

         path {
            stroke: #d0d0d0;
         }
      }

      margin-bottom: 2px;
      :hover {
         svg {
            path {
               stroke: #fff;
            }
         }
      }
   }

   .edit {
      svg {
         path {
            stroke: #d0d0d0;
         }
      }

      :hover {
         svg {
            path {
               stroke: #fff;
            }
         }
      }
   }
`

const MentorNameText = styled('p')({
   color: '#FFF',
   fontSize: '1.125rem',
   fontWeight: 500,
   fontFamily: 'Bai Jamjuree',
   textAlign: 'center',
   margin: '0',
})

const MainContainers = styled('div')({
   display: 'flex',
   gap: '0.25rem',
   alignItems: 'center',
})

const MentorTexts = styled('p')({
   color: '#ECECEC',
   fontSize: '1rem',
   fontWeight: 500,
})

const MainWrapper = styled('div')({
   maxWidth: '26ch',
   overflow: 'hidden',
   whiteSpace: 'nowrap',

   display: 'flex',
   flexDirection: 'column',
   gap: '0.52rem',
   margin: '0',
   marginTop: '1.37rem',
})
