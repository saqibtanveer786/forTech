import { categories } from "constants/categories";
import React from "react";

export default function PostCategories({ className }) {
  return (
    <div className="my-8 mx-2">
      <ul className="ml-3 text-lg font-semibold text-gray-700 flex flex-row flex-1 overflow-auto">
        {categories.map((category, i) => (
          <li
            key={i}
            className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 hover:bg-gray-200 rounded-sm text-center min-w-fit"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
