import React from 'react'
import { MentorsCards } from '../mentors/MentorsCards'
import { NewMentors } from '../mentors/NewMentors'

export const Mentors = () => {
   return (
      <NewMentors>
         <MentorsCards />
      </NewMentors>
   )
}
