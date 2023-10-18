import { styled } from '@mui/material'
import React from 'react'
import { UiInput } from '../../UI/input/UiInput'
import { InternsAddStudentModalSelect } from './InternsAddStudentModalSelect'

export const InternsAddStudentModal = () => {
   return (
      <MainContainer>
         <Container>
            <HeadIconContainer>
               <span>Del</span>
               <span>Edt</span>
            </HeadIconContainer>

            <MainFormContainer>
               <div>
                  <FormContainer>
                     <InputBox>
                        <label htmlFor="name">Name</label>
                        <UiInputStyle
                           background="#252335"
                           width="32vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="text"
                           id="name"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="surname">Surname</label>
                        <UiInputStyle
                           background="#252335"
                           width="32vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="text"
                           id="surname"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="email">Email</label>
                        <UiInputStyle
                           background="#252335"
                           width="32vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="email"
                           id="email"
                        />
                     </InputBox>
                     <InputBox>
                        <label htmlFor="phone">Phone number</label>
                        <UiInputStyle
                           background="#252335"
                           width="32vw"
                           borderradius="0.625rem"
                           colors="#fff"
                           bordercolor="#fff"
                           type="tel"
                           id="phone"
                        />
                     </InputBox>
                  </FormContainer>
                  <ContainerSelect>
                     <BoxSelect>
                        <label htmlFor="stack">Stack</label>

                        <InternsAddStudentModalSelect
                           name="stack"
                           dataMenuItem={[
                              { id: 1, name: 'Python' },
                              { id: 2, name: 'Java' },
                              { id: 3, name: 'Javascript' },
                           ]}
                        />
                        {/* <select name="dd">
                           <option value="Java">Java</option>
                           <option value="Java Script">Java Script</option>
                        </select> */}
                     </BoxSelect>

                     <BoxSelect>
                        <label htmlFor="dd">Status</label>
                        <select name="dd">
                           <option value="Java">Java</option>
                           <option value="Java Script">Java Script</option>
                        </select>
                     </BoxSelect>
                  </ContainerSelect>
                  <div>
                     <button type="button">Mentor</button>
                     <span>Mark Avans</span>
                  </div>
                  <div>
                     <div>
                        <p>Payment cost</p>
                     </div>
                     <div>
                        <input type="text" />
                        <span>som</span>
                     </div>
                  </div>
                  <div>
                     <button type="button">Delete</button>
                     <button type="button">Save</button>
                  </div>
               </div>
            </MainFormContainer>
         </Container>
      </MainContainer>
   )
}

const MainContainer = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
`

const Container = styled('div')`
   margin: 3.625rem 0 1.25rem 0;
   padding: 1.75rem 2.25rem 2.4375rem 2.25rem;

   width: 63vw;

   background-color: #1e1f22;
   border-radius: 0.625rem;
   border: 1px solid #fff;

   color: #fff;
   font-family: Bai Jamjuree;
   font-size: 20px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;

   display: flex;
   flex-direction: column;
   gap: 0.375rem;
`

const HeadIconContainer = styled('div')`
   display: flex;
   justify-content: flex-end;
   gap: 2.4375rem;
`

const MainFormContainer = styled('div')`
   display: flex;
   justify-content: center;
`

const FormContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.0625rem;
`

const InputBox = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.6875rem;
`

const ContainerSelect = styled('div')`
   margin-top: 0.875rem;
   margin-bottom: 1.4375rem;

   display: flex;
   gap: 2.875rem;
`

const UiInputStyle = styled(UiInput)`
   input {
      padding: 0.4375rem 1rem;
   }
`

const BoxSelect = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.6875rem;
`

/*

import { styled } from '@mui/material/styles' 
import TextField from '@mui/material/TextField' 
import React, { forwardRef } from 'react'

export const UiInput = forwardRef((
	{label,type,id,value,onChange,border,placeholder,...other},ref) => {
		const placeholderStyles = {}
		if (placeholder === 'Description') {
			placeholderStyles['::placeholder'] = {
				color: '#fff',
				transform: 'translateY(-65px)',
				fontSize: '1.25rem',
				fontWeight: '500',
			}}
			
			return (
				<MyStyledInput size="small" label={label} type={type} id={id}
					value={value}
					onChange={onChange}
					border={border}
					placeholder={placeholder}
					placeholderstyles={placeholderStyles}
					ref={ref}
					{...other} />
					)})
					
const MyStyledInput = styled(TextField)(({ ...props }) => ({
	input:{padding: props.padding || 0,color: props.color || 'white',
	width: props.width || '11.25rem',
	backgroundColor: props.backgroundcolor || 'transparent',
	background: props.background || 'transparent !important',
	border: props.border || '1px solid transparent',
	paddingLeft: props.paddingleft || '15px',
	...props.placeholderstyles,    },
	
	'& .MuiInputBase-input': {
		height: props.height || '2.25rem',
		fontSize: '1.2rem',
		fontWeight: '400',
	},
	
	'& input::placeholder': {
		color: props.placeholdercolor || 'gray',
	},
	'& label': {
		fontSize: '1rem',
		fontFamily: 'Bai Jamjuree',
	},
	'& .MuiOutlinedInput-root': {
		color: '#fff',
		'& fieldset': {
			border: props.border || '1px solid #fff',
			borderRadius: props.borderradius || '5px',
		},
		'&:hover fieldset': {
			borderColor: props.hoverbordercolor || '1px solid #fff',
		},
		'&.Mui-focused fieldset': {
			borderColor: props.focusbordercolor || '1px solid green',
			border: props.border || '1px solid #fff',
		},
	},
	'& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root': {
		fontFamily: 'Bai Jamjuree',
		color: 'white',
	},
	'& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
		fontFamily: 'Bai Jamjuree',
		color: 'white',
	},}))

*/
