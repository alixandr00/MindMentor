import { useDispatch } from 'react-redux'
import { IconButton, styled } from '@mui/material'
import { GmailIcon, PhoneIcon, DeleteIcon, EditIcon } from '../../assets/icons'
import { MentorResumeModal } from './MentorResumeModal'
import { getMentorDetail } from '../../store/mentors/mentor.thunk'
import {
   openAndCloseCreateMentor,
   openModalEditMentor,
} from '../../store/mentors/mentor.slice'

export const MentorsCards = ({
   mentor,
   deleteMentors,
   valueSearchParams,
   setValueSearchParams,
   mentorData,
}) => {
   const dispatch = useDispatch()

   const onOpenResumeHandler = () => {
      valueSearchParams.set(
         'resume',
         `${mentor.first_name}-${mentor.id}-${mentor.stack[0]}`
      )
      setValueSearchParams(valueSearchParams)

      dispatch(getMentorDetail(mentor.id))
   }

   const closeResumeHandler = () => {
      valueSearchParams.delete('resume')
      setValueSearchParams(valueSearchParams)
   }

   const openResume = valueSearchParams.has('resume')

   const onDeleteMentorHandler = (event) => {
      event.stopPropagation()
      deleteMentors(mentor.id)
   }

   const onEditMentorHandler = (event) => {
      event.stopPropagation()
      dispatch(openAndCloseCreateMentor(true))

      valueSearchParams.set(
         'edit',
         `${mentor.first_name}-${mentor.id}-${mentor.stack[0]}`
      )

      setValueSearchParams(valueSearchParams)
      dispatch(openModalEditMentor({ id: mentor.id, mentorData }))
   }

   return (
      <>
         <ContainerCards onClick={onOpenResumeHandler}>
            <div className="action-icon-container">
               <div className="action-icon-box">
                  <ContainerActionIcon>
                     <IconButton className="edit" onClick={onEditMentorHandler}>
                        <EditIcon />
                     </IconButton>

                     <IconButton
                        className="del"
                        onClick={onDeleteMentorHandler}
                     >
                        <DeleteIcon />
                     </IconButton>
                  </ContainerActionIcon>
               </div>
            </div>

            <MentorNameText>
               {mentor.first_name} {mentor.last_name}
            </MentorNameText>
            <MainWrapper>
               <MentorTexts>{mentor.stack[0]}</MentorTexts>
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
                  <MentorTexts>{mentor.email}</MentorTexts>
               </MainContainers>
            </MainWrapper>
         </ContainerCards>

         <MentorResumeModal open={openResume} onClose={closeResumeHandler} />
      </>
   )
}

const ContainerCards = styled('div')(() => ({
   width: '19.2vw',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   transition: 'transform 0.3s, background 0.3s',
   padding: '26px 32px',

   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',
      transform: 'scale(1.05)',

      '& .action-icon-box': {
         display: 'block',
      },
   },

   color: '#FFF',
   fontFamily: 'Bai Jamjuree',
   fontSize: '13px',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',

   cursor: 'pointer',

   '& .action-icon-container': {
      height: '2rem',
      margin: '-1.5rem -2rem 0.5rem 0',
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
         width: 25px;
         height: 25px;
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
   display: 'flex',
   flexDirection: 'column',
   gap: '0.52rem',
   margin: '0',
   marginTop: '1.37rem',
})
