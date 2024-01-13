import React, { Suspense } from "react";
import SearchBar from "@components/Search/SearchBar";
const SearchedBlogs = dynamic(
  () => import("@components/Search/SearchedBlogs"),
  { ssr: false }
);

import { getBlogsByCategory, getSearchResults } from "lib/serverAction";
import dynamic from "next/dynamic";

function Loader() {
  return <p>Loading .....</p>;
}

export default async function SearchPage({ params }) {
  let blogs = await getBlogsByCategory(params.category);
  console.log("blogs on client are:", blogs);
  return (
    <section>
      <SearchBar />
      <Suspense fallback={<Loader />}>
        <SearchedBlogs blogs={blogs} />
      </Suspense>
    </section>
  );
}
