import { IconButton, styled } from '@mui/material'
import { UiButton } from '../UI/button/UiButton'
import { UiInput } from '../UI/input/UiInput'
import { SearchIcon } from '../../assets/icons'

export const NewVendors = ({ children }) => {
   return (
      <Container>
         <ContIntern>
            <AdminCont>
               <p className="adminText">Hello, Super Admin!</p>
            </AdminCont>
            <div>
               <InternBox>
                  <p className="Interns">Vendors</p>
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
                  <UiButtonStyled>+ New vendor</UiButtonStyled>
               </InputBox>
            </div>
         </ContIntern>
         {children}
      </Container>
   )
}

const Input = styled('div')`
   display: flex;
`
const Icons = styled(IconButton)`
   position: relative;
   right: 190px;
   bottom: 3px;
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
   //    background: 'blue',
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
   paddingBottom: '10px',
   '.Interns': {
      width: '6.5625rem',
      height: '2.5rem',
      color: '#FFFFFF',
      fontSize: '2rem',
      lineHeight: '2.5rem',
   },
})

const InputBox = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   '.sort': {
      color: '#FFFFFF',
   },
})

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
   width: '8rem',
})