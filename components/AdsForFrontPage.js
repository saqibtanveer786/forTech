import React from 'react'

import Image from 'next/image'

export default function AdsForFrontPage() {
    return (

        <section className="flex justify-center h-fit max-w-7xl mx-auto">
            <Image src={'/adds/freepalestine.jpg'} alt='Ads' width={750} height={300} priority />
        </section>
    )
}
