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
         border,
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
               border={border}
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
         padding: props.classpadding === 'true' && '3px 14px',
      },
   })
)

const StyleIconButton = styled(IconButton)`
   /* position: absolute;
   left: 26.25rem; */
   display: flex;
`
