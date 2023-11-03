'use client';
import React, { useState } from 'react';

// nextjs imports
import Link from 'next/link';
import { logos } from '../lib/logos'

import { LiaInfoSolid } from 'react-icons/lia'
import { RxDashboard } from 'react-icons/rx'
import { TfiLayoutListPost } from "react-icons/tfi"
import { AiOutlineUser } from "react-icons/ai"

// components
import DropDown from '../components/DropDown'
import { signOut } from 'next-auth/react';

export default function Header({ session }) {
  return (
    <header className="flex items-center justify-between py-4 pr-3 relative max-w-7xl mx-auto" >

      {/* Logo Name and toggle button */}
      <div className="flex text-3xl font-normal relative items-center -mt-[15px]">
        <Link href="/">
          {logos.siteLogo}
        </Link>
      </div>

      {/* Menu List */}
      {session && <ul className="hidden md:flex items-center ">
        {(session.user?.role === 'AUTHER' || session.user?.role === 'ADMIN') && <li>
          <Link
            href="/dashboard"
            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
          >
            <RxDashboard
              size={20}
              className="fill-current"
            />
            DashBoard
          </Link>
        </li>}
        <li>
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
            Publish
          </Link>
        </li>
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
        <li>
          <button
            onClick={(e) => { e.preventDefault(); signOut() }}
            className="block px-4 py-2 bg-graydark hover:bg-black rounded-md text-white ml-2">Sign Out</button>
        </li>
      </ul>}

      {/* DropDowm */}
      {session && <DropDown session={session} />}

      {!session &&
        <div className="flex h-full items-center justify-center self-center">
          <Link href="/about" className="block px-2 py-2 hover:bg-gray-100 mx-2">About Us</Link>
          <Link href="/signin" className="block px-4 py-2 bg-graydark hover:bg-black rounded-md text-white ml-2">Sign In</Link>
        </div>
      }

    </header>
  );
}
