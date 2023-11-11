import { TableStudentsDetails } from '../components/UI/table/TabelStudentsDetails'
import { NewGroups } from '../components/groups/NewGroups'
import { NewMentors } from '../components/mentors/NewMentors'
import { Events } from '../components/modules/Events'
// import { Groups } from '../components/modules/Groups'
import { Interns } from '../components/modules/Interns'
import { Schedule } from '../components/modules/Schedule'
import { Vendors } from '../components/modules/Vendors'
import { DetailCart } from '../components/vendors/DetailCart'
import { DetailCartModal } from '../components/vendors/DetailCartModal'

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
            children: [
               {
                  path: 'modal/:id',
                  element: <DetailCartModal />,
               },
            ],
         },
      ],
   },
   {
      path: 'groups',
      element: <NewGroups />,
   },
   {
      path: 'mentors',
      element: <NewMentors />,
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
