
import { ToastContainer } from 'react-toastify'
import { Modal } from './components/modal/Modal'

function App() {
   return (
      <div>
         <Modal />
         <ToastContainer />
         {/* Hello world */}
      </div>
   )
import { AdminLayout } from './layout/AdminLayout'

function App() {
   return <AdminLayout />
}

export default App
