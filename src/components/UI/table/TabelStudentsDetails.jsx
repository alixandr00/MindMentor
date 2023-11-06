import { IconButton, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ReactComponent as DatailsClose } from '../../../assets/icons/DatailsClose.svg'
import ProfileImage from '../../../assets/images/profileImage.jpg'
import Email from '../../../assets/images/Email.png'
import PhoneNumber from '../../../assets/images/PhoneNumber.png'
import { fetchInternsDetails } from '../../../store/interns/internsThunk'
import { Loading } from '../loading/Loading'

export const TableStudentsDetails = () => {
   const dispatch = useDispatch()
   const { id } = useParams()
   const interns = useSelector((state) => state.interns.internsDetails)
   const internss = useSelector((state) => state.interns.interns)
   const loading = useSelector((state) => state.interns.isLoading)
   const error = useSelector((state) => state.interns.error)
   const navigate = useNavigate()

   useEffect(() => {
      const fetchData = async () => {
         dispatch(fetchInternsDetails(id))
      }

      fetchData()
   }, [dispatch, id])

   if (error) {
      return <div>Error: {error}</div>
   }

   const onCloceModalHandler = () => {
      navigate('interns')
   }

   return (
      <>
         {loading && <Loading />}
         {internss?.length !== 0 ? (
            <StyledContainer>
               {[interns]?.map((internDetail) => {
                  return (
                     +id === internDetail.id && (
                        <StyledContent key={internDetail.id}>
                           <StyledHeader>
                              <p>
                                 {internDetail.balance}
                                 som
                              </p>
                              <IconButton onClick={onCloceModalHandler}>
                                 <DatailsClose />
                              </IconButton>
                           </StyledHeader>
                           <StyledStudentsInformation>
                              <StyledImage src={ProfileImage} alt="photos" />
                              <h3>{`${internDetail.name}  ${internDetail.surname}`}</h3>
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
                              <span>{internDetail.first_month}</span>
                              <p
                                 className={
                                    internDetail.first_month_payment_status
                                 }
                              >
                                 {internDetail.first_month_payment_status}
                              </p>
                           </StyledDateHistory>
                           <StyledDateHistory>
                              <p>2nd payment</p>
                              <span>{internDetail.second_month}</span>
                              <p
                                 className={
                                    internDetail.second_month_payment_status
                                 }
                              >
                                 {internDetail.second_month_payment_status}
                              </p>
                           </StyledDateHistory>
                           <StyledDateHistory>
                              <p>3rd payment</p>
                              <span>{internDetail.third_month}</span>
                              <p
                                 className={
                                    internDetail.third_month_payment_status
                                 }
                              >
                                 {internDetail.third_month_payment_status}
                              </p>
                           </StyledDateHistory>
                        </StyledContent>
                     )
                  )
               })}
            </StyledContainer>
         ) : null}
      </>
   )
}

const StyledContainer = styled('div')`
   border: 1px solid white;
   border-radius: 10px;
   margin-top: 2rem;
   width: 37%;
   height: 100%;
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
   '& .UNPAID': {
      padding: '3px 12px',
      borderRadius: '15px',
      color: 'white',
      border: '1px solid #F9F9F9',
   },
   '& .PAID': {
      borderRadius: '15px',
      border: '1px solid green',
      padding: '3px 12px',
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
   '& .Pending': {
      padding: '2px 1px',

      borderRadius: '15px',
      color: 'white',
      border: '1px solid #ee0cf6',
   },
   '& .Validated': {
      padding: '2px 1px',

      borderRadius: '15px',
      color: 'white',
      border: '1px solid #ee2314',
   },
   '& .Proposed': {
      padding: '2px 1px',

      borderRadius: '15px',
      color: 'white',
      border: '1px solid #0cfc48',
   },
   '& .Onboarded': {
      padding: '2px 1px',

      borderRadius: '15px',
      color: 'white',
      border: '1px solid #F9F9F9',
   },
   '& .Selected': {
      padding: '2px 1px',

      borderRadius: '15px',
      color: 'white',
      border: '1px solid #09f697',
   },
   '& .New': {
      borderRadius: '15px',
      border: '1px solid blue',
      padding: '2px 1px',
      color: 'white',
   },
   '& .Java': {
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
   '& .Paid': {
      borderRadius: '15px',
      border: '1px solid green',
      padding: '2px 1px',
      color: 'white',
   },
   '& .Graduate': {
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
   '& .C++': {
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
   width: 60px;
   height: 60px;
   border-radius: 100%;
`
