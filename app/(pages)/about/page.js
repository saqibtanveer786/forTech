import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

export default function page() {
    return (
        <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">

                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Aslam-o-alikum, I am
                            <br className="block sm:hidden" />Saqib Tanveer
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            I am a Full Stack Web Developer. This blog is developed for sharing out the technologies to others for free.
                        </p>

                        <p className="mt-4 text-xl text-gray-600 md:mt-8">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                <span className="relative"> Have a question? </span>
                            </span>
                            <br className="block sm:hidden" />Ask me on <Link href="https://www.facebook.com/saqibtanveerawebdeveloper"
                                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Facebook</Link>
                        </p>
                    </div>

                    <div className="relative">
                        <Image
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                            alt="Image"
                            width={500}
                            height={500}
                            className='absolute inset-x-0 -bottom-0 -mb-48 -translate-x-1/2 left-1/2'
                        />

                        <Image
                            src="/img/saqibtanveerwithoutbg.png"
                            alt="Image"
                            height={500}
                            width={500}
                            className='relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 sm:-mb-7 lg:mb-0'
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
