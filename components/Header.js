'use client';
import React, { useState } from 'react';

// nextjs imports
import Link from 'next/link';
import Image from 'next/image'

// components
import DropDown from '../components/DropDown'

export default function Header({ session }) {
  const [showNavbar, setShowNavbar] = useState(true)

  function toggleNavbar() {
    setShowNavbar(previous => !previous)
  }

  return (
    <header className="md:flex items-center justify-between py-3 md:py-4 px-4 md:px-0 relative max-w-7xl mx-auto" >

      {/* Logo Name and toggle button */}
      <div className="flex justify-between min-w-min">
        {/* name and logo */}
        <div className="flex text-3xl font-normal relative items-center ">
          <Link href="/">
            <Image src="/logoo.png" alt="forTech" width={150} height={150} className='-mt-[12px]' />
          </Link>
        </div>

        {/* toogle button */}
        {/* {!session && <svg onClick={toggleNavbar} xmlns="http://www.w3.org/2000/svg" id="menu-toggler" className="block cursor-pointer sm:hidden self-center h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>} */}
        {session && <DropDown session={session} />}

        {!session &&
          <div className="flex h-full items-center justify-center mt-1 self-center">
            <Link href="/pages/contact" className="block px-2 py-2 hover:bg-gray-100 mx-2">Contact</Link>
            <Link href="/pages/signin" className="block px-4 py-2 hover:bg-blue-800 bg-blue-700 rounded-md text-white">Sign In</Link>
          </div>
        }
      </div>

    </header>
  );
}
