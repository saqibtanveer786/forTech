'use client';
import React, { useState } from 'react';
import Link from 'next/link';
export default function Header() {

  return (
    <header className="md:flex items-center justify-between py-3 md:py-4 relative " >
      <div className="flex justify-between min-w-min px-4">
        <div className="flex text-3xl font-normal relative  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <Link href="/">
            forTech
          </Link>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" id="menu-toggler" className="block cursor-pointer md:hidden self-center h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <nav className=" md:mt-0 transition delay-300 ease-out md:px-4">
        <ul id="menu" className=" w-full py-4 md:py-0 md:mt-0 z-40 absolute   md:relative mt-3 pl-4 flex flex-col  md:flex   md:flex-row m-0 p-0  text-lg md:items-center gap-8">
          <li><Link href="/pages/blogs" className="hover:text-blue-400 ">Blog</Link></li>
          <li><Link href="/pages/about" className="hover:text-blue-400 ">About Us</Link></li>
          <li><Link href="/pages/contact" className="hover:text-blue-400 font-bold">Contact Us</Link></li>
          <li><Link href="/pages/privacy-policy" className="hover:text-blue-400 ">Privacy policy</Link></li>
          <li><Link href="/pages/addblog" className="hover:text-blue-400 ">Add Blog</Link></li>
        </ul>

      </nav>
    </header>
  );
}
