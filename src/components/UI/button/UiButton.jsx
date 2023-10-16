import React from 'react'
import { Button as ReusableButton, styled } from '@mui/material'

export const UiButton = ({
   variant,
   onClick,
   children,
   startIcon,
   icon,
   disabled,
   backgroundColor,
   color,
   ...rest
}) => {
   return (
      <ButtonStyle
         type="submit"
         variant={variant}
         onClick={onClick}
         startIcon={startIcon}
         icon={icon}
         disabled={disabled}
         backgroundColor={backgroundColor}
         color={color}
         //  borderColor={borderColor} // Передаем prop для цвета границы
         {...rest}
      >
         {children}
      </ButtonStyle>
   )
}

const ButtonStyle = styled(ReusableButton)(({ ...props }) => ({
   background:
      props.background || `linear-gradient(to right, #49318C, #3F5FB0)`,
   color: props.color || '#ffffff',
   borderRadius: props.borderRadius || '0.625rem',
   display: 'flex',
   justifyContent: props.justifyContent || 'center',
   alignItems: props.alignItems || 'center',
   padding: props.padding || '0.5rem 1rem',
   //    alignItems: 'flex-start',
   border: props.border || 'none',
   width: props.width || '7.5rem',
   height: props.height || '2rem',
   '&:hover': {
      background: props.background,
      color: props.color,
   },
   '&:disabled': {
      background: props.background || '#B2B2B2',
      color: '#FFFFFF',
   },
   '&.MuiButtonBase-root': {
      textTransform: 'none',
   },
}))
