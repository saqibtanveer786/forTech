'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false)

  function toggleNavbar() {
    setShowNavbar(previous => !previous)
  }

  return (
    <header className="md:flex items-center justify-between py-3 md:py-4 relative max-w-7xl mx-auto" >

      {/* Logo Name and toggle button */}
      <div className="flex justify-between min-w-min">
        {/* name and logo */}
        <div className="flex text-3xl font-normal relative items-center">
          <Link href="/">
            <Image src={'/logo.png'} alt='forTech' width={150} height={150} />
          </Link>
        </div>

        {/* toogle button */}
        <svg onClick={toggleNavbar} xmlns="http://www.w3.org/2000/svg" id="menu-toggler" className="block cursor-pointer sm:hidden self-center h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>

      </div>

      {/* nabbar */}
      <nav className={`md:mt-0 transition delay-300 ease-out text-center text-white sm:text-black ${!showNavbar && 'hidden'} sm:block`}>
        <ul id="menu" className=" w-full py-4 md:py-0 md:mt-0 z-40 absolute   md:relative mt-3 pl-4 flex flex-col  md:flex md:flex-row m-0 p-0  text-lg md:items-center gap-8">
          <li onClick={toggleNavbar}><Link href="/pages/blogs" className="hover:text-blue-900 ">Blog</Link></li>
          {/* <li onClick={toggleNavbar}><Link href="/pages/about" className="hover:text-blue-400 ">About Us</Link></li> */}
          <li onClick={toggleNavbar}><Link href="/pages/contact" className="hover:text-blue-900 font-bold">Contact Us</Link></li>
          {/* <li onClick={toggleNavbar}><Link href="/pages/privacy-policy" className="hover:text-blue-400 ">Privacy policy</Link></li> */}
          <li onClick={toggleNavbar}><Link href="/pages/addblog" className="hover:text-blue-900 ">Add Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}
