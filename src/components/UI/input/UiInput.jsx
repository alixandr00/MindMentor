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
