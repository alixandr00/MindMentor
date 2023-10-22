import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { adminRoutes } from './AdminRoutes'
import { SignInPage } from '../components/signIn/SignInPage'
import { PrivateRoute } from './PrivateRoute'
import { ManagerLayout } from '../layout/ManagerLayout'

const USER_ROLES = {
   ADMIN: 'ADMIN',
   GUEST: 'GUEST',
   MANAGER: 'MANAGER',
}

export const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <PrivateRoute
            roles={USER_ROLES.GUEST}
            fallBacPath="signIn"
            component={<SignInPage />}
         />
      ),
   },
   {
      path: '/admin',
      element: (
         <PrivateRoute
            roles={USER_ROLES.ADMIN}
            fallBacPath="/"
            component={<App />}
         />
      ),
      children: adminRoutes,
   },
   {
      path: '/manager',
      element: (
         <PrivateRoute
            roles={USER_ROLES.MANAGER}
            fallBacPath="/"
            component={<ManagerLayout />}
         />
      ),
   },
])
