import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import {
   FormControl,
   IconButton,
   MenuItem,
   Select,
   styled,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { UiButton } from '../UI/button/UiButton'
import { UiInput } from '../UI/input/UiInput'
import { DownIcon, SearchIcon, UpIcon } from '../../assets/icons'
import { InternsAddStudentModal } from './InternsAddStudentModal/InternsAddStudentModal'
import { UiModal } from '../UI/modal/UiModal'
import { fetchInternsSearch } from '../../store/interns/internsThunk'

export const NewInterns = ({ children }) => {
   const [isSelectOpen, setIsSelectOpen] = useState(false)
   const [selectedValue, setSelectedValue] = useState('')
   const [openModalInterns, setOpenModalInterns] = useState(false)
   const [inputValue, setInputValue] = useState('')
   const dispatch = useDispatch()
   // const navigate = useNavigate()
   useEffect(() => {
      dispatch(fetchInternsSearch({ inputValue, selectedValue }))
   }, [inputValue, selectedValue])

   const handleSelectOpen = () => {
      setIsSelectOpen(true)
   }

   const handleSelectClose = () => {
      setIsSelectOpen(false)
   }

   const onChangevalue = (e) => {
      setInputValue(e.target.value)
   }

   const handleSelectChange = (event) => {
      setSelectedValue(event.target.value)
   }
   const handleOpenModalInterns = () => {
      setOpenModalInterns(true)
   }
   const handleCloseModalInterns = () => {
      setOpenModalInterns(false)
   }

   return (
      <Container>
         <ContIntern>
            <AdminCont>
               <p className="adminText">Hello, Super Admin!</p>
            </AdminCont>
            <div>
               <InternBox>
                  <p className="Interns">Interns</p>
                  <UiButton onClick={handleOpenModalInterns}>
                     + New intern
                  </UiButton>
               </InternBox>
               <InputBox>
                  <Input>
                     <UiInputStyled
                        colors="#FFFF"
                        placeholder="search name"
                        type="text"
                        value={inputValue}
                        onChange={onChangevalue}
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
                           placeholder="Status"
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
                           <MenuItem value="Status">Status</MenuItem>
                           <MenuItem value="New">New</MenuItem>
                           <MenuItem value="Paid">Paid</MenuItem>
                           <MenuItem value="Pending">Pending</MenuItem>
                           <MenuItem value="Validated">Validated</MenuItem>
                           <MenuItem value="Graduate">Graduate</MenuItem>
                           <MenuItem value="Selected">Selected</MenuItem>
                           <MenuItem value="Proposed">Proposed</MenuItem>
                           <MenuItem value="Onboarded">Onboarded</MenuItem>
                        </SelectStyled>
                     </FormControlStyled>
                  </div>
               </InputBox>
            </div>
         </ContIntern>
         {children}

         {openModalInterns ? (
            <UiModal
               open={openModalInterns}
               onClose={handleCloseModalInterns}
               backgroundColor="none"
               top="43%"
            >
               <InternsAddStudentModal onClose={handleCloseModalInterns} />
            </UiModal>
         ) : (
            ''
         )}
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
   '.sort': { color: '#FFFFFF' },
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
      '& .MuiInputBase-input': { background: 'transparent' },
   },
   border: '1px solid #FFFF',
   borderRadius: '0.625rem',
   paddingLeft: '2rem',
   colors: '#FFFFFF',
})
const FormControlStyled = styled(FormControl)({
   position: 'relative',
   '& label': { color: 'white', marginTop: '-12px' },
})
const SelectStyled = styled(Select)({
   '&.MuiOutlinedInput-root': {
      width: '6.375rem',
      height: '1.875rem',
      borderRadius: '0.5rem',
      color: 'white',
      fieldset: { borderColor: '#D0D0D0' },
      '&:hover fieldset': {
         borderColor: '#8d8c8c',
      },
      '&.Mui-focused fieldset': { borderColor: '#0079BF' },
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
