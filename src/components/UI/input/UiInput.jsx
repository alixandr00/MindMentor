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
      border: `1px solid ${bordercolor}`,
      '.MuiInputBase-input': {
         color: colors,
         padding: props.classpadding === 'true' && '3px 14px',
      },

      // '& .MuiInputBase-input': {
      //    height: props.height || '2.25rem',
      //    fontSize: '1.2rem',
      //    fontWeight: '400',
      // },

      // '& input::placeholder': {
      //    color: props.placeholdercolor || 'gray',
      // },
      // '& label': {
      //    fontSize: '1rem',
      //    fontFamily: 'Bai Jamjuree',
      // },
      // '& .MuiOutlinedInput-root': {
      //    color: '#fff',
      //    '& fieldset': {
      //       border: props.border || '1px solid #fff',
      //       borderRadius: props.borderradius || '5px',
      //    },
      //    '&:hover fieldset': {
      //       borderColor: props.hoverbordercolor || '1px solid #fff',
      //    },
      //    '&.Mui-focused fieldset': {
      //       borderColor: props.focusbordercolor || '1px solid green',
      //       border: props.border || '1px solid #fff',
      //    },
      // },
      // '& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root': {
      //    fontFamily: 'Bai Jamjuree',
      //    color: 'white',
      // },
      // '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      //    fontFamily: 'Bai Jamjuree',
      //    color: 'white',
      // },
   })
)

const StyleIconButton = styled(IconButton)`
   position: absolute;
   left: 26.25rem;
`
