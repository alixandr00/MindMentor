import { axiosFileInstance } from '../config/axiosFileInstants'
import { axiosInstance } from '../config/axiosInstants'

export const getStatusMentorsRequest = ({ status, search }) => {
   return axiosInstance.get(
      `/mentor/?${search ? `search=${search}&` : ''}status=${status}`
   )
}

export const getMentorDetailRequest = (id) => {
   return axiosFileInstance.get(`/mentor/${id}`)
}

export const postCVMentorRequest = (data) => {
   return axiosFileInstance.post('/cv/create/', data)
}

export const createMentorRequest = (data) => {
   return axiosFileInstance.post('/mentor/create/', data)
}

export const deleteMentorRequest = (id) => {
   return axiosInstance.delete(`/mentor/${id}`)
}

export const getStackRequest = () => {
   return axiosInstance.get(`/stack/`)
}

export const putEditMentorRequest = (id, data) => {
   return axiosInstance.put(`/mentor/${id}/`, data)
}

/*

import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import { MenuBar } from './MenuBar'
import { chengTextarea } from '../../../store/mentors/mentor.slice'

const extensions = [StarterKit]

export const MentorModalTextarea = () => {
   const dispatch = useDispatch()
   const { createMentorForm } = useSelector((state) => state.mentor)
   const [focusTextareaEducation, setFocusTextareaEducation] = useState(false)
   const [focusTextareaExtensions, setFocusTextareaExtensions] = useState(false)
   const [focusTextareaSkills, setFocusTextareaSkills] = useState(false)
   const [educationValue, setEducationValue] = useState('')
   const [workExperienceValue, setWorkExperience] = useState('')
   const [skillsValue, setSkills] = useState('')

   const onCollectorEducationValue = (e) => {
      setEducationValue(e)
   }

   const onCollectorWorkExperienceValue = (e) => {
      setWorkExperience(e)
   }

   const onCollectorSkills = (e) => {
      setSkills(e)
   }

   const onFocusEducationHandler = () => {
      setFocusTextareaEducation(true)
   }

   const onBlurEducationHandler = () => {
      setFocusTextareaEducation(false)

      dispatch(
         chengTextarea({
            education: educationValue,
            workExperience: workExperienceValue,
            skills: skillsValue,
         })
      )
   }

   const onFocusExtensionsHandler = () => {
      setFocusTextareaExtensions(true)
   }

   const onBlurExtensionsHandler = () => {
      setFocusTextareaExtensions(false)

      dispatch(
         chengTextarea({
            education: educationValue,
            workExperience: workExperienceValue,
            skills: skillsValue,
         })
      )
   }

   const onFocusSkillsHandler = () => {
      setFocusTextareaSkills(true)
   }

   const onBlurSkillsHandler = () => {
      setFocusTextareaSkills(false)

      dispatch(
         chengTextarea({
            education: educationValue,
            workExperience: workExperienceValue,
            skills: skillsValue,
         })
      )
   }

   return (
      <Container
         focusTextareaOne={focusTextareaEducation}
         focusTextareaTwo={focusTextareaExtensions}
         focusTextareaThree={focusTextareaSkills}
      >
         <BoxTextarea className="three">
            <EditorProviderStyle
               slotBefore={<MenuBar onCollectorValue={onCollectorSkills} />}
               onFocus={onFocusSkillsHandler}
               extensions={extensions}
               content={createMentorForm.skills}
               onBlur={onBlurSkillsHandler}
            />
         </BoxTextarea>

         <BoxTextarea className="one" placeholder="Suu">
            <EditorProviderStyle
               slotBefore={
                  <MenuBar onCollectorValue={onCollectorEducationValue} />
               }
               extensions={extensions}
               content={createMentorForm.education}
               onBlur={onBlurEducationHandler}
               onFocus={onFocusEducationHandler}
            />
         </BoxTextarea>

         <BoxTextarea className="two">
            <EditorProviderStyle
               slotBefore={
                  <MenuBar onCollectorValue={onCollectorWorkExperienceValue} />
               }
               onFocus={onFocusExtensionsHandler}
               extensions={extensions}
               content={createMentorForm.workExperience}
               onBlur={onBlurExtensionsHandler}
            />
         </BoxTextarea>
      </Container>
   )
}

const Container = styled('div')(({
   focusTextareaOne,
   focusTextareaTwo,
   focusTextareaThree,
}) => {
   const minHeight = '4.7hv'
   const maxHeight = '32vh'
   let heightOne = '12vh'
   let heightTwo = '12vh'
   let heightThree = '12vh'

   if (focusTextareaOne) {
      heightOne = '32vh'
      heightTwo = '4.7vh'
      heightThree = '4.7vh'
   } else if (focusTextareaTwo) {
      heightOne = '4.7vh'
      heightTwo = '32vh'
      heightThree = '4.7vh'
   } else if (focusTextareaThree) {
      heightOne = '12vh'
      heightTwo = '12vh'
      heightThree = '12vh'
   }

   return {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',

      '& .one': {
         '& .ProseMirror': {
            minHeight,
            height: heightOne,
            maxHeight,
            transition: '0.8s',

            overflowY: 'auto',

            '&::-webkit-scrollbar': {
               display: 'none',
            },
         },
      },

      '& .two': {
         '& .ProseMirror': {
            minHeight,
            height: heightTwo,
            maxHeight,
            transition: '0.8s',

            overflowY: 'auto',

            '&::-webkit-scrollbar': {
               display: 'none',
            },
         },
      },

      '& .three': {
         '& .ProseMirror': {
            minHeight,
            height: heightThree,
            maxHeight: '12vh',
            transition: '0.8s',

            overflowY: 'auto',

            '&::-webkit-scrollbar': {
               display: 'none',
            },
         },
      },
   }
})

const BoxTextarea = styled('label')`
   width: 38vw;
   ! min-height: 3vh;
   border: 1px solid #f9f9f9;
   background: #252335;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 1rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   border-radius: 10px;

   .ProseMirror {
      padding: 0.625rem 0.75rem;
      outline: none;
   }
`

const EditorProviderStyle = styled(EditorProvider)`
   p {
      margin: 0;
   }
`


*/
