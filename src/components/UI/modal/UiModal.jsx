import { Box, Modal, styled } from '@mui/material'

export const UiModal = ({ open, onClose, children, ...rest }) => {
   return (
      <Backdrop open={open} onClose={onClose}>
         <ModalStyle {...rest}>{children}</ModalStyle>
      </Backdrop>
   )
}
const ModalStyle = styled(Box)(({ ...rest }) => ({
   position: 'fixed',
   borderRadius: rest.borderRadius || '1rem',
   backgroundColor: rest.backgroundColor || 'none',
   maxHeight: '100vh',
}))
const Backdrop = styled(Modal)(({ ...rest }) => ({
   position: 'fixed',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   top: '0',
   left: '0',
   right: '0',
   bottom: '0',
   width: '100%',
   height: '100vh',
   backgroundColor: 'rgba(240, 230, 230, 0.288)',
   backdropFilter: rest.backdropFilter || 'blur(2px)',
   zIndex: '990',
   // minHeight: '11.615rem',
}))
