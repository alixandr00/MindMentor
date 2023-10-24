import { IconButton, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ReactComponent as DatailsClose } from '../../../assets/icons/DatailsClose.svg'
import ProfileImage from '../../../assets/images/profileImage.jpg'

import { status } from '../../../utils/table-students'
// import ProfileImage from '../../../assets/images/profileImage.jpg'
import Email from '../../../assets/images/Email.png'
import PhoneNumber from '../../../assets/images/PhoneNumber.png'
// import ProfileImage from '../../../assets/images/profileImage.jpg'
import { fetchInternsDetails } from '../../../store/interns/internsThunk'

export const TableStudentsDetails = () => {
   const dispatch = useDispatch()
   const { id } = useParams()
   const interns = useSelector((state) => state.interns.interns)
   const loading = useSelector((state) => state.interns.loading)
   const error = useSelector((state) => state.interns.error)
   const [data, setData] = useState([])
   const navigate = useNavigate()
   console.log(interns, 'jianak')

   useEffect(() => {
      const fetchData = async () => {
         dispatch(fetchInternsDetails(id))
      }

      fetchData()
   }, [dispatch])

   useEffect(() => {
      if (interns?.results) {
         setData(interns.results)
      }
   }, [interns])
   console.log(interns?.results)

   if (loading === 'loading') {
      return <div>Loading...</div>
   }

   if (error) {
      return <div>Error: {error}</div>
   }

   console.log('datauseParams', id)

   const onCloceModalHandler = () => {
      navigate('interns')
   }
   return (
      <StyledContainer>
         {data.map((internDetail) => {
            console.log(
               'id === internDetail',
               +id === internDetail.id && internDetail
            )
            return (
               +id === internDetail.id && (
                  <StyledContent>
                     <StyledHeader>
                        <p>{internDetail.pay}som</p>
                        <IconButton onClick={onCloceModalHandler}>
                           <DatailsClose />
                        </IconButton>
                     </StyledHeader>
                     <StyledStudentsInformation>
                        <StyledImage
                           src={
                              internDetail.photo !== 'null'
                                 ? internDetail.photo
                                 : ProfileImage
                           }
                           alt="photo"
                        />
                        <h3>
                           {internDetail.name}
                           <br />
                           {internDetail.surname}
                        </h3>
                        <p>JS/group****</p>
                        <span>Mentor-Tugolbay</span>
                     </StyledStudentsInformation>
                     <StyleStatus>
                        <p
                           className={
                              internDetail.status === 'New'
                                 ? 'New'
                                 : internDetail.status
                           }
                        >
                           {internDetail.status}
                        </p>
                     </StyleStatus>
                     <StyledEmailAndPhoneNumber>
                        <StyledBlock>
                           <img src={Email} alt="email" />
                           <div>
                              <span>Email</span>
                              <p>{internDetail.email}</p>
                           </div>
                        </StyledBlock>
                        <StyledBlock>
                           <img src={PhoneNumber} alt="email" />
                           <div>
                              <span>Phone number</span>
                              <p>{internDetail.phone_number}</p>
                           </div>
                        </StyledBlock>
                     </StyledEmailAndPhoneNumber>
                     <StyledDateHistory>
                        <p>1st payment</p>
                        <span>
                           {' '}
                           12.12.20023 <br /> 12.01.2024
                        </span>
                        <p
                           className={
                              internDetail.status === 'Paid'
                                 ? 'Paid'
                                 : internDetail.status
                           }
                        >
                           {internDetail.status}
                        </p>
                     </StyledDateHistory>
                     <StyledDateHistory>
                        <p>2nd payment</p>
                        <span>{internDetail.second_month}</span>
                        <p>
                           {status.map((status) => (
                              <p
                                 className={
                                    status.paid === 'Paid'
                                       ? 'Paid'
                                       : status.paid
                                 }
                              >
                                 {status.paid}
                              </p>
                           ))}
                        </p>
                     </StyledDateHistory>
                     <StyledDateHistory>
                        <p>3rd payment</p>
                        <span>{internDetail.third_month}</span>
                        <p>
                           {status.map((status) => (
                              <p
                                 className={
                                    status.paid === 'Paid'
                                       ? 'Paid'
                                       : status.paid
                                 }
                              >
                                 {status.paid}
                              </p>
                           ))}
                        </p>
                     </StyledDateHistory>
                  </StyledContent>
               )
            )
         })}
      </StyledContainer>
   )
}

const StyledContainer = styled('div')`
   border: 1px solid white;
   border-radius: 10px;
   margin-top: 2rem;
`
const StyledHeader = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 0.8rem;
   color: white;
`
const StyledDateHistory = styled('div')({
   display: 'flex',
   color: 'white',
   justifyContent: 'space-around',
   fontSize: '0.8rem',
   alignItems: 'center',
   '& > span': {
      fontSize: '0.7rem',
   },
   '& .inprogress': {
      padding: '2px 1px',

      borderRadius: '15px',
      color: 'white',
      border: '1px solid #F9F9F9',
   },
   '& .New': {
      borderRadius: '15px',
      border: '1px solid blue',
      padding: '2px 1px',
      color: 'white',
   },
   '& .Paid': {
      borderRadius: '15px',
      border: '1px solid #ffd902',
      padding: '2px 7px',
      color: 'white',
   },
   '& .JavaScript': {
      padding: '2px 1px',
      borderRadius: '15px',
      border: '1px solid gold',
      color: 'white',
   },
   '& .cola': {
      borderRadius: '15px',
      border: '1px solid green',
      padding: '2px 1px',
      color: 'white',
   },
   '& .fanta': {
      borderRadius: '15px',
      border: '1px solid gold',
      padding: '2px 1px',
      color: 'white',
   },
   '& .Python': {
      borderRadius: '15px',
      border: '1px solid  #50BF69',
      padding: '2px 1px',
      color: 'white',
   },
   '& .ProjectManager': {
      borderRadius: '15px',
      border: '1px solid  #4169E1',
      padding: '2px 1px',
      color: 'white',
   },
})
const StyledEmailAndPhoneNumber = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.8rem;
`
const StyleStatus = styled('div')({
   textAlign: 'center',
   '& .inprogress': {
      padding: '2px 1px',

      borderRadius: '15px',
      color: 'white',
      border: '1px solid #F9F9F9',
   },
   '& .New': {
      borderRadius: '15px',
      border: '1px solid blue',
      padding: '2px 1px',
      color: 'white',
   },
   '& .Paid': {
      borderRadius: '15px',
      border: '1px solid #ffd902',
      padding: '2px 1px',
      color: 'white',
   },
   '& .JavaScript': {
      padding: '2px 1px',
      borderRadius: '15px',
      border: '1px solid gold',
      color: 'white',
   },
   '& .cola': {
      borderRadius: '15px',
      border: '1px solid green',
      padding: '2px 1px',
      color: 'white',
   },
   '& .fanta': {
      borderRadius: '15px',
      border: '1px solid gold',
      padding: '2px 1px',
      color: 'white',
   },
   '& .Python': {
      borderRadius: '15px',
      border: '1px solid  #50BF69',
      padding: '2px 1px',
      color: 'white',
   },
   '& .ProjectManager': {
      borderRadius: '15px',
      border: '1px solid  #4169E1',
      padding: '2px 1px',
      color: 'white',
   },
})

const StyledContent = styled('div')`
   padding: 8px 10px;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   /* text-align: center; */
`
const StyledStudentsInformation = styled('div')`
   color: white;
   text-align: center;

   h2 {
      color: white;
   }
   p {
      color: white;
   }
   span {
      color: white;
   }
`
const StyledBlock = styled('div')`
   display: flex;
   gap: 0.8rem;
   span {
      color: #656363;
      text-align: start;
      font-size: 0.8rem;
   }
   p {
      color: white;
      font-size: 0.9rem;
   }
`

const StyledImage = styled('img')`
   width: 40px;
   height: 40px;
   border-radius: 100%;
`
