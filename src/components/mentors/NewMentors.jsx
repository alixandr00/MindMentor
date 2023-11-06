import { IconButton, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UiButton } from '../UI/button/UiButton'
import { UiInput } from '../UI/input/UiInput'
import { SearchIcon } from '../../assets/icons'
import { MentorModalResume } from './MentorModalResume'
import { MentorSortInPaid } from './MentorSortInPaid'
import {
   deleteMentor,
   getStack,
   getStatusMentors,
} from '../../store/mentors/mentor.thunk'
import { statusData } from '../../utils/common/constants/mentor'
import { Loading } from '../UI/loading/Loading'
import { MentorsCards } from './MentorsCards'
import { resetForm } from '../../store/mentors/mentor.slice'

export const NewMentors = () => {
   const dispatch = useDispatch()
   const [valueSearchParams, setValueSearchParams] = useSearchParams()
   const [valueSearch, setValueSearch] = useState(
      valueSearchParams.get('search') || ''
   )
   const { sort, mentorData, isLoading } = useSelector((state) => state.mentor)

   const updateSearchParam = () => {
      valueSearchParams.set('create', 'Mentor')
      setValueSearchParams(valueSearchParams)
   }

   useEffect(() => {
      dispatch(getStack())
   }, [])

   const onCloseHandler = () => {
      if (valueSearchParams.has('create')) {
         valueSearchParams.delete('create')
         setValueSearchParams(valueSearchParams)
      } else {
         valueSearchParams.delete('edit')
         setValueSearchParams(valueSearchParams)
      }

      dispatch(resetForm())
   }

   const onChangeHandler = (event) => {
      const { value } = event.target
      setValueSearch(value)
   }

   const onBlurAndGetSearchHandler = () => {
      if (valueSearch !== '') {
         valueSearchParams.set('search', valueSearch)
         setValueSearchParams(valueSearchParams)
      } else {
         valueSearchParams.delete('search')
         setValueSearchParams(valueSearchParams)
      }
   }

   const getMentor = () => {
      dispatch(
         getStatusMentors({ status: statusData[sort], search: valueSearch })
      )
   }

   const deleteMentors = (id) => {
      dispatch(
         deleteMentor({
            id,
            get: getMentor,
         })
      )
   }

   useEffect(() => {
      getMentor()
   }, [sort, valueSearchParams.get('search')])

   const isOpen =
      valueSearchParams.has('create') || valueSearchParams.has('edit')

   return (
      <>
         {isLoading && <Loading />}

         <Container>
            <MentorModalResume
               getMentor={getMentor}
               open={isOpen}
               onClose={onCloseHandler}
            />
            <ContIntern>
               <div>
                  <AdminCont>
                     <p className="adminText">Hello, Super Admin!</p>
                  </AdminCont>
                  <div>
                     <InternBox>
                        <p className="Interns">Mentors</p>
                     </InternBox>
                     <InputBox>
                        <Input>
                           <UiInputStyled
                              colors="#FFFF"
                              placeholder="search name"
                              type="text"
                              value={valueSearch}
                              onChange={onChangeHandler}
                              onBlur={onBlurAndGetSearchHandler}
                           />
                           <Icons>
                              <SearchIcon />
                           </Icons>
                        </Input>
                        <BoxSortAndCreateMentor>
                           <ContainerSelect>
                              <span>Sort by</span>

                              <MentorSortInPaid
                                 name="status"
                                 dataMenuItem={[
                                    { id: 1, name: 'All' },
                                    { id: 2, name: 'Billable' },
                                    { id: 3, name: 'Non billable' },
                                 ]}
                              />
                           </ContainerSelect>

                           <div>
                              <UiButtonStyled onClick={updateSearchParam}>
                                 <p>+ New mentor</p>
                              </UiButtonStyled>
                           </div>
                        </BoxSortAndCreateMentor>
                     </InputBox>
                  </div>
               </div>
            </ContIntern>

            <ChildrenContainer>
               <ContainerMentorCard>
                  {mentorData?.map((mentor) => (
                     <MentorsCards
                        mentorData={mentorData}
                        setValueSearchParams={setValueSearchParams}
                        key={mentor.id}
                        deleteMentors={deleteMentors}
                        mentor={mentor}
                        valueSearchParams={valueSearchParams}
                     />
                  ))}
               </ContainerMentorCard>
            </ChildrenContainer>
         </Container>
      </>
   )
}

const Input = styled('div')`
   display: flex;
`
const Icons = styled(IconButton)`
   position: relative;
   right: 12rem;
   bottom: 0.1875rem;
`

const Container = styled('div')({
   width: '100%',
   height: '100vh',
   background: '#1E1F22',
   padding: '1rem',
   paddingTop: '1rem',
})

const ContIntern = styled('div')({
   width: '100%',
   height: '10rem',

   display: 'flex',
   flexDirection: 'column',
})

const AdminCont = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   paddingBottom: '2rem',
   paddingTop: '1rem',

   '.adminText': {
      width: '18.1875rem',
      height: '2.5rem',
      fontSize: '2rem',
      lineHeight: '2.5rem',
      color: '#FFFFFF',
   },
})

const InternBox = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',

   '.Interns': {
      width: '6.5625rem',
      height: '2.5rem',
      color: '#FFFFFF',
      fontSize: '2rem',
      lineHeight: '2.5rem',
   },
})

const BoxSortAndCreateMentor = styled('div')`
   display: flex;
   gap: 1.25rem;
`

const ContainerSelect = styled('div')`
   display: flex;
   align-items: center;
   gap: 1.125rem;

   span {
      color: #fff;
      font-family: Bai Jamjuree;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
   }
`

const InputBox = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

   '.sort': {
      color: '#FFFFFF',
   },
})

const ChildrenContainer = styled('div')`
   margin-top: 1.625rem;
`

const UiInputStyled = styled(UiInput)({
   width: '12.25rem',
   '& .MuiInputBase-input': {
      height: '2rem',
      background: 'transparent',
   },
   '& .Mui-focused': {
      '& .MuiInputBase-input': {
         background: 'transparent',
      },
   },
   border: '1px solid #FFFF',
   borderRadius: '0.625rem',
   paddingLeft: '2rem',
   colors: '#FFFFFF',
})

const UiButtonStyled = styled(UiButton)({
   width: '8.3vw',
   height: '5vh',

   color: '#FFF',
   fontFamily: 'Bai Jamjuree',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
})

const ContainerMentorCard = styled('div')(() => ({
   width: '100%',
   marginTop: '2rem',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '2rem',
   maxHeight: '67vh',
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

   padding: '0.5rem',
}))
