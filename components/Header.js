'use client';
import React, { useState } from 'react';
import Link from 'next/link';
export default function Header() {

  return (
    <header class="md:flex items-center justify-between py-3 md:py-4 bg-gray-900 relative text-gray-50 " style={{ background: 'linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(9,9,118,1) 13%, rgba(0,212,255,1) 100%, rgba(2,0,36,1) 100%)' }}>
      <div class="flex justify-between min-w-min px-4">
        <div class="flex text-3xl font-normal relative  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <Link href="/">
            forTech
          </Link>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" id="menu-toggler" class="block cursor-pointer md:hidden self-center h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <nav class=" md:mt-0 transition delay-300 ease-out md:px-4">
        <ul id="menu" class=" w-full py-4 md:py-0 md:mt-0 z-40 absolute   md:relative mt-3 pl-4 flex flex-col  md:flex   md:flex-row m-0 p-0  text-lg md:items-center gap-8">
          <li><Link href="/" class="hover:text-blue-400 ">Blog</Link></li>
          <li><Link href="/pages/about" class="hover:text-blue-400 ">About Us</Link></li>
          <li><Link href="/pages/contact" class="hover:text-blue-400 font-bold">Contact Us</Link></li>
          <li><Link href="/pages/privacy-policy" class="hover:text-blue-400 ">Privacy policy</Link></li>
        </ul>

      </nav>
    </header>
  );
}
