import React, { useState } from 'react'
import { styled } from '@mui/material'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'
import { UiButton } from '../UI/button/UiButton'
import { ReactComponent as Icon } from '../../assets/images/Ellipse 5 (1).svg'
import {
   addNewVacancy,
   getSearchVendors,
   getVacansy,
   getVendorsDetailCart,
} from '../../store/vendors/vendors.thunk'
import { DateOfCartDetail } from '../UI/dateOfCartDetail/DateOfCartDetail'
import { showSnackbar } from '../UI/snackbar/Snackbar'

export const NewVendorModal = ({ id, onCloseModalHandlerVacansy }) => {
   const dispatch = useDispatch()
   const [selectedLevel, setSelectedLevel] = useState('Junior')
   const [value, setValue] = useState('')
   const [description, setDescription] = useState('')
   const [selectedDate, setSelectedDate] = useState('')

   const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD')

   const onChangeInputValue = (e) => {
      setValue(e.target.value)
   }
   const onChangeInputValueDescription = (e) => {
      setDescription(e.target.value)
   }

   const onChangeOption = (e) => {
      const newValue = e.target.value
      if (newValue !== selectedLevel) {
         setSelectedLevel(newValue)
      }
   }

   const saveNewVacancy = () => {
      const data = {
         creation_date: formattedDate,
         vacancy_name: value,
         level: selectedLevel,
         requirements_vacancy: description,
         vendor: id,
      }
      dispatch(addNewVacancy(data))
         .unwrap()
         .then(() => {
            showSnackbar({
               message: 'Новая вакансия успешно добавлена!',
               severity: 'success',
            })
            onCloseModalHandlerVacansy()
            dispatch(getSearchVendors(''))
            dispatch(getVendorsDetailCart(id))
            dispatch(getVacansy())
         })
         .catch(() => {
            showSnackbar({
               message: 'Правильно заполните все поля!',
               severity: 'warning',
            })
         })
   }
   return (
      <ModalComponent
         open
         onClose={onCloseModalHandlerVacansy}
         width="60.4375rem"
         height="47.1875rem"
         border="1px solid #fff"
      >
         <Container>
            <BrandBlock>
               <UiButton
                  width="6.625rem"
                  height="2.0625rem"
                  border="1px solid #F9F9F9"
                  borderRadius="0.625rem"
                  background="rgba(84, 71, 170, 0.93)"
               >
                  Company
               </UiButton>
               <Icon />
               <Brand>Nike</Brand>
            </BrandBlock>
            <div>
               <InputTitle>Vacancy Name</InputTitle>
               <UiInput
                  value={value}
                  onChange={onChangeInputValue}
                  background="#252335"
                  width="30.8125rem"
                  height="2.0625rem"
                  type="tel"
                  colors="#fff"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <LevelContainer>
               <Level>Level</Level>
               <SelectBlock onChange={onChangeOption} value={selectedLevel}>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Middle</option>
                  <option value="Middle">Senior</option>
               </SelectBlock>
               <DateOfCartDetailStyle>
                  <DateOfCartDetail
                     setSelectedDate={setSelectedDate}
                     selectedDate={selectedDate}
                  />
               </DateOfCartDetailStyle>
            </LevelContainer>
            <InputContainer>
               <InputTitle>Requirements</InputTitle>
               <UiInput
                  value={description}
                  onChange={onChangeInputValueDescription}
                  className="custom-width-input"
                  multiline
                  rows={9}
                  type="text"
                  colors="#fff"
                  borderradius="0.626rem"
                  background="#252335"
                  borderColor="#fff"
               />
            </InputContainer>
            <BlockBtn>
               <UiButton
                  width="5.375rem"
                  height="2.0625rem"
                  border="1px solid #F9F9F9"
                  borderRadius="0.625rem"
                  background="#252335"
                  onClick={onCloseModalHandlerVacansy}
               >
                  Сancel
               </UiButton>
               <UiButton
                  width="5.375rem"
                  height="2.0625rem"
                  border="1px solid #F9F9F9"
                  borderRadius="0.625rem"
                  background="#252335"
                  onClick={saveNewVacancy}
               >
                  Save
               </UiButton>
            </BlockBtn>
         </Container>
      </ModalComponent>
   )
}

const ModalComponent = styled(UiModal)`
   display: flex;
   justify-content: center;
   background-color: #1e1f22;
`
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin-top: 5.81rem;
   .custom-width-input {
      width: 30.8125rem;
   }
`
const InputTitle = styled('p')`
   color: #fff;
   font-size: 1.25rem;
   font-weight: 500;
   padding-bottom: 0.5rem;
`
const BlockBtn = styled('div')`
   display: flex;
   gap: 2.88rem;
   justify-content: flex-end;
   margin-top: 0.56rem;
`
const SelectBlock = styled('select')`
   width: 6.625rem;
   height: 2.0625rem;
   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 1.25rem;
   border: 1px solid #f9f9f9;
   border-radius: 0.625rem;
   background: rgba(84, 71, 170, 0.93);
   cursor: pointer;
`
const InputContainer = styled('div')`
   margin-top: 3.5rem;
`
const Level = styled('p')`
   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 1.25rem;
`
const LevelContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 1rem;
`
const Brand = styled('p')`
   font-size: 1rem;
   font-weight: 600;
   color: #fff;
`
const BrandBlock = styled('div')`
   display: flex;
   align-items: center;
   gap: 1rem;
`
const DateOfCartDetailStyle = styled('div')`
   margin-left: 3rem;
`
