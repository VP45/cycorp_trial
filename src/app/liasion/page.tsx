import Map2 from '@/components/Map'
import Navbar1 from '@/components/Navbar1'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col relative items-center justify-center'>
      <Navbar1 />
      <Map2 />
    </div>
  )
}

export default page