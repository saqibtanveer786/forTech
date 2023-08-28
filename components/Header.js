'use client';
import React, { useState } from 'react';
import Link from 'next/link';
export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false)

  function toggleNavbar() {
    setShowNavbar(previous => !previous)
  }

  return (
    <header className="md:flex items-center justify-between py-3 md:py-4 relative " >

      {/* Logo Name and toggle button */}
      <div className="flex justify-between min-w-min px-4">
        {/* name and logo */}
        <div className="flex text-3xl font-normal relative  items-center">
          <svg width="40" height="39" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0604 27.0103C29.7333 23.0893 35.8474 16.6142 39.6254 8.51905C40.1123 7.47585 39.871 6.25371 39.3648 5.21976C38.1966 2.83369 37.9273 0.35731 31.5792 1.07481L29.0769 1.19405C30.0128 1.19405 29.5449 1.19405 29.0769 1.19405C26.2213 9.83921 20.8705 16.9667 13.0175 20.9078C7.54419 23.7048 3.49869 28.7902 1.59493 34.8927L1.08063 36.5412C1.02718 36.7125 0.953783 36.7439 1.03271 36.905V36.905C1.69551 38.2585 2.41237 37.8338 1.24774 36.8773C-0.0162787 35.8391 4.54649 41.9692 8.20235 42.3859C8.98846 42.4755 9.62624 41.8869 9.99718 41.188C12.8897 35.7384 16.5983 29.7497 22.0604 27.0103Z" fill="#3798A6" />
            <path d="M54.293 18.2545C52.9177 18.0829 51.6326 19.0064 50.8501 20.1503C46.5712 26.4051 40.9276 31.4619 34.0992 34.9362C28.0309 37.9875 23.3905 43.7085 21.2488 50.5738V50.5738C20.8823 51.9051 21.321 53.3053 22.0817 54.4577C22.8541 55.6279 23.2013 56.5055 25.0387 57.2056C25.2331 57.2797 25.4363 57.33 25.6412 57.3659L29.6561 58.0696C30.1014 58.1477 30.5803 57.9029 30.6385 57.4546V57.4546C30.6522 57.3488 30.6656 57.26 30.6995 57.1589C33.5732 48.5843 39.3809 41.6511 47.1875 37.7332C52.0449 35.251 56.5674 29.4173 58.7712 23.8703C59.2774 22.5963 58.9189 21.1675 57.9822 20.1666V20.1666C57.743 19.9111 57.4687 19.6866 57.1678 19.5079C55.698 18.635 54.964 18.3382 54.293 18.2545Z" fill="#3798A6" />
            <path d="M17.8462 46.7817C18.4399 48.0437 20.2086 47.5179 20.8231 46.2658C23.9715 39.8511 29.07 34.8495 35.2979 31.6915C41.4799 28.5111 46.6705 23.683 50.3399 17.7735C50.6236 17.3166 50.7683 16.7849 50.7594 16.2472C50.658 10.1604 49.3958 9.67645 47.3183 8.9339C45.5442 8.29976 43.3135 8.84337 42.332 10.4516C37.9465 17.6372 31.7406 23.4608 24.3513 27.2417C19.6664 29.5615 15.8593 33.5228 13.4571 38.3374C13.2609 38.7306 13.1639 39.1681 13.1742 39.6074C13.3408 46.715 16.2215 43.2109 17.84 46.768C17.8439 46.7766 17.8422 46.773 17.8462 46.7817V46.7817Z" fill="#3798A6" />
          </svg>
          <Link href="/">
            forTech
          </Link>
        </div>

        {/* toogle button */}
        <svg onClick={toggleNavbar} xmlns="http://www.w3.org/2000/svg" id="menu-toggler" className="block cursor-pointer md:hidden self-center h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>

      </div>

      {/* nabbar */}
      <nav className={`md:mt-0 transition delay-300 ease-out md:px-4 text-center text-white sm:text-black bg-black sm:bg-white ${!showNavbar && 'hidden'} sm:block`}>
        <ul id="menu" className=" w-full py-4 md:py-0 md:mt-0 z-40 absolute   md:relative mt-3 pl-4 flex flex-col  md:flex   md:flex-row m-0 p-0  text-lg md:items-center gap-8">
          <li onClick={toggleNavbar}><Link href="/pages/blogs" className="hover:text-blue-400 ">Blog</Link></li>
          <li onClick={toggleNavbar}><Link href="/pages/about" className="hover:text-blue-400 ">About Us</Link></li>
          <li onClick={toggleNavbar}><Link href="/pages/contact" className="hover:text-blue-400 font-bold">Contact Us</Link></li>
          <li onClick={toggleNavbar}><Link href="/pages/privacy-policy" className="hover:text-blue-400 ">Privacy policy</Link></li>
          <li onClick={toggleNavbar}><Link href="/pages/addblog" className="hover:text-blue-400 ">Add Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}
