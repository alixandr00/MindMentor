import { styled } from '@mui/material'
import { UiButton } from '../UI/button/UiButton'
import { UiInput } from '../UI/input/UiInput'

export const Interns = () => {
   return (
      <Container>
         <ContIntern>
            <AdminCont>
               <p>Hello, Super Admin!</p>
            </AdminCont>
            <div>
               <InternBox>
                  <p>Interns</p>
                  <UiButton>+ New intern</UiButton>
               </InternBox>
               <InputBox>
                  <UiInputStyled />
                  <div>
                     <p>Sort by</p>
                  </div>
               </InputBox>
            </div>
         </ContIntern>
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   height: '100vh',
   background: '#1E1F22',
})

const ContIntern = styled('div')({
   width: '62.5rem',
   height: '10rem',
   background: 'white',
   display: 'flex',
   flexDirection: 'column',
})

const AdminCont = styled('div')({
   display: 'flex',
   justifyContent: 'end',
})

const InternBox = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

const InputBox = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

const UiInputStyled = styled(UiInput)({
   width: '12.25rem',
   '& .MuiInputBase-input': {
      height: '2rem',
   },
   input: {
      padding: 0,
   },
})
