import React from 'react'
import { styled } from '@mui/material'
import { UiModal } from '../UI/modal/UiModal'
import { UiButton } from '../UI/button/UiButton'

export const DeleteInternsModal = ({
   onOpen,
   onCloseModal,
   deleteInternById,
}) => {
   return (
      <UiModalStyled open={onOpen} onClose={() => onCloseModal(false)}>
         <Container>
            <TextDeleteModal>
               Are you sure that you want to delete this Group?
            </TextDeleteModal>
            <WrapperButtons>
               <UiButtonStyled onClick={() => onCloseModal(false)}>
                  No
               </UiButtonStyled>
               <UiButtonStyled onClick={() => deleteInternById()}>
                  Yes
               </UiButtonStyled>
            </WrapperButtons>
         </Container>
      </UiModalStyled>
   )
}
const UiModalStyled = styled(UiModal)({})
const Container = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '2rem',
   width: '34.1875rem',
   height: '16.8125rem',
   background:
      'linear-gradient(176deg, #252335 26.77%, rgba(84, 71, 170, 0.93) 97.4%)',
   borderRadius: '0.625rem',
   border: ' 1px solid #FFF',
})
const WrapperButtons = styled('div')({
   display: 'flex',
   gap: '2rem',
})
const UiButtonStyled = styled(UiButton)({
   width: '5rem',
   height: '2rem',
   borderRadius: '0.625rem',
   border: '1px solid #F9F9F9',
   background:
      'linear-gradient(176deg, #252335 26.77%, rgba(84, 71, 170, 0.93) 97.4%)',
})
const TextDeleteModal = styled('h2')({
   width: '22.25rem',
   height: '4.6875rem',
   color: '#FFFEFE',
   fontFamily: 'Bai Jamjuree',
   fontSize: ' 1.25rem',
   fontWeight: 500,
   textAlign: 'center',
})
