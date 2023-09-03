import React from 'react'
import Image from 'next/image'

// Importing gif
import loadingGif from '../public/laodingGif.gif'

export default function Loader() {
    return (
        <div className='grid place-items-center h-screen'>
            <Image src={loadingGif} alt='Loading' width={100} height={100} style={{ marginBlockStart: '-300px' }} />
        </div>
    )
}
