"use client";
import { OtherStates } from "lib/context";
import { getSearchResults } from "lib/serverAction";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const path = usePathname();
  const router = useRouter();
  console.log(path.includes("/searchresults"));
  //consuming context
  const { searchedBlogs, setSearchedBlogs, query, setQuery } = useContext(OtherStates);
  const searchRef = useRef();

  async function toCall() {
    if (!path.includes("/searchresults"))
    router.replace("/searchresults/ArtificialIntelligence");
    const getBlogs = await getSearchResults(searchRef?.current.value);
    setSearchedBlogs(() => getBlogs);
  }

  useEffect(() => {
    searchRef?.current.addEventListener("keydown", function ({ key }) {
      if (key === "Enter") {
        toCall();
      }
    });
    if(searchRef?.current.value && path.includes("/searchresults")){
      toCall();
      return;
    }
  }, []);

  return (
    <div className="mb-3 mx-6">
      <input
        type="search"
        // onClick={(e) => {
        //   e.preventDefault();
        //   if (!path.includes("/searchresults"))
        //     router.replace("/searchresults/ArtificialIntelligence");
        // }}
        ref={searchRef}
        value={query}
        onChange={(e)=>{
          e.preventDefault();
          setQuery(e.target.value)
        }}
        className="block w-full rounded border border-neutral-300 bg-transparent text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:outline-none max-w-[1200px] mx-auto px-3 py-3"
        placeholder="Search Here"
      />
    </div>
  );
}
