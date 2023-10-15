/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
const Awards = () => {
  return (
    <div className="mb-16">
                {/* <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                    </div>
                </div> */}
                <div className="w-full px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around gap-6">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img1.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">Ace Tech 2014  GRAND  STAND AWARDS</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - The Economic Times</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img2.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">ACKNOWLEDGEMENT</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - Central Mumbai Developers Welfare Association</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img3.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1"> WORKSHOP ON DCPR 2034</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - CREDAI - MCHI</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <Image src="/img1.jpg" alt="Display Picture of Silene Tokyo" role="Image" className="rounded-full object-cover h-full w-full shadow-md" width={1000} height={1000} />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Silene Tokyo</h1>
                                        <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <Image src="/img1.jpg" alt="Display Picture of Johnson Stone" role="Image" className="rounded-full object-cover h-full w-full shadow-md" width={1000} height={1000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Johnson Stone</h1>
                                        <p className="text-gray-800 text-sm text-center">Manager Development</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around gap-6">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img4.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">TALK ON THE SUBJECT OF D.C.R.2034S</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - SHRI KUTCHI ADVOCATES WELFARE ASSOCIATION (KAWA)</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img5.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">SEMINAR ON “REAL ESTATE – THE WAY FORWARD“</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - KUTCH COPORATE FORUM (KCF)</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img6.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">CERTIFICATE OF MEMBERSHIP</h1>
                                        <p className="text-white text-sm text-center mb-4">BY -NATIONAL REAL ESTATE DEVELOPMENT COUNCIL (NARDECO)</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around gap-6">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img7.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">MEMENTO OF APPRECIATION</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - PEATA</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img8.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">MEMENTO OF APPRECIATION </h1>
                                        <p className="text-white text-sm text-center mb-4">BY - The Real Estate Management Institute (REMI)</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img9.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">LECTURE ON RERA</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - WESTERN INDIA REGIONAL COUNCIL (RERA)</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around gap-6">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img10.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">KNOWLEDGE SEMINAR ON DRAFT DP 7 DC REGULATION 2034 GREATER MUMBAI</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - NATIONAL REAL ESTATE DEVELOPMENT COUNCIL (NAREDCO)</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img11.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">EXPERT SPEAKER KNOWLEDGE SERIES 2021</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - CREDAI MCHI</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img12.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">MEMENTO OF APPRECIATION - EXPLORING DCPR 2034</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - BRIHANMUMBAI  DEVELOPERS  ASSOCIATION (GURUKUL)</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around gap-6">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img10.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">KNOWLEDGE SERIES 2022</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - CREDAI MCH</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img14.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">KNOWLEDGE SERIES 2023</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - CREDAI MCHI</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img15.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">EXCELLENCE IN DESIGNING VILLAS & COMMERCIAL SPACES</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - ELDEOK INDIA ARCHITECTURE AWARDS 2022</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-around sm:justify-around lg:justify-around gap-6">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img16.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">MEMENTO OF APPRECIATION</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - BUILD INDIA VISION </p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img17.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">INNOVATIVE SOLUTION OF THE YEAR</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - PROPTECH INNOVATIVE SOLUTION CONCLAVE & EXCELLENCE AWARDS 2023</p>
                                        {/* <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-white bg-black bg-opacity-40">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/img15.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-contain h-full w-full shadow-md" width={2000} height={2000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-white text-xl text-center mb-1">EXCELLENCE IN DESIGNING VILLAS & COMMERCIAL SPACES</h1>
                                        <p className="text-white text-sm text-center mb-4">BY - ELDEOK INDIA ARCHITECTURE AWARDS 2022</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Awards

