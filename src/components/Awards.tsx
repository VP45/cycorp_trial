/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
const Awards = () => {
  return (
    <div className="mb-16">
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                    </div>
                </div>
                <div className="w-full px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md outline outline-black">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-40 w-40">
                                            <Image src="/jasleen.jpg" alt="Display Picture of Andres Berlin" role="Image" className="object-cover h-full w-full shadow-md" width={1000} height={1000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-24">
                                        <h1 className="font-bold text-3xl text-center mb-1">dd Berlin</h1>
                                        <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <Image src="/jasleen.jpg" alt="Display Picture of Silene Tokyo" role="Image" className="rounded-full object-cover h-full w-full shadow-md" width={1000} height={1000} />
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
                                            <Image src="/jasleen.jpg" alt="Display Picture of Johnson Stone" role="Image" className="rounded-full object-cover h-full w-full shadow-md" width={1000} height={1000}/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Johnson Stone</h1>
                                        <p className="text-gray-800 text-sm text-center">Manager Development</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Awards

