"use client"
import React, { useContext } from 'react'
import Image from 'next/image'

// Importing context
import { MyContext } from '../lib/MyContext'

// Importing gif
import loadingGif from '../public/laodingGif.gif'

export default function Loader() {

    // consuming context
    const { isLoading } = useContext(MyContext)

    return (
        isLoading && <div className={`grid place-items-center h-[100vh] w-full fixed z-50 backdrop-blur-lg top-0`}>
            <Image src={loadingGif} alt='Loading' width={100} height={100} style={{ marginBlockStart: '-300px', backgroundColor: 'white' }} />
        </div>
    )
}
