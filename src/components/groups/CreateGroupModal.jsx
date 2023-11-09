import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { IconButton, styled } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useDispatch } from 'react-redux'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'
import 'dayjs/locale/en'
import { AddedInternsModal } from './AddedInternsModal'
import { postGroups } from '../../store/groups/groupThunk'
import { headerArray } from '../../utils/table-students'

dayjs.extend(customParseFormat)
dayjs.locale('en')

export const CreateGroupModal = ({ openModal, oncloseModal }) => {
   const [openModalInterns, setOpenModalInterns] = useState(false)
   const [state, setState] = useState({ name: [], internId: [] })

   const [internName, setInternName] = useState([])
   const [internId, setInternId] = useState([])
   const dispatch = useDispatch()

   const [groupName, setGroupName] = useState('')
   const [status, setStatus] = useState('')
   const [startData, setStartData] = useState(null)
   const [endData, setEndData] = useState(null)
   const openModalHandler = () => {
      setOpenModalInterns(true)
   }
   const closeModalHandler = () => {
      setOpenModalInterns(false)
   }

   const handleFormSubmit = (event) => {
      event.preventDefault()
      const formattedStartData = dayjs(startData).format('YYYY-MM-DD')
      const formattedEndData = dayjs(endData).format('YYYY-MM-DD')

      const formData = {
         name: groupName,
         status,
         start_date: formattedStartData,
         end_date: formattedEndData,
         people: state.internId,
      }
      dispatch(postGroups({ formData, oncloseModal }))
      console.log(formData)
   }

   return (
      <UiModal open={openModal} onClose={oncloseModal}>
         <Container>
            <IconButtonStyled onClick={oncloseModal}>
               <CloseIconBlock>
                  <CloseIcon />
               </CloseIconBlock>
            </IconButtonStyled>
            <form onSubmit={handleFormSubmit}>
               <FirstWrapper>
                  <GroupText>Group Name</GroupText>
                  <UiInputStyled
                     placeholder="group name"
                     value={groupName}
                     onChange={(e) => setGroupName(e.target.value)}
                     type="text"
                  />
               </FirstWrapper>
               <SecondWrapper>
                  <UiButtonStyled onClick={openModalHandler}>
                     Group
                  </UiButtonStyled>
                  <WrapperInternName>
                     {state.name.length > 0 ? (
                        state.name.map((el) => (
                           <TextInternName>{el}</TextInternName>
                        ))
                     ) : (
                        <TextInternNameNo>
                           There are no interns here yet.
                        </TextInternNameNo>
                     )}
                  </WrapperInternName>
                  {openModalInterns ? (
                     <AddedInternsModal
                        setState={setState}
                        state={state}
                        internName={internName}
                        setInternName={setInternName}
                        internId={internId}
                        setInternId={setInternId}
                        openModal={openModalHandler}
                        oncloseModal={closeModalHandler}
                        headerArray={headerArray}
                     />
                  ) : null}
               </SecondWrapper>
               <MentorWrapper>
                  <h1>hello</h1>
               </MentorWrapper>
               <ThirdWrapper>
                  <StatusText>Status</StatusText>
                  <WrapperButtons>
                     <StatusButtonsStyled
                        onClick={() => setStatus('ACTIVE')}
                        style={{
                           backgroundColor:
                              status === 'ACTIVE'
                                 ? 'rgba(84, 71, 170, 0.93)'
                                 : 'transparent',
                        }}
                     >
                        ACTIVE
                     </StatusButtonsStyled>
                     <StatusButtonsStyled
                        onClick={() => setStatus('INACTIVE')}
                        style={{
                           backgroundColor:
                              status === 'INACTIVE'
                                 ? 'rgba(84, 71, 170, 0.93)'
                                 : 'transparent',
                        }}
                     >
                        INACTIVE
                     </StatusButtonsStyled>
                     <StatusButtonsStyled
                        onClick={() => setStatus('FINISHED')}
                        style={{
                           backgroundColor:
                              status === 'FINISHED'
                                 ? 'rgba(84, 71, 170, 0.93)'
                                 : 'transparent',
                        }}
                     >
                        FINISHED
                     </StatusButtonsStyled>
                  </WrapperButtons>
                  <WrapperData>
                     <StyleBlockCalendar>
                        <DataTexts>Start data</DataTexts>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DatePicker
                              value={startData}
                              onChange={setStartData}
                           />
                        </LocalizationProvider>
                     </StyleBlockCalendar>
                     <StyleBlockCalendar>
                        <DataTexts>End data</DataTexts>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DatePicker value={endData} onChange={setEndData} />
                        </LocalizationProvider>
                     </StyleBlockCalendar>
                  </WrapperData>
                  <ButtonWrapper>
                     <ButtonsStyled onClick={oncloseModal}>
                        Cancel
                     </ButtonsStyled>
                     <ButtonsStyled type="submit">Save</ButtonsStyled>
                  </ButtonWrapper>
               </ThirdWrapper>
            </form>
         </Container>
      </UiModal>
   )
}

const MentorWrapper = styled('div')({})

const TextInternName = styled('p')({
   color: '#FFF',
   fontSize: '1rem',
   fontWeight: 500,
   width: 'fit-content',
   height: 'fit-content',
   fontFamily: 'Bai Jamjuree',
})
const TextInternNameNo = styled('p')({
   color: '#FFF',
   fontSize: '1rem',
   fontWeight: 500,
   width: 'fit-content',
   height: 'fit-content',
   fontFamily: 'Bai Jamjuree',
   marginTop: '2rem',
})
const WrapperInternName = styled('div')({
   display: 'flex',
   gap: '1rem',
   flexWrap: 'wrap',
})
const IconButtonStyled = styled(IconButton)({
   position: 'absolute',
   right: '1.3rem',
   top: '1.3rem',
})
const Container = styled('div')({
   width: '55rem ',
   height: '40rem',
   backgroundColor: '#1E1F22',
   borderRadius: '0.625rem',
   border: ' 1px solid #FFF',
   paddingTop: '4rem',
   paddingLeft: '13rem',
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
const DataTexts = styled('h2')({
   color: '#FFF',
   fontSize: '1.25rem',
   fontWeight: 500,
})
const StyleBlockCalendar = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   .MuiOutlinedInput-root {
      width: 8rem;
      height: 2.125rem;
      border-radius: 0.625rem;
      border: 1px solid #fff;
      background-color: #252335;
   }

   .MuiSvgIcon-root {
      font-size: 1rem;
      color: #fff;
   }
   .MuiOutlinedInput-input {
      font-size: 0.7rem;
      color: #fff;
   }
`
const WrapperData = styled('div')({
   display: 'flex',
   gap: '3rem',
   marginTop: '0.5rem',
})

const GroupText = styled('h1')({
   color: ' #FFF',
   fontSize: ' 1.25rem',
   fontWeight: 500,
})
const UiInputStyled = styled(UiInput)({
   border: `1px solid #F9F9F9`,
   width: '30.8125rem',
   height: '2.0625rem',
   borderRadius: '0.625rem',
   background: '#252335',
   boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
   color: 'white',
})
const FirstWrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
})
const SecondWrapper = styled('div')({
   width: '30rem',
   height: '12rem',
   marginTop: '1rem',
   flexDirection: 'column',
   border: '1px solid white',
   gap: '1rem',
   maxHeight: '11rem',
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
})
const ThirdWrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.5rem',
})
const UiButtonStyled = styled('div')({
   borderRadius: '0.625rem',
   border: '1px solid #F9F9F9',
   background: '#252335',
   width: '6.25rem',
   height: '2.0625rem',
   color: '#FFFFFF',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer',
   '&:hover': {
      backgroundColor: 'rgba(84, 71, 170, 0.93)',
   },
   '&:active': {
      backgroundColor: 'rgba(80, 72, 132, 0.93)',
   },
})
const StatusText = styled('h2')({
   color: ' #FFF',
   fontSize: ' 1.25rem',
   fontWeight: 500,
   marginTop: '0.7rem',
})
const WrapperButtons = styled('div')({
   display: 'flex',
   gap: '2rem',
})

const StatusButtonsStyled = styled('div')({
   borderRadius: '0.625rem',
   border: '1px solid #F9F9F9',
   background: '#252335',
   color: '#FFF',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '6.25rem',
   height: '2.0625rem',
   cursor: 'pointer',
})
const ButtonsStyled = styled(UiButton)({
   borderRadius: '0.625rem',
   border: '1px solid #F9F9F9',
   background: '#252335',
   width: '5.25rem',
   height: '2.0625rem',
   '&:hover': {
      backgroundColor: 'rgba(84, 71, 170, 0.93)',
   },
})

const ButtonWrapper = styled('div')({
   display: 'flex',
   gap: '2rem',
   justifyContent: 'flex-end',
   marginRight: '11rem',
   marginTop: '2rem',
})
