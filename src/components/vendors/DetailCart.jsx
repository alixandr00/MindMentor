/* eslint-disable camelcase */
import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { ReactComponent as Message } from '../../assets/icons/message.svg'
import { ReactComponent as Telephon } from '../../assets/icons/Tel.svg'
import { ReactComponent as Location } from '../../assets/icons/Location.svg'
import { ReactComponent as User } from '../../assets/icons/User Plus.svg'
import { ReactComponent as Square } from '../../assets/icons/Square Arrow Right Up.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrow-down.svg'
import { ReactComponent as Delete } from '../../assets/icons/deleteicon.svg'
import { ReactComponent as Edit } from '../../assets/icons/editIcon.svg'
import {
   deleteVacancyThunk,
   deleteVendors,
   getVacansyInfo,
   getVendorsDetailCart,
} from '../../store/vendors/vendors.thunk'
import { showSnackbar } from '../UI/snackbar/Snackbar'
import { DetailCartModal } from './DetailCartModal'
import { ReactComponent as Calendar } from '../../assets/icons/Calendar Date.svg'
import { EditModal } from './EditModal'
import { DeleteModal } from '../UI/deleteModal/DeleteModal'
import { EditVacancyModal } from './EditVacancyModal'

export const DetailCart = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const param = useParams()

   const { id, name, email, contact_number, about_company, address } =
      useSelector((state) => state.vendor.vendorsDetail)
   const { vacansyGet } = useSelector((state) => state.vendor)

   const [openDeleteModal, setOpenDeleteModal] = useState(false)
   const [openDeleteVacancyModal, setOpenDeletevacancyModal] = useState(false)
   const [openEditModal, setOpenEditModal] = useState(false)
   const [openVacancyDetailModal, setOpenVacancyDetailModal] = useState(false)
   const [openModalVacansy, setOpenModalVacansy] = useState(false)
   const [getId, setGetId] = useState(null)
   const [editId, setEditId] = useState(null)

   const onCloseModalHandlerVacansy = () => {
      setOpenModalVacansy(false)
   }
   const onOpenModalHandlerVacansy = () => {
      setOpenModalVacansy(true)
   }

   const onOpendeleteVacancyModal = () => {
      setOpenDeletevacancyModal(true)
   }
   const onCloseDeleteVacancyModal = () => {
      setOpenDeletevacancyModal(false)
   }

   const onOpenDetailVacancyModal = () => {
      setOpenVacancyDetailModal(true)
   }
   const onCloseDetailVacancyModal = () => {
      setOpenVacancyDetailModal(false)
   }
   const onOpenEditModal = () => {
      setOpenEditModal(true)
   }
   const onCloseEditModal = () => {
      setOpenEditModal(false)
   }

   const onCloseDeleteModalHandler = () => {
      setOpenDeleteModal(false)
   }
   const onOpenDeleteModalHandler = () => {
      setOpenDeleteModal(true)
   }
   const navigatePrevPage = () => {
      navigate('/admin/vendors')
   }

   const onDeleteVacancy = () => {
      dispatch(deleteVacancyThunk(getId))
         .unwrap()
         .then(() => {
            showSnackbar({
               message: 'Успешно удалено!',
               severity: 'success',
            })
         })
         .catch(() => {
            showSnackbar({
               message:
                  'Не удалось удалить вакансию! Пожалуйста, попробуйте ещё раз.',
               severity: 'warning',
            })
         })
   }

   const onDeleteCart = () => {
      dispatch(deleteVendors(id)).then((resultAction) => {
         const { error } = resultAction
         if (!error) {
            showSnackbar({
               message: 'Успешно удалено!',
               severity: 'success',
            })
            navigate('/admin/vendors')
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
      dispatch(getVendorsDetailCart(param.id))
      dispatch(getVacansyInfo())
   }, [])

   const itemsPerPage = 3
   const [currentPage, setCurrentPage] = useState(1)
   const startIndex = (currentPage - 1) * itemsPerPage
   const endIndex = startIndex + itemsPerPage
   const vacanciesToDisplay = vacansyGet.slice(startIndex, endIndex)
   const totalPages = Math.ceil(vacansyGet.length / itemsPerPage)
   const handlePageChange = (event, page) => {
      setCurrentPage(page)
   }

   return (
      <Container>
         <CloseIconBlock>
            <IconsClose onClick={navigatePrevPage} />
         </CloseIconBlock>
         <ContainerChilde>
            <Title>{name}</Title>
            <BlockImage>
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
               <DeleteAndEdit>
                  <DeleteStyle onClick={onOpenDeleteModalHandler} />
                  <EditStyle onClick={onOpenEditModal} />
               </DeleteAndEdit>
            </BlockImage>
            <Description>{about_company}</Description>
         </ContainerChilde>
         <UserBlock>
            <User />
            <p>Vacancy</p>
         </UserBlock>
         <VacancyBlock>
            {vacanciesToDisplay?.map((el) => (
               <ContainerChildrenArrow>
                  <JsBlock>
                     <JavaScriptText>{el.vacancy_name}</JavaScriptText>
                     <Arrow onClick={onOpenDetailVacancyModal} />
                  </JsBlock>
                  <BlockArrow>
                     <SquareBlock>
                        <Square />
                        <p>{el.level}</p>
                     </SquareBlock>
                     <CalendarStyle>
                        <Calendar />
                        <p>{el.creation_date}</p>
                     </CalendarStyle>
                     <DeleteStyles
                        onClick={() => {
                           setGetId(el.id)
                           onOpendeleteVacancyModal()
                        }}
                     />
                     <EditStyles
                        onClick={() => {
                           setEditId(el.id)
                           onOpenModalHandlerVacansy()
                        }}
                     />
                  </BlockArrow>
               </ContainerChildrenArrow>
            ))}
         </VacancyBlock>
         {openVacancyDetailModal ? (
            <DetailCartModal
               onCloseDetailVacancyModal={onCloseDetailVacancyModal}
            />
         ) : (
            ''
         )}
         {openDeleteModal ? (
            <DeleteModal
               onClose={onCloseDeleteModalHandler}
               onClick={() => {
                  onDeleteCart()
                  onCloseDeleteModalHandler()
               }}
               unClick={onCloseDeleteModalHandler}
            />
         ) : (
            ''
         )}
         {openDeleteVacancyModal ? (
            <DeleteModal
               onClick={() => {
                  onDeleteVacancy()
                  onCloseDeleteVacancyModal()
               }}
               onClose={onCloseDeleteVacancyModal}
               unClick={onCloseDeleteVacancyModal}
            />
         ) : (
            ''
         )}
         {openEditModal ? (
            <EditModal onCloseEditModal={onCloseEditModal} />
         ) : (
            ''
         )}
         {openModalVacansy ? (
            <EditVacancyModal
               id={editId}
               onCloseModalHandlerVacansy={onCloseModalHandlerVacansy}
            />
         ) : (
            ''
         )}
         <PaginationBlock>
            <Stack spacing={2}>
               <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="secondary"
               />
            </Stack>
         </PaginationBlock>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
   width: 31.875rem;
   height: 43rem;
   border-radius: 0.625rem;
   background-color: #1e1f22;
   border: 1px solid #fff;
   padding: 0px 1rem 1.31rem 1rem;
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
   width: 100%;
   margin-top: 1.56rem;
   justify-content: space-around;
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
   padding: 0 1rem 3.5rem 1.81rem;
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
const CalendarStyle = styled('div')`
   display: flex;
   gap: 0.4rem;
   margin-left: 1rem;
`
const DeleteStyles = styled(Delete)`
   width: 1rem;
   cursor: pointer;
   margin-left: 1rem;
`
const EditStyles = styled(Edit)`
   width: 1rem;
   cursor: pointer;
   margin-left: 1rem;
`
const SquareBlock = styled('div')`
   display: flex;
   gap: 0.3rem;
`
const PaginationBlock = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: auto;
   .MuiPaginationItem-root {
      color: #fff;
   }
`
