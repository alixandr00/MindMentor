import { useState } from 'react'

export const useEventModal = () => {
   const [showEventModal, setShowEventModal] = useState(false)

   return {
      showEventModal,
      setShowEventModal,
   }
}
