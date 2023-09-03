import React from 'react'
import Image from 'next/image'

// Importing gif
import loadingGif from '../public/laodingGif.gif'

export default function Loader({ isLoading, className }) {
    return (
        isLoading && <div className={`grid place-items-center h-screen w-full absolute backdrop-blur-lg ${className}`}>
            <Image src={loadingGif} alt='Loading' width={100} height={100} style={{ marginBlockStart: '-300px' }} />
        </div>
    )
}
