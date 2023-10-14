import About from '@/components/About'
import Awards from '@/components/Awards'
import Navbar from '@/components/Navbar'
import Teams from '@/components/Teams'
import Vabout from '@/components/Vabout'
import Vbottom from '@/components/Vbottom'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col relative items-center justify-center px-4'>
        <Navbar />
        <About />
        <Vabout />
        <Teams />
        <Vbottom />
        {/* <Awards /> */}
    </div>
  )
}

export default page