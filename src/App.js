// import { AdminLayout } from './layout/AdminLayout'

import { TableInterviow } from './components/UI/table/TableInterviow'
import { TableStudents } from './components/UI/table/TableStudents'
import {
   array,
   arrayInterviow,
   headerArray,
   headerArrayInterview,
} from './utils/table-students'

function App() {
   return (
      <div>
         {/* <AdminLayout /> */}
         <TableStudents headerArray={headerArray} array={array} />
         <TableInterviow
            headerArray={headerArrayInterview}
            array={arrayInterviow}
         />
      </div>
   )
}

export default App
