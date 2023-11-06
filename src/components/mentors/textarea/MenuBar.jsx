import { useCurrentEditor } from '@tiptap/react'
// import { styled, IconButton } from '@mui/material'
// import FormatBoldIcon from '@mui/icons-material/FormatBold'
import { useEffect } from 'react'

export const MenuBar = ({ onCollectorValue }) => {
   const { editor } = useCurrentEditor()

   const content = editor.getHTML()

   useEffect(() => {
      if (editor) {
         onCollectorValue(content)
      }
   }, [editor, onCollectorValue, content])

   return (
      <div>
         {/* {focusTextareaEducation && ( */}
         {/* <ContainerButton className="box">
            <IconButton
               onClick={() => editor.chain().focus().toggleBold().run()}
               disabled={!editor.can().chain().focus().toggleBold().run()}
               className={editor.isActive('bold') ? 'is-active' : ''}
            >
               <FormatBoldIcon />
            </IconButton>
         </ContainerButton> */}
         {/* )} */}
      </div>
   )
}

// const Container = styled('div')(() => ({
//    //  '& .box': {
//    //     display: focusTextareaEducation ? 'bloc' : 'none',
//    //     transition: '0.8s',
//    //  },
// }))

// const ContainerButton = styled('div')`
//    padding: 1.25rem 2rem;
//    display: flex;
//    justify-content: center;
//    gap: 5rem;
//    border-bottom: 1px solid #cdcdcd;

//    button {
//       margin: 0;
//       border-radius: 1px;
//       padding: 0;
//    }

//    .is-active {
//       svg {
//          fill: #f011cb;
//       }
//    }

//    svg {
//       fill: #fff;
//       height: 1.75rem;
//       width: 1.75rem;
//    }
// `
