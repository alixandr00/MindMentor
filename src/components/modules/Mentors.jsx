import React from 'react'
import { HelloSuperAdmin } from '../Interns/HelloSuperAdmin'
import { MentorsCards } from '../mentors/MentorsCards'

export const Mentors = () => {
   return (
      <div>
         <HelloSuperAdmin>
            <MentorsCards />
         </HelloSuperAdmin>
      </div>
   )
}
