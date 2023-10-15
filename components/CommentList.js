"use client"
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { deleteComment } from '../lib/serverAction'
import { AlertContext } from '../lib/context'

export default function CommentList({ comments, sessionId }) {
    // consuming context
    const { setShowAlert, setAlertMessage, setAlertStatus, commentState, setCommentState } = useContext(AlertContext)

    setCommentState(comments)

    function toggleMenu(id) {
        document.getElementById(id).classList.toggle('hidden')
    }

    return (
        <div className='max-w-[800px] mx-auto'>
            <h2 className='font-bold text-3xl mt-4'>Comments</h2>
            <ul id='commentList'>
                {commentState && commentState.length !== 0 && commentState.map((comment, i) => {
                    return <article id={i} key={comment.id} className="p-6 text-base bg-white rounded-lg relative">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold"><Image
                                    width={6}
                                    height={6}
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src={comment.user?.image}
                                    alt="Michael Gough" />{comment.user?.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">{comment.createdAt.split("T")[0]}</time></p>
                            </div>
                            {(comment.user?.id === sessionId) && <button
                                id="dropdownComment1Button"
                                data-dropdown-toggle="dropdownComment1"
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                                type="button"
                                onClick={(e) => { e.preventDefault(); toggleMenu(comment.id); }}
                            >
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>}
                            {/* <!-- Dropdown menu --> */}
                            <div id={comment.id}
                                className={`hidden absolute right-11 top-12 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow`}>
                                <ul className="py-1 text-sm text-gray-700"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    {(comment.user?.id === sessionId) && <><li>
                                        <div className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">Edit</div>
                                    </li>
                                        <li>
                                            <div
                                                className="block py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                                onClick={async (e) => {
                                                    e.preventDefault();
                                                    toggleMenu(comment.id);
                                                    const response = await deleteComment(comment.id)
                                                    setAlertMessage(response.message);
                                                    setAlertStatus(response.status);
                                                    setShowAlert(true);
                                                    if (response.status === 'success') {
                                                        document.getElementById(i).classList.add('hidden');
                                                    }
                                                }}
                                            >Remove</div>
                                        </li></>}
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="text-gray-500 pl-8">{comment?.message}</p>
                    </article>
                })}
                {comments && comments.length === 0 &&
                    <li className='text-gray-500 mt-2 pl-3'>no comment yet!</li>
                }
            </ul>
        </div>
    )
}
