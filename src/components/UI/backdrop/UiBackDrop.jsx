import { styled } from '@mui/material'
import React from 'react'

export const UiBackdrop = ({ open, onClose }) => {
   return (
      <BackDrop
         style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            display: open ? 'block' : 'none',
         }}
         onClick={onClose}
      />
   )
}

const BackDrop = styled('div')({})
