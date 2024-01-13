import { categories } from "constants/categories";
import Link from "next/link";
import React from "react";

export default function PostCategories({ className }) {
  return (
    <div className="mt-8 mb-4 mx-2">
      <ul className="ml-3 text-lg font-semibold text-gray-700 flex flex-row flex-1 overflow-auto">
        {categories.map((category, i) => (
          <Link
            key={i}
            className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 hover:bg-gray-200 rounded-sm text-center min-w-fit"
            href={`/searchresults/${category.split(" ").join("")}`}
          >
            {category}
          </Link>
        ))}
      </ul>
    </div>
  );
}
