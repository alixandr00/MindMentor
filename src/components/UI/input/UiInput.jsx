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
            placeholderstyles={placeholderStyles}
            ref={ref}
            {...other}
         />
      )
   }
)

const MyStyledInput = styled(TextField)(({ ...props }) => ({
   input: {
      padding: props.padding || 0,
      color: props.color || 'white',
      width: props.width || '11.25rem',
      backgroundColor: props.backgroundcolor || 'transparent',
      background: props.background || 'transparent !important',
      border: props.border || '1px solid transparent',

      paddingLeft: props.paddingleft || '15px',
      ...props.placeholderstyles,
   },
   '& .MuiInputBase-input': {
      height: props.height || '2.25rem',
      fontSize: '1.2rem',
      fontWeight: '400',
   },
   '& input::placeholder': {
      color: props.placeholdercolor || 'gray',
   },
   '& label': {
      fontSize: '1rem',
      fontFamily: 'Bai Jamjuree',
   },
   '& .MuiOutlinedInput-root': {
      color: '#fff',
      '& fieldset': {
         border: props.border || '1px solid #fff',
         borderRadius: props.borderradius || '5px',
      },
      '&:hover fieldset': {
         borderColor: props.hoverbordercolor || '1px solid #fff',
      },
      '&.Mui-focused fieldset': {
         borderColor: props.focusbordercolor || '1px solid green',
         border: props.border || '1px solid #fff',
      },
   },
   '& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root': {
      fontFamily: 'Bai Jamjuree',
      color: 'white',
   },
   '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      fontFamily: 'Bai Jamjuree',
      color: 'white',
   },
}))
