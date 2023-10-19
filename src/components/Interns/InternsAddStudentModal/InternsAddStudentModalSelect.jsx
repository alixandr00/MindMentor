/* eslint-disable react/no-unstable-nested-components */
import { FormControl, MenuItem, Select, styled } from '@mui/material'
import React, { useState } from 'react'
import { DownIcon, UpIcon } from '../../../assets/icons'

export const InternsAddStudentModalSelect = ({
   dataMenuItem,
   name,
   defaultName,
}) => {
   const [isSelectOpen, setIsSelectOpen] = useState(false)
   const [value, setValue] = useState(defaultName)

   const handleSelectClose = () => {
      setIsSelectOpen(false)
   }
   const handleSelectOpen = () => {
      setIsSelectOpen(true)
   }

   const handleChange = (e) => {
      setValue(e.target.value)
   }

   return (
      <Container>
         <FormControlStyle
            sx={{
               '& .css-6hp17o-MuiList-root-MuiMenu-list': {
                  paddingTop: '0 !important',
                  paddingBottom: '0 !important',
               },
            }}
         >
            <SelectStyle
               name={name}
               sx={{
                  '.MuiOutlinedInput-notchedOutline': {
                     border: '0 !important',
                  },
               }}
               value={value}
               onClose={handleSelectClose}
               onOpen={handleSelectOpen}
               onChange={handleChange}
               open={isSelectOpen}
               MenuProps={{
                  MenuListProps: {
                     disablePadding: true,
                  },
               }}
               IconComponent={() => (
                  <SelectIcon
                     onClick={(e) => {
                        e.stopPropagation()
                        setIsSelectOpen(!isSelectOpen)
                     }}
                  >
                     <UpIconStyled open={isSelectOpen} />
                     <DownIconStyled open={isSelectOpen} />
                  </SelectIcon>
               )}
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

const FormControlStyle = styled(FormControl)(() => ({
   border: '1px solid #fff',
   borderRadius: '0.625rem',
}))

const SelectStyle = styled(Select)(() => ({
   width: '8.4vw',

   '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
      {
         padding: '0.375rem 1rem !important',
      },

   backgroundColor: '#252335',
   borderRadius: '0.625rem',

   color: '#FFF',
   fontFamily: 'Bai Jamjuree',
   fontSize: '1.125rem',
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

   :hover {
      background-color: #28263a !important;
   }
`

const SelectIcon = styled('div')({
   position: 'absolute',
   right: '0.5rem',
   top: '50%',
   transform: 'translateY(-50%)',
   cursor: 'pointer',
})

const UpIconStyled = styled(UpIcon)((props) => ({
   display: props.open ? 'block' : 'none',
}))

const DownIconStyled = styled(DownIcon)((props) => ({
   display: props.open ? 'none' : 'block',
}))
