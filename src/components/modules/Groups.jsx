import React from 'react'
import { GroupsCards } from '../groups/GroupsCards'
import { NewGroups } from '../groups/NewGroups'

export const Groups = () => {
   return (
      <NewGroups>
         <GroupsCards />
      </NewGroups>
   )
}
