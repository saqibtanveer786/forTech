import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { signOut } from 'next-auth/react';

import { redirect } from 'next/navigation';

export default function DropDown({ session }) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className='relative'>
            <button
                id="dropdownAvatarNameButton"
                onClick={() => setShowMenu(previous => !previous)}
                data-dropdown-toggle="dropdownAvatarName"
                className="flex items-center text-sm font-medium text-gray-900 rounded-full md:mr-0"
                type="button">
                <span className="sr-only">Open user menu</span>
                <Image
                    height={20}
                    width={20}
                    className="w-8 h-8 mr-2 rounded-full"
                    src="/logo.png"
                    alt="user photo" />
                Saqib Tanveer
                <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdownAvatarName" className={`z-10 ${!showMenu && 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}>
                <div className="px-4 py-3 text-sm">
                    <div className="font-medium ">Pro User</div>
                    <div className="truncate">name@flowbite.com</div>
                </div>
                <ul className="py-2 text-sm" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                    <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100">All Blogs</Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Publish Blog</Link>
                    </li>
                </ul>
                <div className="py-2">
                    <button
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => signOut('google')}
                    >Sign out</button>
                </div>
            </div>


        </div>
    )
}

