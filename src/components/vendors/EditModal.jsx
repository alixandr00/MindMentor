/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'
import { styled } from '@mui/material'
import { UiInput } from '../UI/input/UiInput'
import { UiModal } from '../UI/modal/UiModal'
import { UiButton } from '../UI/button/UiButton'
import {
   editDetailCart,
   getVendorsDetailCart,
} from '../../store/vendors/vendors.thunk'
import { showSnackbar } from '../UI/snackbar/Snackbar'

export const EditModal = ({ onCloseEditModal }) => {
   const dispatch = useDispatch()
   const { id, name, email, contact_number, about_company, address } =
      useSelector((state) => state.vendor.vendorsDetail)

   const schemaEmail = z.object({
      email: z
         .string()
         .nonempty('Заполните обязательные поля')
         .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, {
            message: 'Пожалуйста, введите корректный адрес электронной почты.',
         }),
   })

   const schemaPhoneNumber = z.object({
      phoneNumber: z
         .string()
         .nonempty('Заполните обязательные поля')
         .min(10, 'Номер телефона должен состоять из 10 символов')
         .regex(/^0\d{9}$/, {
            message: 'Введите корректный номер телефона, начинающийся с 0 ',
         }),
   })
   const schemaDescription = z.object({
      descriptions: z
         .string()
         .nonempty('Заполните обязательные поля')
         .max(
            290,
            'Длина текста превышает допустимый лимит. Пожалуйста, сократите текст.'
         ),
   })
   const [valueName, setValueName] = useState(name)
   const [valueEmail, setValueEmail] = useState(email)
   const [valueAdress, setValueAdress] = useState(address)
   const [valueNum, setValueNum] = useState(contact_number)
   const [valueDesc, setValueDesc] = useState(about_company)
   const [emailrError, setEmailError] = useState(false)
   const [phoneNumberError, setPhoneNumberError] = useState(false)
   const [descriptionsErrorss, setDescriptionsErrorss] = useState(false)
   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

   const onChangeValue = (e) => {
      setValueName(e.target.value)
   }
   const onChangeEmail = (e) => {
      const email = e.target.value
      setValueEmail(email)

      try {
         schemaEmail.parse({
            email: email,
         })
         setEmailError('')
      } catch (error) {
         setEmailError(
            'Пожалуйста, введите корректный адрес электронной почты.'
         )
      }
   }
   const onChangeAdress = (e) => {
      setValueAdress(e.target.value)
   }
   const onChangeNum = (e) => {
      const phoneNumber = e.target.value
      setValueNum(phoneNumber)

      try {
         schemaPhoneNumber.parse({
            phoneNumber: phoneNumber,
         })
         setPhoneNumberError('')
      } catch (error) {
         setPhoneNumberError(
            'Номер телефона должен начинаться с 0 и содержать 10 цифр'
         )
      }
   }
   const onChangeDesc = (e) => {
      const descriptions = e.target.value
      setValueDesc(descriptions)

      try {
         schemaDescription.parse({
            descriptions: descriptions,
         })
         setDescriptionsErrorss('')
      } catch (error) {
         setDescriptionsErrorss(
            'Длина текста превышает допустимый лимит. Пожалуйста, сократите текст.'
         )
      }
   }
   const canSubmit = () => {
      if (valueNum && !phoneNumberError) {
         setIsSubmitDisabled(false)
      } else {
         setIsSubmitDisabled(true)
      }
   }

   useEffect(canSubmit, [valueNum, phoneNumberError])

   const editUserCards = () => {
      const data = {
         name: valueName,
         address: valueAdress,
         email: valueEmail,
         contact_number: valueNum,
         about_company: valueDesc,
         vacancy: 33,
         user: 1,
      }
      dispatch(editDetailCart({ id, data })).then((resultAction) => {
         const { error } = resultAction
         if (!error) {
            showSnackbar({
               message: 'Данные о студенте успешно обнавлены!',
               severity: 'success',
            })
            dispatch(getVendorsDetailCart(id))
            onCloseEditModal()
            setValueName('')
            setValueEmail('')
            setValueAdress('')
            setValueNum('')
            setValueDesc('')
            setIsSubmitDisabled(true)
         } else {
            showSnackbar({
               message:
                  'Все поля должны быть заполнены. Пожалуйста, попробуйте еще раз.',
               severity: 'warning',
            })
         }
      })
   }

   return (
      <ModalComponent
         open
         width="60.4375rem"
         height="50rem"
         border="1px solid #fff"
         onClose={onCloseEditModal}
      >
         <Container>
            <Image
               src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
               alt="user"
            />
            <div>
               <InputTitle>Company Name</InputTitle>
               <UiInput
                  value={valueName}
                  onChange={onChangeValue}
                  background="#252335"
                  width="30.8125rem"
                  height="2.0625rem"
                  type="text"
                  colors="#fff"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
               {emailrError && <ErrorText>{emailrError}</ErrorText>}
            </div>
            <div>
               <InputTitle>Email</InputTitle>
               <UiInput
                  value={valueEmail}
                  onChange={onChangeEmail}
                  background="#252335"
                  width="30.8125rem"
                  height="2.0625rem"
                  type="email"
                  colors="#fff"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <div>
               <InputTitle>Address</InputTitle>
               <UiInput
                  value={valueAdress}
                  onChange={onChangeAdress}
                  background="#252335"
                  width="30.8125rem"
                  height="2.0625rem"
                  type="text"
                  colors="#fff"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <div>
               <InputTitle>Phone Number</InputTitle>
               <UiInput
                  value={valueNum}
                  onChange={onChangeNum}
                  background="#252335"
                  width="30.8125rem"
                  height="2.0625rem"
                  type="tel"
                  colors="#fff"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
               {phoneNumberError && <ErrorText>{phoneNumberError}</ErrorText>}
            </div>
            <div>
               <InputTitle>More about company</InputTitle>
               <UiInput
                  value={valueDesc}
                  onChange={onChangeDesc}
                  className="custom-width-input"
                  multiline
                  rows={3.5}
                  type="text"
                  colors="#fff"
                  borderradius="0.626rem"
                  background="#252335"
                  borderColor="#fff"
               />
               {descriptionsErrorss && (
                  <ErrorText>{descriptionsErrorss}</ErrorText>
               )}
            </div>
            <BlockBtn>
               <UiButton
                  width="5.375rem"
                  height="2.0625rem"
                  border="1px solid #F9F9F9"
                  borderRadius="0.625rem"
                  background="#252335"
                  onClick={onCloseEditModal}
               >
                  Сancel
               </UiButton>
               <UiButton
                  onClick={editUserCards}
                  width="5.375rem"
                  height="2.0625rem"
                  border="1px solid #F9F9F9"
                  borderRadius="0.625rem"
                  background="#252335"
                  disabled={isSubmitDisabled}
               >
                  Save
               </UiButton>
            </BlockBtn>
         </Container>
      </ModalComponent>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.12rem;
   position: relative;
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
const ModalComponent = styled(UiModal)`
   display: flex;
   justify-content: center;
   background-color: #1e1f22;
`
const BlockBtn = styled('div')`
   display: flex;
   gap: 2.88rem;
   justify-content: flex-end;
   margin-top: 0.56rem;
`
const Image = styled('img')`
   position: relative;
   left: 10rem;
   width: 9.875rem;
   height: 9.875rem;
   border-radius: 100%;
`
const ErrorText = styled('p')`
   color: red;
   font-size: 0.8125rem;
   margin-top: 0.2rem;
`
