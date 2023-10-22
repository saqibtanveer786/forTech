import React from 'react'

export default function PostCategories() {
    return (
        <div className="my-8 ">
            <p className="text-xl font-semibold border-l-4 border-gray-800 pl-2 text-gray-700">Explore Categories</p>
            <ul className="ml-3 text-lg font-semibold text-gray-700">
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm flex justify-between">Javascript</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm flex justify-between">Node Js</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm flex justify-between">React Js</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm flex justify-between">CSS</li>
            </ul>
        </div>
    )
}
