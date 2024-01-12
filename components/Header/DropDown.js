import React, { useState } from "react";

import { LiaInfoSolid } from "react-icons/lia";
import { TfiLayoutListPost } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";

import Image from "next/image";
import Link from "next/link";

import { signOut } from "next-auth/react";

export default function DropDown({ session }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (e) => {
    setShowMenu((previous) => !previous);
    console.log(showMenu);
  };
  return (
    <div className=" md:hidden relative items-center">
      <button
        onClick={toggleMenu}
        className="flex gap-2 items-center text-sm font-medium text-gray-900 rounded-full md:mr-0"
        type="button"
      >
        <Image
          height={20}
          width={20}
          className="w-8 h-8 -mr-1 rounded-full"
          src={session?.user.image || "/user-1.jpg"}
          alt="user photo"
          priority
        />
        {session?.user.name}
        <IoIosArrowDown />
      </button>

      {/* <!-- Dropdown menu --> */}
      <div
        className={`${
          !showMenu && "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-52 absolute right-5 top-12 z-1`}
      >
        <div className="px-4 py-3 text-sm">
          <div className="truncate">{session?.user.email}</div>
        </div>
        <ul className="py-2 text-sm">
          <li onClick={toggleMenu}>
            <Link
              href="/profile"
              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
            >
              <AiOutlineUser size={20} className="fill-current" />
              Profile
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link
              href="/blogs"
              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
            >
              <TfiLayoutListPost size={20} className="fill-current" />
              Blogs
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link
              href="/about"
              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
            >
              <LiaInfoSolid size={20} className="fill-current" />
              About
            </Link>
          </li>
          {session.user?.role === "ADMIN" && (
            <li onClick={toggleMenu}>
              <Link
                href="/dashboard"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
              >
                <RxDashboard size={20} className="fill-current" />
                Dashboard
              </Link>
            </li>
          )}
        </ul>
        <div className="py-2">
          <button
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => signOut("google")}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
