"use client"
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation';

import { submitComment } from '../../lib/serverAction'
import { logos } from '../../lib/logos'
import { AlertContext, LoadingContext } from '../../lib/context'


export default function CommentBox({ userId, blogId, }) {
    const [message, setMessage] = useState('')

    //consuming context 
    const { isSubmittingComment, setIsSubmittingComment, } = useContext(LoadingContext)
    const { setShowAlert, setAlertMessage, setAlertStatus } = useContext(AlertContext)

    async function commentSubmitHandler() {
        setIsSubmittingComment((previous) => !previous)
        const response = await submitComment(message, userId, blogId)
        setIsSubmittingComment(false)
        setAlertMessage(response.message)
        setShowAlert(true)
        setMessage('')
        if (response.status) { setAlertStatus("success"); router.refresh() }
        if (!response.status) setAlertStatus("error")
    }
    const router = useRouter()

    return (
        <div className='max-w-[800px] mx-auto my-8'>
            <textarea
                placeholder="your comment"
                cols="5"
                rows="6"
                value={message}
                onChange={(e) => { e.preventDefault(); setMessage(e.target.value) }}
                className={`outline-none focus:outline-none text-xl bg-gray-100 rounded p-4 text-gray-800 font-semibold w-full ${isSubmittingComment ? 'text-gray-500' : ''}`}
                name='message'
                disabled={isSubmittingComment}
            ></textarea>
            <button className={`my-2 py-2 text-xl text-center w-full text-gray-50 hover:bg-blue-600 focus:outline-none rounded flex justify-center items-center ${isSubmittingComment ? 'bg-blue-200' : 'bg-blue-700'}`} onClick={commentSubmitHandler}>{isSubmittingComment ? logos.circleLoader() : "Comment"}</button>
        </div>
    )
}
