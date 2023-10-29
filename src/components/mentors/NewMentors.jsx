import { IconButton, styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { UiButton } from '../UI/button/UiButton'
import { UiInput } from '../UI/input/UiInput'
import { SearchIcon } from '../../assets/icons'
import { MentorModalResume } from './MentorModalResume'
import { MentorSortInPaid } from './MentorSortInPaid'

export const NewMentors = ({ children }) => {
   const [searchParams, setSearchParams] = useSearchParams()

   const updateSearchParam = () => {
      setSearchParams({ create: 'Mentor' })
   }

   const onCloseHandler = () => {
      searchParams.delete('create')
      setSearchParams(searchParams)
   }

   return (
      <Container>
         <MentorModalResume
            open={searchParams.has('create')}
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
                     <div>{}</div>
                  </InternBox>
                  <InputBox>
                     <Input>
                        <UiInputStyled
                           colors="#FFFF"
                           placeholder="search name"
                           type="text"
                        />
                        <Icons>
                           <SearchIcon />
                        </Icons>
                     </Input>
                     <BoxSortAndCreateMentor>
                        <ContainerSelect>
                           <span>Sort by</span>

                           <MentorSortInPaid
                              defaultName="All"
                              name="status"
                              dataMenuItem={[
                                 { id: 1, name: 'All' },
                                 { id: 2, name: 'Paid' },
                                 { id: 3, name: 'Un Paid' },
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

         <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
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
