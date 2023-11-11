/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { UiModal } from '../UI/modal/UiModal'
import { getGroups } from '../../store/groups/groupThunk'

export const GroupsModalSelect = ({
   closeGroupModalHandler,
   openGroupModalHandler,
   setGroupId,
   setGrouppsId,
}) => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getGroups())
   }, [])
   const { groups } = useSelector((state) => state.groups)

   const clickHandler = (group) => {
      setGroupId(group)
      setGrouppsId(group.id)
      closeGroupModalHandler()
   }
   return (
      <UiModal open={openGroupModalHandler} onClose={closeGroupModalHandler}>
         <Box className="grid grid-cols-2 gap-[1rem] w-[33rem] max-h-[20rem] bg-[#311f60] overflow-y-scroll rounded-[0.5rem]">
            {groups?.map((group) => (
               <div
                  className="cursor-pointer flex justify-center items-center text-white w-[95%] h-[8rem] border border-white rounded-[0.3rem] hover:bg-gradient-to-br from-[#49318C] to-[#3F5FB0] transform hover:scale-105 transition-transform duration-300"
                  key={group.id}
                  onClick={() => clickHandler(group)}
               >
                  {group.name}
               </div>
            ))}
         </Box>
      </UiModal>
   )
}

const Box = styled('div')({
   '&::-webkit-scrollbar ': {
      width: '0.4rem',
   },
   '&::-webkit-scrollbar-track': {
      backgroundColor: ' #fff white',
   },
   '&::-webkit-scrollbar-thumb ': {
      backgroundColor: ' #fff',
      borderRadius: '0.25rem',
   },
})
