import {
   FormControl,
   IconButton,
   MenuItem,
   Select,
   styled,
} from '@mui/material'
import { useState } from 'react'
import { DownIcon, SearchIcon, UpIcon } from '../../../assets/icons'
import { UiInput } from '../input/UiInput'
import { UiButton } from '../button/UiButton'

export const NewInterviews = ({ children }) => {
   const [isSelectOpen, setIsSelectOpen] = useState(false)
   const [selectedValue, setSelectedValue] = useState('Tech Stack')

   const handleSelectOpen = () => {
      setIsSelectOpen(true)
   }

   const handleSelectClose = () => {
      setIsSelectOpen(false)
   }

   const handleSelectChange = (event) => {
      setSelectedValue(event.target.value)
   }

   return (
      <Container>
         <ContIntern>
            <AdminCont>
               <p className="adminText">Hello, Super Admin!</p>
            </AdminCont>
            <div>
               <InternBox>
                  <p className="Interns">Interview schedules</p>
                  <UiButtonStyled>+ New interview</UiButtonStyled>
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
                  <div className="contsort">
                     <p className="sort">Sort by</p>
                     <FormControlStyled size="medium">
                        <SelectStyled
                           open={isSelectOpen}
                           onClose={handleSelectClose}
                           onOpen={handleSelectOpen}
                           value={selectedValue}
                           onChange={handleSelectChange}
                           // eslint-disable-next-line react/no-unstable-nested-components
                           IconComponent={() => (
                              <SelectIcon
                                 onClick={(e) => {
                                    e.stopPropagation()
                                    setIsSelectOpen(!isSelectOpen)
                                 }}
                              >
                                 <UpIconStyled isOpen={isSelectOpen} />
                                 <DownIconStyled isOpen={isSelectOpen} />
                              </SelectIcon>
                           )}
                        >
                           <MenuItem value="Tech Stack">JavaScript</MenuItem>
                           <MenuItem value={10}>Java</MenuItem>
                           <MenuItem value={20}>Python</MenuItem>
                           <MenuItem value={30}>HR</MenuItem>
                        </SelectStyled>
                     </FormControlStyled>
                  </div>
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
   '.contsort': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
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
})

const FormControlStyled = styled(FormControl)({
   position: 'relative',
   '& label': {
      color: 'white',
      marginTop: '-12px',
   },
})

const SelectStyled = styled(Select)({
   '&.MuiOutlinedInput-root': {
      width: '8.5rem',
      height: '1.875rem',
      borderRadius: '0.5rem',
      color: 'white',
      fieldset: {
         borderColor: '#D0D0D0',
      },
      '&:hover fieldset': {
         borderColor: '#8d8c8c',
      },
      '&.Mui-focused fieldset': {
         borderColor: '#0079BF',
      },
   },
})

const UpIconStyled = styled(UpIcon)((props) => ({
   display: props.isOpen ? 'block' : 'none',
}))

const DownIconStyled = styled(DownIcon)((props) => ({
   display: props.isOpen ? 'none' : 'block',
}))

const SelectIcon = styled('div')({
   position: 'absolute',
   right: '0.5rem',
   top: '50%',
   transform: 'translateY(-50%)',
   cursor: 'pointer',
})

const UiButtonStyled = styled(UiButton)({
   width: '8.6rem',
})
