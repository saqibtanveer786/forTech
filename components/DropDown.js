import React, { useState } from 'react'

import { LiaInfoSolid } from 'react-icons/lia'
import { TfiLayoutListPost } from "react-icons/tfi"
import { MdOutlineCreate } from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai"

import Image from 'next/image'
import Link from 'next/link'

import { signOut } from 'next-auth/react';

export default function DropDown({ session }) {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = (e) => {
        e.preventDefault();
        return setShowMenu(previous => !previous);
    }
    return (
        <div className=' md:hidden relative items-center'>
            <button
                id="dropdownAvatarNameButton"
                onClick={toggleMenu}
                data-dropdown-toggle="dropdownAvatarName"
                className="flex items-center text-sm font-medium text-gray-900 rounded-full md:mr-0"
                type="button">
                <Image
                    height={20}
                    width={20}
                    className="w-8 h-8 mr-2 rounded-full"
                    src={session?.user.image || '/user-1.jpg'}
                    alt="user photo"
                    priority
                />
                {session?.user.name}
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
            <div id="dropdownAvatarName" className={`z-10 ${!showMenu && 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-52 absolute right-5 top-12`}>
                <div className="px-4 py-3 text-sm">
                    <div className="truncate">{session?.user.email}</div>
                </div>
                <ul className="py-2 text-sm" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                    <li>
                        <Link
                            href="/profile"
                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                        >
                            <AiOutlineUser
                                size={20}
                                className="fill-current"
                            />
                            Profile
                        </Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link
                            href="/blogs"
                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                        >
                            <TfiLayoutListPost
                                size={20}
                                className="fill-current"
                            />
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                        >
                            <LiaInfoSolid
                                size={20}
                                className="fill-current"
                            />
                            About
                        </Link>
                    </li>
                    {session.user?.role === 'ADMIN' &&
                        <li>
                            <Link
                                href="/profile"
                                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                            >
                                <MdOutlineCreate
                                    size={20}
                                    className="fill-current"
                                />
                                Publish
                            </Link>
                        </li>}
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

