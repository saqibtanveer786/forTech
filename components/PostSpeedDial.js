"use client"
import React, { useRef, useContext } from 'react'
import { useRouter } from 'next/navigation';

// react icons
import { MdDeleteOutline } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { AiOutlinePlus } from 'react-icons/ai';

// Importing the context
import { AlertContext, LoadingContext } from '../lib/context';

// Import server action
import { deletePost } from '../lib/serverAction';

export default function PostSpeedDial({ blogId }) {
    console.log('blogIdis: ' + blogId)

    // consuming context
    const { setShowAlert, setAlertMessage, setAlertStatus } = useContext(AlertContext)
    const { setIsLoading } = useContext(LoadingContext)

    const router = useRouter()

    const listRef = useRef()
    return (
        <>
            <div className="absolute bottom-0 right-1 group flex flex-col items-center">

                {/* Actions List */}
                <div ref={listRef} className=" flex-col gap-2 items-center invisible py-7 -mb-5 p-1 transition-opacity duration-500" >
                    <div className='flex justify-center items-center w-[45px] h-[45px] text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-600 shadow-sm focus:ring-4 focus:ring-gray-400 focus:outline-none'>
                        <MdDeleteOutline
                            size={23}
                            className='cursor-pointer'
                            onClick={async () => {
                                setIsLoading(true);
                                const response = await deletePost(blogId)
                                if (response.status) {       //Incase of success
                                    setIsLoading(false);
                                    setShowAlert(true);
                                    setAlertStatus("success");
                                    setAlertMessage(response.message);
                                    router.refresh()
                                }
                                if (!response.status) {      //Incase of error
                                    setIsLoading(false);
                                    setShowAlert(true);
                                    setAlertStatus("error");
                                    setAlertMessage(response.message);
                                }
                            }}
                        />
                    </div>
                    <div className='flex justify-center items-center w-[45px] h-[45px] text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-600 shadow-sm focus:ring-4 focus:ring-gray-400 focus:outline-none'>
                        <RxUpdate
                            size={21}
                            className='cursor-pointer'
                        />
                    </div>
                </div>

                {/* Toggler Button */}
                <button
                    className="flex items-center justify-center text-white bg-blue-700 rounded-full w-12 h-12 hover:bg-blue-800 focus:ring-blue-300"
                    onClick={(e) => {
                        e.preventDefault();
                        listRef?.current.classList.toggle('flex');
                        listRef?.current.classList.toggle('invisible');
                        const node = document.getElementById(blogId);
                        node.classList.toggle('rotate-45')
                    }}
                >
                    <AiOutlinePlus id={blogId} className='transition-transform'
                        size={20}
                    />
                </button>

            </div >
        </>

    )
}
