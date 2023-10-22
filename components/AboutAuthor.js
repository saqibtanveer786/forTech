import React from 'react'
import Image from 'next/image'

// icons
import { logos } from '../lib/logos'

export default function AboutAuthor() {
    return (
        <div id="author-card" className="flex flex-col items-center">
            <h2 className="text-xl font-semibold border-l-4 border-gray-800 pl-2 text-gray-700 self-start mb-3">About Author</h2>
            <div >
                <Image src='/img/saqibtanveerimg.webp' alt="Author's Image" width={150} height={150} className='rounded-full' />
                {/* <div className="w-48 h-48 bg-gray-900 bg-author-img bg-contain bg-no-repeat bg-cent rounded-full"></div> */}
            </div>
            <div>
                <p id="author-name" className="text-2xl text-center font-medium my-4 text-gray-800">Saqib Tanveer</p>
                <p className="my-1 text-gray-600 text-center">
                    Saqib Tanveer is not a content write and he write the blogs here by using chat gpt. You can visit the Saqib accounts below
                </p>

                {/* social media icons */}
                {/* <div className="flex justify-center">
                    <div className="w-16 h-16 cursor-pointer flex justify-center rounded-full">
                        {logos.facebook}
                    </div>
                    <div className="w-16 h-16 flex justify-center cursor-pointer rounded-full">
                        {logos.quora}
                    </div>
                    <div className="w-16 h-16 flex justify-center cursor-pointer rounded-full">
                        {logos.twitter}
                    </div>
                </div> */}
            </div>
        </div>
    )
}
