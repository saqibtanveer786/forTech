"use client";
import Link from "next/link";

//lib
import { logos } from "../../lib/logos";

// icons
import { RxDashboard } from "react-icons/rx";
import { TfiLayoutListPost } from "react-icons/tfi";
import { LiaInfoSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";

// components
import DropDown from "./DropDown";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { getAuthorIdFromUserId } from "lib/serverAction";
import { useEffect, useState } from "react";

const Header = ({ session }) => {
  const path = usePathname();

  const [authorId, setAuthorId] = useState();

  useEffect(() => {
    async function toCall() {
      if (session) {
        const authorId = await getAuthorIdFromUserId(session?.user?.id);
        if (authorId) setAuthorId(() => authorId);
        console.log("author id from useEffect is: ", authorId);
      }
    }
    toCall();
  }, []);

  return (
    <header
      className={`z-999 bg-white flex w-full ${
        path === "/dashboard" ? "drop-shadow-1" : ""
      } max-w-7xl mx-auto `}
    >
      <div
        className={`flex flex-grow items-center justify-between py-4 pr-3 ${
          path === "/dashboard" ? "shadow-2" : ""
        } `}
      >
        {/* left col */}
        <div className="">
          <Link className="block flex-shrink-0 -mt-4" href="/">
            {logos.siteLogo}
          </Link>
        </div>

        {/* right col */}
        {session && (
          <div className="">
            {/* Menu List */}
            <ul className="hidden md:flex items-center">
              {(session?.user?.role === "ADMIN" ||
                session?.user?.role === "AUTHER") && (
                <li>
                  <Link
                    href="/dashboard"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                  >
                    <RxDashboard size={20} className="fill-current" />
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/blogs"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                >
                  <TfiLayoutListPost size={20} className="fill-current" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                >
                  <LiaInfoSolid size={20} className="fill-current" />
                </Link>
              </li>
              <li>
                {!authorId && (
                  <Link
                    href="profile"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                  >
                    <AiOutlineUser size={20} className="fill-current" />
                  </Link>
                )}
                {authorId && (
                  <a
                    href={`/authorprofile/${authorId.id}`}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-graydark duration-300 ease-in-out hover:bg-graydark hover:text-white`}
                  >
                    <AiOutlineUser size={20} className="fill-current" />
                  </a>
                )}
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                  className="block px-4 py-2 bg-graydark hover:bg-black rounded-md text-white ml-2"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* DropDowm */}
        {session && <DropDown session={session} />}

        {!session && (
          <div className="flex h-full items-center justify-center self-center">
            <Link
              href="/about"
              className="block px-2 py-2 hover:bg-gray-100 mx-2"
            >
              About Us
            </Link>
            <Link
              href="/signin"
              className="block px-4 py-2 bg-graydark hover:bg-black rounded-md text-white ml-2"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
