import React, { forwardRef, useState } from 'react'
import { IconButton, OutlinedInput, styled } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

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
         error,
         color,
         type,
         id,
         placeholder,
         value,
         onChange,
         onBlur,
         padding,
         ...props
      },
      ref
   ) => {
      const [showPassword, setShowPassword] = useState(false)

      const handleClickShowPassword = () => setShowPassword((show) => !show)

      const passwordType = showPassword ? 'text' : 'password'

      const handleBlur = (event) => {
         if (onBlur) {
            onBlur(event)
         }
      }

      return (
         <div>
            <InputOutlained
               sx={{
                  '.MuiOutlinedInput-notchedOutline': {
                     border: '0 !important',
                  },
               }}
               value={value}
               onChange={onChange}
               error={error}
               color={color}
               placeholder={placeholder}
               id={id}
               ref={ref}
               padding={padding}
               onBlur={handleBlur}
               type={type === 'password' ? passwordType : type}
               {...props}
               endAdornment={
                  type === 'password' ? (
                     <StyleIconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                           <VisibilityIcon sx={{ color: '#fff' }} />
                        ) : (
                           <VisibilityOffIcon sx={{ color: '#fff' }} />
                        )}
                     </StyleIconButton>
                  ) : (
                     ''
                  )
               }
            />
         </div>
      )
   }
)
UiInput.displayName = 'Input'

const MyStyledInput = styled(TextField)(({ ...props }) => ({
   input: {
      padding: props.padding || 0,
      color: props.color || 'white',
      width: props.width || '11.25rem',
      backgroundColor: props.backgroundColor || 'transparent',
      background: props.background || 'transparent !important',
      border: props.border || '1px solid transparent',

      paddingLeft: props.paddingLeft || '15px',
      ...props.placeholderStyles,
   },
   '& .MuiInputBase-input': {
      height: props.height || '2.25rem',
      fontSize: '1.2rem',
      fontWeight: '400',
   },
   '& input::placeholder': {
      color: props.placeholderColor || 'gray',
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
const InputOutlained = styled(OutlinedInput)(
   ({
      width,
      height,
      padding,
      fontsize,
      background,
      borderradius,
      border,
      colors,
      bordercolor,
      ...props
   }) => ({
      width,
      height,
      padding,
      fontSize: fontsize,
      background,
      borderRadius: borderradius,
      // border: `1px solid ${bordercolor}`,
      border: props.border || '1px solid #FFFF',
      '.MuiInputBase-input': {
         color: colors,
         padding: props.classpadding === 'true' && '3px 1.5rem 3px 10px',
      },

      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
         boxSizing: 'border-box',
      },
      position: 'relative',
   })
)

const StyleIconButton = styled(IconButton)`
   position: absolute;
   left: 25rem;
   right: 0.4rem;
`
