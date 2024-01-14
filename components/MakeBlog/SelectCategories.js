import { categories } from "constants/categories";
import React from "react";

export default function SelectCategories({
  handleCategoryChange,
  selectedCategories,
}) {
  return (
    <div className="mx-auto mt-10 p-6 ">
      <h1 className="text-2xl font-semibold mb-4">Category Selection</h1>
      <div className="grid grid-cols-3 lg:grid-cols-2 gap-4">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            {category.substring(0, 10)} ..
          </label>
        ))}
      </div>
    </div>
  );
}
