import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import React, { forwardRef } from 'react'

export const UiInput = forwardRef(
   (
      { label, type, id, value, onChange, border, placeholder, ...other },
      ref
   ) => {
      return (
         <MyStyledInput
            size="small"
            label={label}
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            border={border}
            placeholder={placeholder}
            ref={ref}
            {...other}
         />
      )
   }
)

const MyStyledInput = styled(TextField)(({ ...props }) => ({
   input: {
      padding: props.padding || 0,
      width: props.width || '11.25rem',
      backgroundColor: props.backgroundColor || 'white',
      border: props.border || '1px solid transparent',
      paddingLeft: props.paddingLeft || '15px',
   },
   '& .MuiInputBase-input': {
      height: props.height || '2.25rem',
   },
   '& label': {
      fontSize: '1rem',
      fontFamily: 'CarePro',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         border: props.border || '1px solid #B2B2B2',
         borderRadius: props.borderRadius || '5px',
      },
      '&:hover fieldset': {
         borderColor: props.hoverBorderColor || '1px solid #000000',
      },
      '&.Mui-focused fieldset': {
         borderColor: props.focusBorderColor || '1px solid green',
         border: props.border || '1px solid #000000',
      },
   },
}))
