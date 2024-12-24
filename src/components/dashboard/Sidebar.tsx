import React from 'react'
import { FaKickstarterK } from 'react-icons/fa'
import { GoSidebarCollapse } from 'react-icons/go'

export const Sidebar = () => {
  return (
   <>
   <div className='w-[350px] h-screen bg-[#EEEEEE]'>
    <div className='p-5'>
        <div className='flex justify-between items-center'>
        <span className='flex items-center text-dwakese-blue text-2xl'>Dwa <FaKickstarterK size={20}/> ese</span>
        <GoSidebarCollapse size={25}/>
        </div>
    </div>

   </div>
   </>
  )
}
