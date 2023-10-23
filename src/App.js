import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { AdminLayout } from './layout/AdminLayout'

function App() {
   const navigate = useNavigate()

   useEffect(() => {
      navigate('interns')
   }, [])

   return <AdminLayout />
}

export default App
