import React from 'react'
import Image from 'next/image'

import { getAuthSession } from '../../../../lib/auth'

import UserBio from '../../../../components/UserBio'

import { BiSolidCamera } from 'react-icons/bi'

export const metadata = {
    title: 'forTech-Profile',
    description: "User's profile details on forTech",
}

export default async function page() {
    const session = await getAuthSession()
    return (
        <>

            <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default ">
                {/* Background Image */}
                <div className="relative z-20 h-35 md:h-65">
                    <Image
                        src={"/images/cover/cover-01.png"}
                        alt="profile cover"
                        className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                        width={970}
                        height={260}
                    />
                </div>
                <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">

                    {/* User Image */}
                    <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full p-1 sm:h-44 sm:max-w-44 sm:p-3">
                        <div className="relative drop-shadow-2">
                            <Image
                                src={session.user?.image}
                                width={160}
                                height={160}
                                alt="profile"
                            />
                            <label
                                htmlFor="profile"
                                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                            >
                                <BiSolidCamera className='fill-current' />
                                <input
                                    type="file"
                                    name="profile"
                                    id="profile"
                                    className="sr-only"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="mt-4">
                        {/* Name */}
                        <h3 className="mb-1.5 text-2xl font-semibold text-black">
                            {session.user?.name}
                        </h3>

                        {/* Email */}
                        <p className="font-medium">{session.user?.email}</p>

                    </div>
                </div>
            </div>

        </>
    )
}
