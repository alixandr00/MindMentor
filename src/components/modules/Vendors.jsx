import React from 'react'
import { HelloSuperAdmin } from '../Interns/HelloSuperAdmin'
import { VendorsCards } from '../vendors/VendorsCards'

export const Vendors = () => {
   return (
      <div>
         <HelloSuperAdmin>
            <VendorsCards />
         </HelloSuperAdmin>
      </div>
   )
}
