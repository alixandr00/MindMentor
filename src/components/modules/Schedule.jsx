import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { TableInterviow } from '../UI/table/TableInterviow'
import {
   arrayInterviow,
   headerArrayInterview,
} from '../../utils/table-students'
import { NewInterviews } from '../UI/table/NewTableInterviows'
import { interviewThunk } from '../../store/interview/interview.thunk'

export const Schedule = () => {
   const dispatch = useDispatch()
   const getInterviews = useSelector((state) => state.interview.getInterview)
   const [openDeleteModal, setOpenDeleteModal] = useState(false)
   const [intId, setIntId] = useState(null)
   const [names, onChangeName] = useState('')

   const onChangeHandler = (e) => {
      onChangeName(e.target.value)
   }
   const onOpenDeleteModal = () => {
      setOpenDeleteModal(true)
   }
   const onCloseDeleteModal = () => {
      setOpenDeleteModal(false)
   }

   useEffect(() => {
      dispatch(interviewThunk())
   }, [])

   return (
      <Container>
         {getInterviews.map((el) => (
            <NewInterviews
               intId={intId}
               setIntId={setIntId}
               openDeleteModal={openDeleteModal}
               onCloseDeleteModal={onCloseDeleteModal}
               names={names}
               onChangeHandler={onChangeHandler}
            >
               <TableInterviow
                  intern={el.intern}
                  onOpenDeleteModal={onOpenDeleteModal}
                  array={arrayInterviow}
                  headerArray={headerArrayInterview}
               />
            </NewInterviews>
         ))}
         <Outlet />
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
`
