'use client';
import React, { useState } from 'react';

// nextjs imports
import Link from 'next/link';
import Image from 'next/image'
import { logos } from '../lib/logos'

// components
import DropDown from '../components/DropDown'

export default function Header({ session }) {
  const [showNavbar, setShowNavbar] = useState(true)

  function toggleNavbar() {
    setShowNavbar(previous => !previous)
  }

  return (
    <header className="flex items-center justify-between pb-3 pt-1 md:py-4 pr-3 relative max-w-7xl mx-auto" >

      {/* Logo Name and toggle button */}
      <div className="flex text-3xl font-normal relative items-center ">
        <Link href="/">
          {logos.siteLogo}
        </Link>
      </div>

      {/* DropDowm */}
      {session && <DropDown session={session} />}

      {!session &&
        <div className="flex h-full items-center justify-center mt-4 self-center">
          <Link href="/pages/contact" className="block px-2 py-2 hover:bg-gray-100 mx-2">Contact</Link>
          <Link href="/pages/signin" className="block px-4 py-2 hover:bg-blue-800 bg-blue-700 rounded-md text-white">Sign In</Link>
        </div>
      }

    </header>
  );
}
