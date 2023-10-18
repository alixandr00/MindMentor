import React from 'react'
import { UiModal } from '../UI/modal/UiModal'
import { UiInput } from '../UI/input/UiInput'

export const NewMentorsModal = () => {
   return (
      <UiModal width="55rem" height="40rem" open backgroundColor="#1E1F22">
         <div>
            <UiInput />
            <UiInput />
         </div>
      </UiModal>
   )
}
