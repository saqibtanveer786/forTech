"use client";
import { OtherStates } from "lib/context";
import { getSearchResults } from "lib/serverAction";
import React, { useContext, useEffect, useRef } from "react";

export default function SearchBar() {
  //consuming context
  const { searchedBlogs, setSearchedBlogs } = useContext(OtherStates);
  const searchRef = useRef();

  async function toCall() {
    const getBlogs = await getSearchResults(searchRef?.current.value);
    setSearchedBlogs(() => getBlogs);
  }

  useEffect(() => {
    searchRef?.current.addEventListener("keydown", function ({ key }) {
      if (key === "Enter") {
        toCall();
      }
    });
  }, []);

  return (
    <div className="mb-3 mx-6">
      <input
        type="search"
        ref={searchRef}
        className="block w-full rounded border border-neutral-300 bg-transparent text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:outline-none max-w-[1200px] mx-auto px-3 py-3"
        placeholder="Search Here"
      />
      {searchedBlogs && searchedBlogs.length === 0 && (
        <div className="h-screen grid justify-items-center pt-32">
          <h2 className="text-2xl text-gray-400">NO Result!</h2>
        </div>
      )}
    </div>
  );
}
