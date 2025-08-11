import React from 'react'
import { GiNewShoot } from "react-icons/gi";

const HeadLog = () => {
  return (
    <div className='flex items-center text text-blue-95 mask-b-from-10% font-extrabold text-xl py-2 px-2 bg-gray-400 sticky top-0'>
      <div className='h-6 w-6 bg-blue-600'></div><GiNewShoot size={32} className=''/> DEV NEWS
    </div>
  )
}

export default HeadLog
