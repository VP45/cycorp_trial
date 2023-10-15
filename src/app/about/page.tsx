import About from '@/components/About'
import Awards from '@/components/Awards'
import Navbar1 from '@/components/Navbar1'
import Teams from '@/components/Teams'
import Vabout from '@/components/Vabout'
import Vbottom from '@/components/Vbottom'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col relative items-center justify-center'>
        <Navbar1 />
        <div className='px-4'>
        <About />
        <Vabout />
        <Teams />
        </div>
        <div className='px-4 pb-4'>
        <Vbottom />
        </div>
        
        {/* <Awards /> */}
    </div>
  )
}

export default page