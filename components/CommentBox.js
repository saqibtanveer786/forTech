import React from 'react'

export default function CommentBox() {
    return (
        <form id="comment">
            <textarea placeholder="your comment" cols="5" rows="6" className="outline-none focus:outline-none text-xl bg-gray-100 rounded p-4 text-gray-800 font-semibold w-full"></textarea>
            <input type="email" className="w-full bg-gray-100 p-2 my-2 px-4 text-xl text-gray-800 rounded focus:outline-none" placeholder="your email" required="true " />
            <input type="text" className="w-full bg-gray-100 p-2 px-4 text-xl text-gray-800 rounded focus:outline-none" placeholder="your name" required="true " />
            <button className="my-2 py-2 text-xl text-center w-full bg-blue-700 text-gray-50 hover:bg-blue-600 focus:outline-none rounded" type="submit">Comment</button>
        </form>
    )
}
