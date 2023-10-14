import React from 'react'

export default function CommentList({ comments }) {
    return (
        <div className='max-w-[800px] mx-auto'>
            <h2 className='font-bold text-3xl mt-4'>Comments</h2>
            <ul>
                {comments && comments.length !== 0 && comments.map((comment, i) => {
                    return <li
                        key={i}
                        className='text-gray-500 mt-2 pl-3'
                    >{comment?.message}</li>
                })}
                {comments && comments.length === 0 &&
                    <li className='text-gray-500 mt-2 pl-3'>no comment yet!</li>
                }
            </ul>
        </div>
    )
}
