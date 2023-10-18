import React from 'react'
import { GroupsCards } from '../groups/GroupsCards'
import { HelloSuperAdmin } from '../Interns/HelloSuperAdmin'

export const Groups = () => {
   return (
      <div>
         <HelloSuperAdmin>
            <GroupsCards />
         </HelloSuperAdmin>
      </div>
   )
}
