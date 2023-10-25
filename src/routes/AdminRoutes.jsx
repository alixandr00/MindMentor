import { TableStudentsDetails } from '../components/UI/table/TabelStudentsDetails'
import { Events } from '../components/modules/Events'
import { Groups } from '../components/modules/Groups'
import { Interns } from '../components/modules/Interns'
import { Mentors } from '../components/modules/Mentors'
import { Schedule } from '../components/modules/Schedule'
import { Vendors } from '../components/modules/Vendors'
import { DetailCart } from '../components/vendors/DetailCart'

export const adminRoutes = [
   {
      path: 'interns',
      element: <Interns />,
      children: [
         {
            path: 'details/:id',
            element: <TableStudentsDetails />,
         },
      ],
   },
   {
      path: 'vendors',
      element: <Vendors />,
      children: [
         {
            path: 'vendorsDetail/:id',
            element: <DetailCart />,
         },
      ],
   },
   {
      path: 'groups',
      element: <Groups />,
   },
   {
      path: 'mentors',
      element: <Mentors />,
   },
   {
      path: 'events',
      element: <Events />,
   },
   {
      path: 'schedule',
      element: <Schedule />,
   },
]
