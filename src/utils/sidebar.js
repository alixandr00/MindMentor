import { styled } from '@mui/material'
import ScheduleIcon from '@mui/icons-material/Schedule'
import { ReactComponent as Interns } from '../assets/icons/personalcard.svg'
import { ReactComponent as Bag } from '../assets/icons/bag-2.svg'
import { ReactComponent as Arrange } from '../assets/icons/arrange-circle-2.svg'
import { ReactComponent as User } from '../assets/icons/user-square.svg'
import { ReactComponent as Events } from '../assets/icons/Programming.svg'

const CustomCalendarIcon = styled(ScheduleIcon)({
   color: '#fff',
})

export const sideBarArray = [
   {
      path: '/interns',
      icons: <Interns />,
      title: 'Interns',
   },
   {
      path: '/vendors',
      icons: <Bag />,
      title: 'Vendors',
   },
   {
      path: '/groups',
      icons: <Arrange />,
      title: 'Groups',
   },
   {
      path: '/mentors',
      icons: <User />,
      title: 'Mentors',
   },
   {
      path: '/events',
      icons: <Events />,
      title: 'Events',
   },
   {
      path: '/schedule',
      icons: <CustomCalendarIcon />,
      title: 'Schedule',
   },
]
