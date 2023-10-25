/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as Square } from '../../assets/icons/Square Arrow Right Up.svg'
import { UiModal } from '../UI/modal/UiModal'
import { getVacansyDetail } from '../../store/vendors/vendors.thunk'
import { ReactComponent as Calendar } from '../../assets/icons/Calendar Date.svg'

export const DetailCartModal = () => {
   const dispatch = useDispatch()
   const param = useParams()
   const navigate = useNavigate()

   const { level, creation_date, requirements_vacancy } = useSelector(
      (state) => state.vendor.vacansyGetDetail
   )
   const { vendorsGetCart } = useSelector((state) => state.vendor)

   useEffect(() => {
      dispatch(getVacansyDetail(param.id))
   }, [])
   return (
      <Modal
         width="31.75rem"
         height="34.5625rem"
         borderRadius="0.625rem"
         backgroundColor="rgba(84, 71, 170, 0.93)"
         open
      >
         <Childe>
            <Title>JavaScript Developer</Title>
            {vendorsGetCart.map((el) => (
               <CloseIconStyle
                  key={el.id}
                  onClick={() =>
                     navigate(`/admin/vendors/vendorsDetail/${el.id}`)
                  }
               />
            ))}
         </Childe>
         <BlockArrow>
            <Square />
            <p>{level}</p>
            <Date>
               <Calendar />
               <p>{creation_date}</p>
            </Date>
         </BlockArrow>
         <Desc>Описание</Desc>
         <Description>{requirements_vacancy}</Description>
      </Modal>
   )
}

const Modal = styled(UiModal)`
   border: 1px solid #fff;
   padding: 0 1rem 0 2.56rem;
`
const Title = styled('p')`
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
`
const BlockArrow = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.3rem;
   margin-top: 0.69rem;
   p {
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
   }
`

const Desc = styled('p')`
   width: 25.625rem;
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
   margin-top: 2.25rem;
`
const Description = styled('p')`
   width: 25.625rem;
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
`
const Childe = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 1.19rem;
`
const Date = styled('div')`
   display: flex;
   gap: 0.4rem;
   align-items: center;
   margin-left: 1rem;
`
const CloseIconStyle = styled(CloseIcon)`
   color: #fff;
   cursor: pointer;
`
