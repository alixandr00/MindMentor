/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, styled } from '@mui/material'
import { useParams } from 'react-router-dom'
import { UiButton } from '../UI/button/UiButton'
import { UiInput } from '../UI/input/UiInput'
import { SearchIcon } from '../../assets/icons'
import { VendorsModal } from './NewVacansyModal'
import { NewVendorModal } from './NewVendorModal'
import { useCustomSearchParams } from '../../utils/CustomSearchParams'
import { getSearchVendors } from '../../store/vendors/vendors.thunk'

export const NewVendors = ({ children }) => {
   const dispatch = useDispatch()
   const param = useParams()
   const [openModalVendors, setOpenModalVendors] = useState(false)
   const [openModalVacansy, setOpenModalVacansy] = useState(false)
   const { setParam, deleteParam } = useCustomSearchParams()

   const [value, setValue] = useState('')
   const ddValue = useSelector((state) => state.vendor.dd)

   const onChangeValue = (e) => {
      setValue(e.target.value)
   }

   const onOpenModalHandler = () => {
      setOpenModalVendors(true)
      setParam('ModalVendors', 'open')
   }
   const onCloseModalHandler = () => {
      setOpenModalVendors(false)
      deleteParam('ModalVendors')
   }
   const onOpenModalHandlerVacansy = () => {
      setOpenModalVacansy(true)
      setParam('ModalVacancy', 'open')
   }
   const onCloseModalHandlerVacansy = () => {
      setOpenModalVacansy(false)
      deleteParam('ModalVacancy')
   }
   useEffect(() => {
      dispatch(getSearchVendors(value))
   }, [value])
   return (
      <Container>
         <ContIntern>
            <AdminCont>
               <p className="adminText">Hello, Super Admin!</p>
            </AdminCont>
            <div>
               <InternBox>
                  <p className="Interns">Vendors</p>
               </InternBox>
               <InputBox>
                  <Input>
                     <UiInputStyled
                        value={value}
                        onChange={onChangeValue}
                        colors="#FFFF"
                        placeholder="search name"
                        type="text"
                     />
                     <Icons>
                        <SearchIcon />
                     </Icons>
                  </Input>
                  <ButtonBlock>
                     {ddValue ? (
                        <ButtonStyled onClick={onOpenModalHandlerVacansy}>
                           + New Vacancy
                        </ButtonStyled>
                     ) : (
                        ''
                     )}

                     <UiButtonStyled onClick={onOpenModalHandler}>
                        + New vendor
                     </UiButtonStyled>
                  </ButtonBlock>
               </InputBox>
            </div>
         </ContIntern>
         {children}
         {openModalVendors ? (
            <VendorsModal onCloseModalHandler={onCloseModalHandler} />
         ) : (
            ''
         )}
         {openModalVacansy ? (
            <NewVendorModal
               id={param.id}
               onCloseModalHandlerVacansy={onCloseModalHandlerVacansy}
            />
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
const ButtonStyled = styled(UiButton)({
   width: '8.5rem',
})
const ButtonBlock = styled('div')`
   display: flex;
   gap: 1rem;
`
