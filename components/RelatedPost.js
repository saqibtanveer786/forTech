import React from 'react'
import Image from 'next/image'

export default function RelatedPost() {
    return (

        <div id="related-posts" className="grid gap-2">
            <p className="text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700">Related Posts</p>
            <div className="grid grid-cols-2 border rounded-lg">
                <div className=" md:col-span-2 lg:col-span-1">
                    <Image src="/img/aaa.png" alt='image' className="w-full h-auto" height={500} width={500} />
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-1 px-2 flex flex-col justify-center">
                    <p className="text-xl cursor-pointer">
                        <a href="single.html">
                            While Loop in Javascript
                        </a>
                    </p>
                    <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!</p>
                </div>
            </div>
            <div className="grid grid-cols-2 border rounded-lg">
                <div className=" md:col-span-2 lg:col-span-1">
                    <Image src="/img/aaa.png" alt='image' className="w-full h-auto" height={500} width={500} />
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-1 px-2 flex flex-col justify-center">
                    <p className="text-xl cursor-pointer">
                        <a href="single.html">
                            Foreach Loop in Javascript
                        </a>
                    </p>
                    <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!</p>
                </div>
            </div>
            <div className="grid grid-cols-2 border rounded-lg">
                <div className=" md:col-span-2 lg:col-span-1">
                    <Image src="/img/aaa.png" alt='image' className="w-full h-auto" height={500} width={500} />
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-1 px-2 flex flex-col justify-center">
                    <p className="text-xl cursor-pointer">
                        <a href="single.html">
                            Map Loop in Javascript
                        </a>
                    </p>
                    <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!</p>
                </div>
            </div>
        </div>
    )
}
