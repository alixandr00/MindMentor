import { styled } from '@mui/material'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import { MenuBar } from './MenuBar'

const content = '<div></div>'

const extensions = [StarterKit]

export const MentorModalTextarea = ({ createMentorForm }) => {
   const [focusTextareaEducation, setFocusTextareaEducation] = useState(false)
   const [focusTextareaExtensions, setFocusTextareaExtensions] = useState(false)
   const [value, setValue] = useState('')
   console.log('value: ', value)

   const onCollectorValue = (e) => {
      setValue(e)
   }

   const onFocusEducationHandler = () => {
      setFocusTextareaEducation(true)
   }

   const onBlurEducationHandler = () => {
      setFocusTextareaEducation(false)
   }

   const onFocusExtensionsHandler = () => {
      setFocusTextareaExtensions(true)
   }

   const onBlurExtensionsHandler = () => {
      setFocusTextareaExtensions(false)
   }

   return (
      <Container
         focusTextareaOne={focusTextareaEducation}
         focusTextareaTwo={focusTextareaExtensions}
      >
         <BoxTextarea className="one">
            <EditorProviderStyle
               slotBefore={
                  <MenuBar
                     focusTextareaEducation={focusTextareaEducation}
                     onCollectorValue={onCollectorValue}
                     createMentorForm={createMentorForm.education}
                  />
               }
               extensions={extensions}
               content={content}
               onBlur={onBlurEducationHandler}
               onFocus={onFocusEducationHandler}
            />
         </BoxTextarea>

         <BoxTextarea className="two">
            <EditorProviderStyle
               onFocus={onFocusExtensionsHandler}
               extensions={extensions}
               content={content}
               onBlur={onBlurExtensionsHandler}
            />
         </BoxTextarea>
      </Container>
   )
}

const Container = styled('div')(({ focusTextareaOne, focusTextareaTwo }) => {
   const minHeight = '4hv'
   const maxHeight = '38vh'
   let heightOne = '16.4vh'
   let heightTwo = '16.4vh'

   if (focusTextareaOne) {
      heightOne = '38vh'
      heightTwo = '4vh'
   } else if (focusTextareaTwo) {
      heightOne = '4vh'
      heightTwo = '38vh'
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
   }
})

const BoxTextarea = styled('label')`
   width: 38vw;

   /* min-height: 3vh; */

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
