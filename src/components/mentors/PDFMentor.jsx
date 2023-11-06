/* eslint-disable jsx-a11y/label-has-associated-control */
import { styled } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DownLoadResumeIcon } from '../../assets/icons'
import { showSnackbar } from '../UI/snackbar/Snackbar'
import { pdfChange } from '../../store/mentors/mentor.slice'

export const PDFMentor = ({ error }) => {
   const dispatch = useDispatch()
   const [fileData, setFileData] = useState()

   const onDrop = (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file.type !== 'application/pdf') {
         showSnackbar({
            message: 'Выберите файл в формате PDF (.pdf)',
            severity: 'error',
         })

         return
      }

      setFileData(file)

      dispatch(pdfChange(file))
   }

   const { getRootProps } = useDropzone({
      onDrop,
      accept: '.pdf',
   })

   return (
      <Container>
         <label {...getRootProps()}>
            {!fileData ? (
               <BoxIcon error={error}>
                  <DownLoadResumeIconStyled />
               </BoxIcon>
            ) : (
               <ContainerPdf>
                  <div>
                     <img
                        src="https://cdn4.iconfinder.com/data/icons/file-extensions-1/64/pdfs-512.png"
                        alt="PDF Photos"
                     />
                  </div>
                  <p>{fileData.name}</p>
               </ContainerPdf>
            )}
         </label>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 3.94rem;
`

const DownLoadResumeIconStyled = styled(DownLoadResumeIcon)({
   cursor: 'pointer',
})

const BoxIcon = styled('div')(({ error }) => ({
   border: `1px solid ${error ? '#f00' : '#1E1F22'}`,
   borderRadius: '0.625rem',
}))

const ContainerPdf = styled('div')`
   display: flex;
   align-items: center;
   border: 1px solid #fff;
   border-radius: 0.625rem;
   margin: 0;
   padding: 1.25rem 1.25rem 1.25rem 0.625rem;
   cursor: pointer;

   p {
      color: #fff;
      font-family: Bai Jamjuree;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
   }

   img {
      width: 7.4vw;
   }
`
