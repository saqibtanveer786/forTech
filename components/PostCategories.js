import React from 'react'

export default function PostCategories({ className }) {
    return (
        <div className="my-8 mx-2">
            <ul className="ml-3 text-lg font-semibold text-gray-700 flex flex-row flex-1 overflow-auto">
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">Javascript</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">Node Js</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">React Js</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">Artificial Intelligence</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">Cloud Computing</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">Amazon</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">News</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">Next Js</li>
                <li className="border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm text-center min-w-fit">Programming</li>
            </ul>
        </div>
    )
}
