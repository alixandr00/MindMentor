import { styled } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ReactComponent as Settings } from '../../../assets/icons/setting-2.svg'
import { ReactComponent as LogOut } from '../../../assets/icons/login.svg'
import { sideBarArray } from '../../../utils/sidebar'
import { logOut } from '../../../store/auth/auth.thunk'

export const SideBar = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onLogOutHandler = () => {
      navigate('/')

      dispatch(logOut())
      window.location.reload()
   }

   return (
      <Container>
         <div>
            <TitleContainer>
               <Title>MindMentor</Title>
            </TitleContainer>
         </div>
         <DescriptionContainer>
            {sideBarArray.map((el) => (
               <Link
                  key={el.title}
                  to={el.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
               >
                  <LinkChilde>
                     {el.icons}
                     <p>{el.title}</p>
                  </LinkChilde>
               </Link>
            ))}
         </DescriptionContainer>

         <SettingsAndLogOut>
            <BlockLogOut onClick={onLogOutHandler}>
               <LogOutStyled />
               <p>Log Out</p>
            </BlockLogOut>
            <BlockSettings>
               <Settings />
               <p>Settings</p>
            </BlockSettings>
         </SettingsAndLogOut>
      </Container>
   )
}

const Container = styled('div')`
   width: 18rem;
   height: 100vh;
   background: linear-gradient(#252335, #5447aa);
   display: flex;
   flex-direction: column;
`
const TitleContainer = styled('div')`
   display: flex;
   justify-content: center;
`
const Title = styled('p')`
   color: #fff;
   font-weight: 500;
   font-size: 2rem;
   margin-top: 2.44rem;
`
const DescriptionContainer = styled('div')`
   margin-top: 2.81rem;
   cursor: pointer;

   .active {
      width: 13rem;
      height: 2.875rem;
      border-radius: 0rem 2.3125rem 2.3125rem 0rem;
      border: 1px solid #f9f9f9;
      background: linear-gradient(93deg, #49318c 3.32%, #3f5fb0 105.32%);
   }
`

const BlockSettings = styled('div')`
   display: flex;
   align-items: center;
   cursor: pointer;
   margin-top: 1.75rem;

   p {
      position: relative;
      left: 0.69rem;
      color: #fff;
   }
`
const BlockLogOut = styled('div')`
   display: flex;
   align-items: center;
   cursor: pointer;
   p {
      position: relative;
      left: 0.69rem;
      color: #fff;
   }
`
const SettingsAndLogOut = styled('div')`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   margin-top: auto;
   padding: 0 0 2rem 1.93rem;
`

const LogOutStyled = styled(LogOut)`
   position: relative;
   right: 0.3rem;
`
const Link = styled(NavLink)`
   display: flex;
`
const LinkChilde = styled('div')`
   display: flex;
   align-items: center;
   margin-left: 4.0625rem;
   height: 2.875rem;
   p {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      margin-left: 0.69rem;
      &:hover {
         color: #afafaf;
      }
   }
`
