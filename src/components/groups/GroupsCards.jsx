import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { NotesIcon, PeopleIcon, ProgressIcon } from '../../assets/icons'
import { getGroups } from '../../store/groups/groupThunk'
import { Loading } from '../UI/loading/Loading'

export const GroupsCards = () => {
   const { groups, isLoading } = useSelector((state) => state.groups)
   console.log('groups: ', groups)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getGroups())
   }, [dispatch])

   return (
      <Container>
         {isLoading && <Loading />}
         {groups?.map((card) => (
            <ContainerCards key={card.id}>
               <CompanyNameText>{card.name}</CompanyNameText>
               <WrapperMain>
                  <MainContainers>
                     <IconWrapper>
                        <ProgressIcon />
                     </IconWrapper>
                     <CardTexts>{card.status}</CardTexts>
                  </MainContainers>
                  <MainContainers>
                     <IconWrapper>
                        <PeopleIcon />
                     </IconWrapper>
                     <CardTexts>{card.people} people</CardTexts>
                  </MainContainers>
                  <MainContainers>
                     <IconWrapper>
                        <NotesIcon />
                     </IconWrapper>
                     <CardTexts>
                        {card.start_date}/{card.end_date}
                     </CardTexts>
                  </MainContainers>
               </WrapperMain>
            </ContainerCards>
         ))}
      </Container>
   )
}

const Container = styled('div')(() => ({
   marginTop: '2rem',
   width: '100%',
   display: 'flex',
   cursor: 'pointer',
   flexWrap: 'wrap',
   gap: '1.31rem',
   maxHeight: '68vh',
   overflowY: 'auto',
   scrollbarWidth: 'thin',
   scrollbarColor: ' #b3b3b30 transparent',
   '&::-webkit-scrollbar ': {
      width: '0.3rem',
   },
   '&::-webkit-scrollbar-track': {
      backgroundColor: ' #fff white',
   },
   '&::-webkit-scrollbar-thumb ': {
      backgroundColor: ' #fff',
      borderRadius: '0.25rem',
   },
}))

const ContainerCards = styled('div')(() => ({
   width: '14.375rem',
   height: '10.4375rem',
   borderRadius: '0.625rem',
   border: '1px solid #FFF',
   paddingTop: '1.75rem',
   transition: 'transform 0.3s, background 0.3s',
   '&:hover': {
      background: 'linear-gradient(7.1875deg, #49318C, #3F5FB0)',
      // transform: 'scale(1.01)',
   },
}))
const CompanyNameText = styled('p')({
   color: '#FFF',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: 500,
   textAlign: 'center',
})

const IconWrapper = styled('div')({
   width: '1.4375rem',
   height: ' 1.4375rem',
   backgroundColor: '#2B2D31',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: '50%',
})

const MainContainers = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '0.38rem',
})

const CardTexts = styled('p')({
   color: '#ECECEC',
   fontSize: '0.8125rem',
   fontStyle: 'normal',
   fontWeight: 500,
   lineHeight: 'normal',
})

const WrapperMain = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.69rem',
   marginTop: '1.37rem',
   paddingLeft: '2.19rem',
})
