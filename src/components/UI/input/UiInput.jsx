import React, { forwardRef, useState } from 'react'
import { IconButton, OutlinedInput, styled } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export const UiInput = forwardRef(
   (
      {
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
               {...props}
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
                           <VisibilityIcon />
                        ) : (
                           <VisibilityOffIcon />
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

const InputOutlained = styled(OutlinedInput)(
   ({
      width,
      height,
      padding,
      fontSize,
      background,
      borderradius,
      border,
      colors,
      borderColor,
      ...props
   }) => ({
      width,
      height,
      padding,
      fontSize,
      background,
      borderRadius: borderradius,
      border: `1px solid ${borderColor}`,
      '.MuiInputBase-input': {
         color: colors,
         padding: props.classpadding === 'true' && '3px 14px',
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
      fontFamily: 'Bai Jamjuree',
   },
   '& .MuiOutlinedInput-root': {
      color: '#fff',

      '& fieldset': {
         border: props.border || '1px solid transparent',
         borderRadius: props.borderRadius || '5px',
      },
      '&:hover fieldset': {
         borderColor: props.hoverBorderColor || '1px solid #fff',
         border: props.border || '1px solid transparent',
      },
      '&.Mui-focused fieldset': {
         borderColor: props.focusBorderColor || '1px solid green',
         border: props.border || '1px solid transparent',
      },
   })
)

const StyleIconButton = styled(IconButton)`
   position: absolute;
   left: 26.25rem;
`
