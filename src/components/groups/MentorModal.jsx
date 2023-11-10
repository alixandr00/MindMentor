import { styled } from '@mui/system'
import { useSelector } from 'react-redux'
import { GmailIcon, PhoneIcon } from '../../assets/icons'

export const MentorModal = ({
   closeMentorhandler,
   setMentor,
   setSelectedMentor,
}) => {
   const { mentorData } = useSelector((state) => state.mentor)

   const handleMentorClick = (mentor) => {
      if (setMentor) {
         setMentor(mentor)
      }
      if (setSelectedMentor) {
         setSelectedMentor(mentor)
      }
      closeMentorhandler()
   }

   return (
      <StyledContainer>
         {[mentorData][0]?.map((mentor) => (
            <ContainerCards
               key={mentor.id}
               onClick={() => handleMentorClick(mentor)}
            >
               <div>
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
               </div>
            </ContainerCards>
         ))}
      </StyledContainer>
   )
}

const ContainerCards = styled('div')(() => ({
   width: '27.2vw',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   transition: 'transform 0.3s, background 0.3s',
   padding: '26px 20px',

   '&:hover': {
      background: 'linear-gradient(7.1875deg, #311f60, #3F5FB0)',
      transform: 'scale(1.02)',

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

const StyledContainer = styled('div')(() => ({
   width: '27rem',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '1rem',
   maxHeight: '57vh',
   overflowY: 'auto',
   top: '10rem',
   left: '14rem',
   right: '10rem',
   borderRadius: '1rem',
   scrollbarWidth: 'thin',
   scrollbarColor: ' #b3b3b30 transparent',
   position: 'fixed',
   background: 'rgb(51, 41, 113)',
   zIndex: '2',
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

   padding: '0.5rem',
}))
