import { FormControl, MenuItem, Select, styled } from '@mui/material'
import React, { useState } from 'react'

export const InternsAddStudentModalSelect = ({ dataMenuItem, name }) => {
   const [value, setValue] = useState('')

   const handleChange = (e) => {
      setValue(e.target.value)
   }

   return (
      <Container>
         <FormControlStyle
            fullWidth
            sx={{
               background: '#252335 !important',
            }}
         >
            <SelectStyle
               sx={{
                  padding: 0,
               }}
               name={name}
               value={value}
               onChange={handleChange}
            >
               {dataMenuItem.map((item) => (
                  <MenuItemStyle key={item.id} value={item.name}>
                     {item.name}
                  </MenuItemStyle>
               ))}
            </SelectStyle>
         </FormControlStyle>
      </Container>
   )
}

const Container = styled('div')(() => ({}))

const FormControlStyle = styled(FormControl)(() => ({}))

const SelectStyle = styled(Select)(() => ({
   width: '120px',

   '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
      {
         padding: '0.375rem 1rem !important',
      },

   backgroundColor: '#252335',

   color: '#FFF',
   fontFamily: 'Bai Jamjuree',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
}))

const MenuItemStyle = styled(MenuItem)`
   background-color: #252335 !important;

   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 1rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
`
