/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { styled } from '@mui/material'
import { GmailIcon, LocationIcon, PhoneIcon } from '../../assets/icons'
import { ReactComponent as Delete } from '../../assets/icons/deleteicon.svg'
import { UiModal } from '../UI/modal/UiModal'
import { UiButton } from '../UI/button/UiButton'
import {
   deleteVendors,
   getVendorsDetailCart,
} from '../../store/vendors/vendors.thunk'
import { showSnackbar } from '../UI/snackbar/Snackbar'
import { vendorsSlice } from '../../store/vendors/vendors.slice'

export const VendorsCards = () => {
   const dispatch = useDispatch()
   const location = useLocation()
   const { vendorSearch } = useSelector((state) => state.vendor)

   const [openDeleteModal, setOpenDeleteModal] = useState(false)
   const [selectedId, setSelectedId] = useState(null)
   const [selId, setSelId] = useState(null)

   const onCloseDeleteModalHandler = () => {
      setOpenDeleteModal(false)
   }
   const onOpenDeleteModalHandler = () => {
      setOpenDeleteModal(true)
   }

   const onDeleteCart = () => {
      dispatch(deleteVendors(selectedId)).then((resultAction) => {
         const { error } = resultAction
         if (!error) {
            showSnackbar({
               message: 'Успешно удалено!',
               severity: 'success',
            })
         } else {
            showSnackbar({
               message:
                  'Не удалось удалить элемент. Пожалуйста, попробуйте еще раз.',
               severity: 'warning',
            })
         }
      })
   }

   useEffect(() => {
      dispatch(getVendorsDetailCart(selId))
   }, [selId])

   return (
      <Container>
         {vendorSearch?.map((card) => (
            <ContainerCards
               key={card.id}
               to={`vendorsDetail/${card.id}`}
               onClick={() => {
                  setSelId(card.id)
                  dispatch(vendorsSlice.actions.dd())
               }}
               className={({ isActive }) => (isActive ? 'active' : '')}
            >
               <CardHead>
                  <ImageCards imageUrl={card.image} />
                  <CompanyName>{card.name}</CompanyName>

                  {location.pathname.includes(
                     `vendorsDetail/${card.id}`
                  ) ? null : (
                     <DeleteIconContainer
                        onClick={(e) => {
                           e.preventDefault()
                           setSelectedId(card?.id)
                           onOpenDeleteModalHandler()
                        }}
                        className="delete-icon"
                     >
                        <Delete />
                     </DeleteIconContainer>
                  )}
               </CardHead>
               <CardMain>
                  <MainContainers>
                     <GmailIcon />
                     <CardsTexts>{card.email}</CardsTexts>
                  </MainContainers>
                  <MainContainers>
                     <PhoneIcon />
                     <CardsTexts>{card.contact_number}</CardsTexts>
                  </MainContainers>
                  <MainContainers>
                     <LocationIcon />
                     <CardsTexts>{card.address}</CardsTexts>
                  </MainContainers>
               </CardMain>
            </ContainerCards>
         ))}
         {openDeleteModal ? (
            <Modal open>
               <p>Are you sure that you want to delete this Vendor?</p>
               <UiButtonBlock>
                  <Button
                     onClick={onCloseDeleteModalHandler}
                     backgroundColor="linear-gradient(180deg, rgba(4, 1, 22, 0.93) 0%, rgba(43, 45, 49, 0.00) 100%)"
                  >
                     No
                  </Button>

                  <Button
                     onClick={() => {
                        onDeleteCart()
                        onCloseDeleteModalHandler()
                     }}
                     backgroundColor="linear-gradient(180deg, rgba(4, 1, 22, 0.93) 0%, rgba(43, 45, 49, 0.00) 100%)"
                  >
                     Yes
                  </Button>
               </UiButtonBlock>
            </Modal>
         ) : (
            ''
         )}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '1.20rem',
   marginTop: '2rem',
   maxHeight: '70vh',
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
   '& .active': {
      background: 'rgba(84, 71, 170, 0.93)',
   },
}))
const ContainerCards = styled(NavLink)(() => ({
   width: '14.375rem',
   height: '10.4375rem',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   padding: '1rem 1rem',
   transition: 'transform 0.3s, background 0.3s',
   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',
      transform: 'scale(1)',
   },
   '&:hover .delete-icon': {
      opacity: 1,
   },
}))

const DeleteIconContainer = styled('div')(() => ({
   display: 'flex',
   width: '100%',
   justifyContent: 'flex-end',
   cursor: 'pointer',
   opacity: 0,
}))

const CardHead = styled('div')`
   display: flex;
   gap: 0.44rem;
   align-items: center;
`
const ImageCards = styled('div')((props) => ({
   width: '2.4375rem',
   height: '2.4375rem',
   borderRadius: '2.4375rem',
   background: `url(${props.imageUrl}) center/cover no-repeat`,
}))

const CompanyName = styled('p')(() => ({
   width: '100vw',
   color: '#FFF',
   fontSize: '1rem',
   fontWeight: '600',
}))
const CardMain = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.63rem',
   marginTop: '0.56rem',
})
const MainContainers = styled('div')({
   display: 'flex',
   gap: '0.25rem',
   alignItems: 'center',
})
const CardsTexts = styled('div')({
   fontSize: '0.8125rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   color: '#FFF',
})
const Modal = styled(UiModal)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 34.1875rem;
   height: 16.8125rem;
   border-radius: 1.875rem;
   border: 1px solid #ececec;
   background: linear-gradient(
      176deg,
      #252335 26.77%,
      rgba(84, 71, 170, 0.93) 97.4%
   );
   p {
      width: 350px;
      color: #fffefe;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
   }
`
const UiButtonBlock = styled('div')`
   display: flex;
   gap: 2rem;
   margin-top: 2.75rem;
`
const Button = styled(UiButton)`
   border: 1px solid #fff;
`
