/* eslint-disable camelcase */
import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { ReactComponent as Message } from '../../assets/icons/message.svg'
import { ReactComponent as Telephon } from '../../assets/icons/Tel.svg'
import { ReactComponent as Location } from '../../assets/icons/Location.svg'
import { ReactComponent as User } from '../../assets/icons/User Plus.svg'
import { ReactComponent as Square } from '../../assets/icons/Square Arrow Right Up.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrow-down.svg'
import { ReactComponent as Delete } from '../../assets/icons/deleteicon.svg'
import { ReactComponent as Edit } from '../../assets/icons/editIcon.svg'
import { DetailCartModal } from './DetailCartModal'
import { DateOfCartDetail } from '../UI/dateOfCartDetail/DateOfCartDetail'
import {
   deleteUserCartThunk,
   getDetailVendors,
} from '../../store/vendors/vendors.thunk'
import { UiModal } from '../UI/modal/UiModal'
import { UiButton } from '../UI/button/UiButton'

export const DetailCart = ({ onClosingHandler }) => {
   const dispatch = useDispatch()
   const { id, name, address, email, contact_number, about_company } =
      useSelector((state) => state.vendor.vendorsDetailCart)
   const [openDetailCart, setOpenDetailCart] = useState(false)
   const [openDeleteModal, setOpenDeleteModal] = useState(false)

   const onOpenDetailCarthandler = () => {
      setOpenDetailCart(true)
   }
   const onCloseDeleteModalHandler = () => {
      setOpenDeleteModal(false)
   }
   const onOpenDeleteModalHandler = () => {
      setOpenDeleteModal(true)
   }
   const onCloseDetailCarthandler = () => {
      setOpenDetailCart(false)
   }

   const deleteCartModal = () => {
      dispatch(deleteUserCartThunk(id))
   }

   useEffect(() => {
      dispatch(getDetailVendors())
   }, [])

   return (
      <Container>
         <CloseIconBlock>
            <IconsClose onClick={onClosingHandler} />
         </CloseIconBlock>
         <ContainerChilde>
            <Title>{name}</Title>
            <BlockImage>
               <Image
                  src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png"
                  alt="nike"
               />
               <BrendDescription>
                  <MessageBlock>
                     <Message />
                     <p>{email}</p>
                  </MessageBlock>
                  <TelephonBlock>
                     <Telephon />
                     <p>{contact_number}</p>
                  </TelephonBlock>
                  <LocationBlock>
                     <Location />
                     <p>{address}</p>
                  </LocationBlock>
               </BrendDescription>
            </BlockImage>
            <Description>{about_company}</Description>
         </ContainerChilde>
         <UserBlock>
            <User />
            <p>Vacancy</p>
            <DeleteAndEdit>
               <DeleteStyle onClick={onOpenDeleteModalHandler} />
               <EditStyle />
            </DeleteAndEdit>
         </UserBlock>
         <VacancyBlock>
            <ContainerChildrenArrow>
               <JsBlock>
                  <JavaScriptText>JavaScript Developer</JavaScriptText>
                  <Arrow onClick={onOpenDetailCarthandler} />
               </JsBlock>
               <BlockArrow>
                  <Square />
                  <p>Senior</p>
               </BlockArrow>
               <DateOfCartDetail />
            </ContainerChildrenArrow>

            <ContainerChildrenArrow>
               <JsBlock>
                  <JavaScriptText>JavaScript Developer</JavaScriptText>
                  <Arrow onClick={onOpenDetailCarthandler} />
               </JsBlock>
               <BlockArrow>
                  <Square />
                  <p>Senior</p>
               </BlockArrow>
               <DateOfCartDetail />
            </ContainerChildrenArrow>

            <ContainerChildrenArrow>
               <JsBlock>
                  <JavaScriptText onClick={onOpenDetailCarthandler}>
                     JavaScript Developer
                  </JavaScriptText>
                  <Arrow />
               </JsBlock>
               <BlockArrow>
                  <Square />
                  <p>Senior</p>
               </BlockArrow>
               <DateOfCartDetail />
            </ContainerChildrenArrow>
         </VacancyBlock>
         {openDetailCart ? (
            <DetailCartModal
               onCloseDetailCarthandler={onCloseDetailCarthandler}
            />
         ) : (
            ''
         )}
         {openDeleteModal ? (
            <Modal open>
               <p>Are you sure that you want to delete this Vendor?</p>
               <UiButtonBlock>
                  <Button
                     onClick={deleteCartModal}
                     backgroundColor="linear-gradient(180deg, rgba(4, 1, 22, 0.93) 0%, rgba(43, 45, 49, 0.00) 100%)"
                  >
                     Yes
                  </Button>
                  <Button
                     onClick={onCloseDeleteModalHandler}
                     backgroundColor="linear-gradient(180deg, rgba(4, 1, 22, 0.93) 0%, rgba(43, 45, 49, 0.00) 100%)"
                  >
                     No
                  </Button>
               </UiButtonBlock>
            </Modal>
         ) : (
            ''
         )}
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
   width: 31.875rem;
   padding: 0 0.5rem 2.31rem 0;
   height: 100%;
   border-radius: 0.625rem;
   background-color: #1e1f22;
   border: 1px solid #fff;
`

const ContainerChilde = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Title = styled('p')`
   color: #fff;
   margin-top: 1.81rem;
   font-size: 1.5rem;
   font-weight: 600;
`

const BlockImage = styled('div')`
   display: flex;
   gap: 1rem;
   margin-top: 1.56rem;
`
const Image = styled('img')`
   width: 6.9375rem;
   height: 6.375rem;
   border-radius: 6.9375rem;
`
const BrendDescription = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.12rem;
`
const MessageBlock = styled('div')`
   display: flex;
   gap: 0.5rem;
   align-items: center;
   p {
      color: #fff;
      font-size: 0.8125rem;
      font-weight: 500;
   }
`
const TelephonBlock = styled('div')`
   display: flex;
   gap: 0.5rem;
   align-items: center;
   p {
      color: #fff;
      font-size: 0.8125rem;
      font-weight: 500;
   }
`
const LocationBlock = styled('div')`
   display: flex;
   gap: 0.5rem;
   align-items: center;
   p {
      color: #fff;
      font-size: 0.8125rem;
      font-weight: 500;
   }
`
const Description = styled('p')`
   color: #fff;
   text-align: center;
   font-size: 1rem;
   font-weight: 600;
   width: 27.1875rem;
   margin-top: 0.94rem;
`
const UserBlock = styled('div')`
   display: flex;
   gap: 1rem;
   margin-top: 1.94rem;
   margin-left: 1rem;
   p {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
   }
`

const BlockArrow = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.3rem;
   margin-top: 0.31rem;
   p {
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
   }
`
const ContainerChildrenArrow = styled('div')`
   width: 25.4375rem;
   height: 3.25rem;
   border-radius: 0.625rem;
   background: rgba(84, 71, 170, 0.93);
   padding: 0 1rem 0 1.81rem;
`
const JavaScriptText = styled('p')`
   color: #fff;
   font-size: 0.8125rem;
   font-weight: 600;
`
const VacancyBlock = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin-top: 1rem;
   align-items: center;
`
const JsBlock = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 0.25rem;
`
const CloseIconBlock = styled('div')`
   display: flex;
   justify-content: flex-end;
`
const IconsClose = styled(CloseIcon)`
   margin-top: 0.5rem;
   color: #fff;
   cursor: pointer;
`
const DeleteAndEdit = styled('div')`
   display: flex;
   width: 58%;
   gap: 1rem;
   justify-content: flex-end;
`
const EditStyle = styled(Edit)`
   cursor: pointer;
`
const DeleteStyle = styled(Delete)`
   cursor: pointer;
`
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
