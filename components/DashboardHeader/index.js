"use client"
import Link from "next/link";
import DropdownNotification from "./DropdownNotification";
import { logos } from "../../lib/logos";

import { BiLogOut } from 'react-icons/bi'
import { RxDashboard } from 'react-icons/rx'
import { TfiLayoutListPost } from "react-icons/tfi"
import { MdOutlineCreate } from "react-icons/md"
import { IoSettingsOutline } from "react-icons/io5"
import { LiaInfoSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";

const Header = (props) => {
  return (
    <header className="z-999 flex w-full bg-white drop-shadow-1 max-w-7xl mx-auto">
      <div className="flex flex-grow items-center justify-between py-4 pr-3 shadow-2">
        {/* left col */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link className="block flex-shrink-0 -mt-4" href="/">
            {logos.siteLogo}
          </Link>
        </div>

        {/* right col */}
        <div className="flex gap-4">
          {/* Menu List */}
          <ul className="flex ">
            <li>
              <Link
                href="/dashboard"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
              >
                <RxDashboard
                  size={20}
                  className="fill-current"
                />
                Dashboard
              </Link>
            </li>
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
                About
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
          </ul>
          {/* btns */}
          <div className="flex items-center gap-3 2xsm:gap-7">
            <ul className="flex items-center gap-2 2xsm:gap-4">

              {/* <!-- Notification Menu Area --> */}
              <DropdownNotification />
              {/* <!-- Notification Menu Area --> */}

              {/* <!-- LogOut Button --> */}
              <BiLogOut
                size={20}
                className="fill-current hover:cursor-pointer"
              />
              {/* <!-- LogOut Button --> */}

            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
