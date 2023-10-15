"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';

const Navbar = () => {
    const [isClick, setisClick] = useState(false);
    const toggleNavbar = () => {
        setisClick(!isClick)
    }
    return (
    <nav className='bg-transparent z-20 w-full'>
        <div className='w-[100vw] px-4 sm:px-6 lg:px-8 w-full'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <Link href="/" className='text-white'>
                            <Image src="/cycorp_final.png" alt="Logo" width={200} height={200}/>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='m1-4 flex items-center space-x-4 font-bold'>
                        <Link href='/' className='text-white hover:text-red-600 rounded-lg p-2'>
                            Home
                        </Link>
                        <Link href='/about' className='text-white hover:text-red-600 rounded-lg p-2'>
                            About
                        </Link>
                        <Link href='/design' className='text-white hover:text-red-600 rounded-lg p-2'>
                            Our Work
                        </Link>
                        <Link href='/awards' className='text-white hover:text-red-600 rounded-lg p-2'>
                            Accolades
                        </Link>
                        <Link href='https://stallion.build/' target="_blank" className='text-white hover:text-red-600 rounded-lg p-2'>
                            Stallion
                        </Link>
                        <Link href='https://www.realinc.in/' target="_blank" className='text-white hover:text-red-600 rounded-lg p-2'>
                            Real Inc
                        </Link>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={toggleNavbar}>
                        {isClick ? (
                            <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"/>
          </svg>
                        ) : (
                            <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        {isClick && (
            <div className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col bg-slate-400 bg-opacity-20'>
                <Link href='/' className='text-white hover:text-red-600 rounded-lg p-1'>
                            Home
                        </Link>
                        <hr />
                        <Link href='/about' className='text-white hover:text-red-600 rounded-lg p-1'>
                            About
                        </Link>
                        <hr />
                        <Link href='/design' className='text-white hover:text-red-600 rounded-lg p-1'>
                            Our Work
                        </Link>
                        <hr />
                        <Link href='/awards' className='text-white hover:text-red-600 rounded-lg p-1'>
                            Accolades
                        </Link>
                        <hr />
                        <Link href='https://stallion.build/' target="_blank" className='text-white hover:text-red-600 rounded-lg p-1'>
                            Stallion
                        </Link>
                        <hr />
                        <Link href='https://www.realinc.in/' target="_blank" className='text-white hover:text-red-600 rounded-lg p-1'>
                            Real Inc
                        </Link>
                        <hr />
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar


// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [color, setColor] = useState('transparent');
//   const [textColor, setTextColor] = useState('black');

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     const changeColor = () => {
//       if (window.scrollY >= 90) {
//         setColor('transparent');
//         setTextColor('#000000');
//       } else {
//         setColor('transparent');
//         setTextColor('#000000');
//       }
//     };
//     window.addEventListener('scroll', changeColor);
//   }, []);

//   return (
//     <div
//     //   style={{ backgroundColor: `${color}` }}
//       className='relative left-0 right-0 w-full ease-in duration-300 bg-none bg-transparent'
//     >
//       <div className='max-w-[1240px] m-auto flex justify-between items-center'>
//         <Link href='/'>
//           <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl '>
//             Cycorp
//           </h1>
//         </Link>
//         <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
//           <li className='p-4 hover:text-red-500'>
//             <Link href='/'>Home</Link>
//           </li>
//           <li className='p-4 hover:text-red-500'>
//             <Link href='/#gallery'>Gallery</Link>
//           </li>
//           <li className='p-4 hover:text-red-500'>
//             <Link href='/work'>Work</Link>
//           </li>
//           <li className='p-4 hover:text-red-500'>
//             <Link href='/contact'>Contact</Link>
//           </li>
//         </ul>

//         {/* Mobile Button */}
//         <div onClick={handleNav} className='block sm:hidden z-10'>
//           {nav ? (
//             <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
//           ) : (
//             <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
//           )}
//         </div>
//         {/* Mobile Menu */}
//         <div
//           className={
//             nav
            //   ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
//               : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
//           }
//         >
//           <ul>
//             <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 text-white'>
//               <Link href='/'>Home</Link>
//             </li>
//             <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
//               <Link href='/#gallery'>Gallery</Link>
//             </li>
//             <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
//               <Link href='/work'>Work</Link>
//             </li>
//             <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
//               <Link href='/contact'>Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

