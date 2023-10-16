import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import React, { forwardRef } from 'react'

export const UiInput = forwardRef(
   (
      {
         label,
         type,
         id,
         value,
         onChange,
         border,
         placeholder,

         ...other
      },
      ref
   ) => {
      const placeholderStyles = {}

      if (placeholder === 'Description') {
         placeholderStyles['::placeholder'] = {
            color: '#fff',
            transform: 'translateY(-65px)',
            fontSize: '1.25rem',
            fontWeight: '500',
         }
      }
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
            placeholderStyles={placeholderStyles}
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
      ...props.placeholderStyles,
   },
   '& .MuiInputBase-input': {
      height: props.height || '2.25rem',
      fontSize: '1.2rem',
      fontWeight: '400',
   },
   '& label': {
      fontSize: '1rem',
      fontFamily: 'CarePro',
   },
   '& .MuiOutlinedInput-root': {
      color: '#fff',
      '& fieldset': {
         border: props.border || '1px solid #fff',
         borderRadius: props.borderRadius || '5px',
      },
      '&:hover fieldset': {
         borderColor: props.hoverBorderColor || '1px solid #fff',
      },
      '&.Mui-focused fieldset': {
         borderColor: props.focusBorderColor || '1px solid green',
         border: props.border || '1px solid #fff',
      },
   },
}))
