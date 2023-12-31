"use client"
import React, { useContext, } from 'react'
import { CommentModal, LoadingContext, OtherStates } from '../../lib/context'
import { updateComment } from '../../lib/serverAction'

import { useRouter } from 'next/navigation'

export default function CommentUpModal() {
    const router = useRouter()

    // consuming context 
    const { openModal, setOpenModal, commentValue, setCommentValue } = useContext(CommentModal)
    const { currentCommentGettingUpdated } = useContext(OtherStates)
    const { setIsLoading } = useContext(LoadingContext)

    async function updateCommentHandler(e) {
        try {
            e.preventDefault()
            setIsLoading(true)
            const response = await updateComment(currentCommentGettingUpdated, commentValue)
            if (response.status === 'success') { router.refresh(); setOpenModal((previous) => !previous) }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        // <!-- Main modal -->
        <div id="updateProductModal" tabIndex="-1" aria-hidden="true" className={`${openModal ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-20 z-40 justify-center items-center w-[100vw] md:inset-0 h-modal md:h-full`}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Edit
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " onClick={(e) => { e.preventDefault(); setOpenModal((previous) => !previous); }}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className=" mb-4">
                        <textarea

                            value={commentValue}
                            onChange={(e) => { e.preventDefault(); setCommentValue(e.target.value) }}
                            cols="5"
                            rows="6"
                            className={`outline-none focus:outline-none bg-gray-100 rounded p-4 text-gray-800 font-normal w-full`}
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={updateCommentHandler}
                        >
                            Change
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
