import About from '@/components/About'
import Awards from '@/components/Awards'
import Teams from '@/components/Teams'
import Vabout from '@/components/Vabout'
import Vbottom from '@/components/Vbottom'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
        <About />
        <Vabout />
        <Teams />
        <Vbottom />
        <Awards />
    </div>
  )
}

export default page