import React from 'react'

import Image from 'next/image'
import { getAuthSession } from '../../../../lib/auth'

export default async function page() {
    const session = await getAuthSession()
    console.log("session is:", session)
    return (
        <>
            <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow mx-auto mt-4 h-96 grid place-items-center">
                <div className="flex flex-col items-center pb-10">
                    <Image height={100} width={100} className="w-24 h-24 mb-3 rounded-full shadow-lg" src={session?.user.image || "/user-1.jpg"} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">{session?.user.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{session?.user.email}</span>
                </div>
            </div>

        </>
    )
}
