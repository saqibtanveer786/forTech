import React from 'react'
import Image from 'next/image'

export default function RelatedPost() {
    return (

        <div id="related-posts" className="grid gap-2">
            <p className="text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700">Related Posts</p>
            <div className='flex flex-wrap gap-6'>
                <div className="grid grid-cols-1 border rounded-lg p-3 max-w-[270px]">
                    <div className="w-fit">
                        <Image src="/img/general.webp" alt='image' height={250} width={250} />
                    </div>
                    <div className="px-2 flex flex-col justify-start pt-4">
                        <p className="text-xl cursor-pointer">
                            <a href="single.html">
                                While Loop in Javascript
                            </a>
                        </p>
                        <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 border rounded-lg p-3 max-w-[270px]">
                    <div className="w-fit">
                        <Image src="/img/general.webp" alt='image' height={250} width={250} />
                    </div>
                    <div className="px-2 flex flex-col justify-start pt-4">
                        <p className="text-xl cursor-pointer">
                            <a href="single.html">
                                Foreach Loop in Javascript
                            </a>
                        </p>
                        <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 border rounded-lg p-3 max-w-[270px]">
                    <div className="w-fit">
                        <Image src="/img/general.webp" alt='image' height={250} width={250} />
                    </div>
                    <div className="px-2 flex flex-col justify-start pt-4">
                        <p className="text-xl cursor-pointer">
                            <a href="single.html">
                                Map Loop in Javascript
                            </a>
                        </p>
                        <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
