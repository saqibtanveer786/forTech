'use client';
import React, { useState, useContext } from 'react';

// Importing context
import { AlertContext, LoadingContext } from '../lib/context'

// Importing editor
import JoditEditor from 'jodit-react';

// Importing serverActions
import { pusblishBlog } from '../lib/serverAction'

// import { uploadFiles } from '../../../lib/uploadthings';
import { UploadButton } from '../lib/uploadthings';

import { useRouter } from 'next/navigation';

export default function PublishBlog({ session }) {

    const router = useRouter()

    if (!session) router.push('/pages/signin')


    const [data, setData] = useState();
    const [content, setContent] = useState('');
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    // consuming context
    const { setShowAlert, setAlertMessage, setAlertStatus } = useContext(AlertContext)
    const { setIsLoading } = useContext(LoadingContext)

    // Function for getting input fields data
    async function getData(e) {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function resetInputFields() {
        setData({})
        setContent('')
    }

    return (
        <>
            <section className='w-[90%] max-w-7xl mx-auto my-14'>
                <h1 className='text-2xl font-bold'>Add Blog</h1>
                <input
                    value={data?.title || ""}
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6"
                    placeholder='Title'
                    autoComplete='off'
                    required
                    name='title'
                    onChange={getData}
                />

                <input
                    value={data?.briefdescription || ""}
                    type="text"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 my-6"
                    placeholder='Brief Description'
                    autoComplete='off'
                    required
                    name='briefdescription'
                    onChange={getData}
                />
                <div className='w-full flex justify-start items-start gap-4 py-4'>
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            // Do something with the response
                            setIsImageUploaded(true)
                            setData({ ...data, image: res[0].fileUrl })
                            alert("Upload Completed");
                        }}
                        onUploadError={(error) => {
                            alert(`ERROR! ${error.message}`);
                        }}
                    />
                    <span className='text-xl text-gray-500'>Upload an image for the blog</span>
                </div>
                <JoditEditor
                    value={content}
                    tabIndex={1}
                    onChange={setContent}
                />
                <button
                    disabled={!isImageUploaded}
                    onClick={async (e) => {
                        e.preventDefault()
                        if (!isImageUploaded) return
                        setIsLoading(true)
                        const response = await pusblishBlog(data, content)
                        if (response.status) {       //Incase of success
                            setIsLoading(false);
                            setShowAlert(true);
                            setAlertStatus("success");
                            setAlertMessage(response.message);
                            resetInputFields()
                        }
                        if (!response.status) {      //Incase of error
                            setIsLoading(false);
                            setShowAlert(true);
                            setAlertStatus("error");
                            setAlertMessage(response.message);
                        }
                    }}
                    type="submit"
                    className={`mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${(!isImageUploaded || !data?.title || !data.briefdescription || !content) && 'bg-gray-700 hover:bg-gray-700'}`}
                >{(!isImageUploaded || !data?.title || !data.briefdescription || !content) ? 'Fill All Fields' : 'Publish'}</button>
            </section>
        </>
    )
}
