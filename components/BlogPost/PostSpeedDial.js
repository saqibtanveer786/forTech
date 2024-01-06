"use client"
import React, { useRef, useContext } from 'react'
import { useRouter } from 'next/navigation';

// react icons
import { MdDeleteOutline } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { AiOutlinePlus } from 'react-icons/ai';

// Importing the context
import { AlertContext, LoadingContext } from '../../lib/context';

// Import server action
import { deletePost } from '../../lib/serverAction';
import Link from 'next/link';

export default function PostSpeedDial({ blogId }) {

    // consuming context
    const { setShowAlert, setAlertMessage, setAlertStatus } = useContext(AlertContext)
    const { setIsLoading } = useContext(LoadingContext)

    const router = useRouter()

    const listRef = useRef()
    return (
        <>
            <div className="absolute bottom-0 right-0 group flex items-center justify-center p-6 h-20">

                {/* Actions List */}
                <div className='absolute bottom-0 right-1 rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-24 flex p-2 hover:p-3 bg-red-300 hover:bg-red-400 text-white'>
                    <MdDeleteOutline
                        className='cursor-pointer w-5 h-5'
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
                <Link href={`/pages/updateblog/${blogId}`} className='absolute bottom-0 right-1 rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 flex p-2 hover:p-3 bg-green-300 hover:bg-green-400 text-white'>
                    <RxUpdate
                        size={21}
                        className='cursor-pointer'
                    />
                </Link>

                {/* Toggler Button */}
                <button
                    className="flex items-center justify-center text-white bg-primary rounded-full w-12 h-12 hover:bg-indigo-500 focus:ring-blue-300 absolute bottom-0 right-0 "
                >
                    <AiOutlinePlus id={blogId} className='transition-transform group-hover:rotate-45'
                        size={20}
                    />
                </button>

            </div >
        </>

    )
}
