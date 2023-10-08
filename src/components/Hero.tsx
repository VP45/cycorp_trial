import React from 'react'
import Vplay from './Vplay';
const Hero = () => {
    return (
        <div className='w-screen h-[calc(100vh-5rem)]'>
            <div className="bg-cover bg-[url('../../public/CY4.png')] bg-center bg-no-repeat h-full w-full flex items-center justify-center" >
                <div className='max-w-6xl'>
                    <Vplay />
                </div>                
            </div >
        </div>
    );
}

export default Hero