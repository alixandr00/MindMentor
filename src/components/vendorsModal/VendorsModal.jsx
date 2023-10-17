import { Button, styled } from '@mui/material'
import React from 'react'
import { UiInput } from '../UI/input/UiInput'
import { UiModal } from '../UI/modal/UiModal'

export const VendorsModal = () => {
   return (
      <ModalComponent open width="60.4375rem" height="47.1875rem">
         <BlockInput>
            <div>
               <InputTitle>Company Name</InputTitle>
               <UiInput
                  width="30.8125rem"
                  height="2.0625rem"
                  type="text"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <div>
               <InputTitle>Email</InputTitle>
               <UiInput
                  width="30.8125rem"
                  height="2.0625rem"
                  type="email"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <div>
               <InputTitle>Address</InputTitle>
               <UiInput
                  width="30.8125rem"
                  height="2.0625rem"
                  type="text"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <div>
               <InputTitle>Phone Number</InputTitle>
               <UiInput
                  width="30.8125rem"
                  height="2.0625rem"
                  type="tel"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <div>
               <InputTitle>Phone Number</InputTitle>
               <UiInput
                  width="30.8125rem"
                  height="6.625rem"
                  type="text"
                  borderColor="#fff"
                  borderradius="0.626rem"
               />
            </div>
            <div>
               <Button>Delete</Button>
               <Button>Save</Button>
            </div>
         </BlockInput>
      </ModalComponent>
   )
}

const BlockInput = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.12rem;
   position: relative;
`
const InputTitle = styled('p')`
   color: #fff;
   font-size: 1.25rem;
   font-weight: 500;
   padding-bottom: 0.5rem;
`
const ModalComponent = styled(UiModal)`
   display: flex;
   justify-content: center;
   background-color: #1e1f22;
`
