import { TableStudentsDetails } from '../components/UI/table/TabelStudentsDetails'
import { NewMentors } from '../components/mentors/NewMentors'
import { Events } from '../components/modules/Events'
import { Groups } from '../components/modules/Groups'
import { Interns } from '../components/modules/Interns'
import { Schedule } from '../components/modules/Schedule'
import { Vendors } from '../components/modules/Vendors'

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
   },
   {
      path: 'groups',
      element: <Groups />,
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
