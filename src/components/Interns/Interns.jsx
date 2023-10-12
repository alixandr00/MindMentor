import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   styled,
} from '@mui/material'
import { useState } from 'react'
import { UiButton } from '../UI/button/UiButton'
import { UiInput } from '../UI/input/UiInput'
import { DownIcon, SearchIcon, UpIcon } from '../../assets/icons'

export const Interns = () => {
   const [isSelectOpen, setIsSelectOpen] = useState(false)
   const [selectedValue, setSelectedValue] = useState('')

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
                  <p className="Interns">Interns</p>
                  <UiButton>+ New intern</UiButton>
               </InternBox>
               <InputBox>
                  <UiInputStyled
                     placeholder="search name"
                     type="text"
                     InputProps={{
                        startAdornment: <SearchIcon />,
                     }}
                  />
                  <div className="contsort">
                     <p className="sort">Sort by</p>
                     <FormControlStyled size="medium">
                        <InputLabel
                           className="status"
                           id="demo-select-small-label"
                           style={{
                              marginTop: selectedValue ? '0px' : '-12px',
                           }}
                        >
                           Status
                        </InputLabel>
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
                           labelId="demo-select-small-label"
                           id="demo-select-small"
                           label="status"
                        >
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
                        </SelectStyled>
                     </FormControlStyled>
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
   padding: '1rem',
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
      width: '6.375rem',
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
   right: '1rem',
   top: '50%',
   transform: 'translateY(-50%)',
   cursor: 'pointer',
})
