import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const patchRole = {
   GUEST: '/',
   ADMIN: '/admin/interns',
   MANAGER: '/manager',
}

export const PrivateRoute = ({ component, fallBacPath, roles }) => {
   const { role, profileData } = useSelector((state) => state.auth)

   const isAllowed = () => {
      return roles === role
   }

   const roleFallBacPath =
      fallBacPath === 'signIn' ? patchRole[role] : fallBacPath

   if (!isAllowed()) {
      if (profileData !== '') {
         return <Navigate to={roleFallBacPath} />
      }
   }

   return component
}
