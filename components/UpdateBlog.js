'use client';
import React, { useState, useContext, useRef } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
//editorjs imports 
// const EditorJS = dynamic(() => import('@editorjs/editorjs'), { ssr: false });
import EditorJS from '@editorjs/editorjs'; //?
import Header from '@editorjs/header';
import ImageTool from "@editorjs/image"
import RawTool from "@editorjs/raw"
import Embed from "@editorjs/embed"
import Checklist from "@editorjs/checklist"
import List from '@editorjs/list';
import Quote from "@editorjs/quote"
import CodeTool from "@editorjs/code"

import TextareaAutosize from 'react-textarea-autosize'

// Importing context
import { AlertContext, LoadingContext } from '../lib/context'
// react icons
import { AiOutlinePlus } from 'react-icons/ai';

// Importing serverActions
import { updateBlog } from '../lib/serverAction'

// uploadthing 
import { UploadDropzone } from "@uploadthing/react";
import { uploadFiles } from '../lib/uploadthings'

// nextjs specific 
import Image from 'next/image'

export default function UpdateBlog({ id, title, description, image, content }) {
    const router = useRouter()
    const [isImageUploaded, setIsImageUploaded] = useState(true);

    const editorRef = useRef();

    // consuming context
    const { setShowAlert, setAlertMessage, setAlertStatus } = useContext(AlertContext)
    const { setIsLoading } = useContext(LoadingContext)
    const [titleState, setTitleState] = useState(title)
    const [descriptionState, setDescriptionState] = useState(description)
    const [imageState, setImageState] = useState(image)

    // main function to submit blogs( this function calls the server action and handle loading, alerts etc )
    async function submitFormHandler(e) {
        e.preventDefault()
        if (!isImageUploaded) { setShowAlert(true); setAlertMessage("Uploading front image is necessary"); setAlertStatus("error"); return; }
        const data = {}
        data.title = titleState
        data.briefdescription = descriptionState
        data.content = await editorRef?.current.save()
        data.image = imageState
        try {
            setIsLoading(true)
            const response = await updateBlog(data, id)
            if (response.status) {       //Incase of success
                setAlertStatus("success");
                setAlertMessage(response.message);
                resetInputFields();
                router.push("/");
                router.refresh();
            }
            if (!response.status) {      //Incase of error
                setAlertStatus("error");
                setAlertMessage(response.message);
            }
        } catch (error) {
            console.log(error);
            setAlertStatus("error");
            setAlertMessage("Something went wrong");
        } finally {
            setIsLoading(false);
            setShowAlert(true);
        }
    }

    // Function for resetting input fields
    function resetInputFields() {
    }

    // initializing editorjs
    if (!editorRef.current) {
        let editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => { editorRef.current = editor },
            placeholder: "Tab here to start",
            inlineToolbar: true,
            data: content,
            autofocus: true,
            tools: {
                header: {
                    class: Header,
                    config: {
                        placeholder: 'Enter a header',
                        levels: [1, 2, 3, 4, 5, 6],
                        defaultLevel: 1
                    },
                    inlineToolbar: true,
                },
                image: {
                    class: ImageTool,
                    config: {
                        uploader: {
                            async uploadByFile(file) {
                                const [res] = await uploadFiles({
                                    files: [file],
                                    endpoint: "imageUploader",
                                })
                                return {
                                    success: 1,
                                    file: {
                                        url: res.url
                                    }
                                }
                            }
                        }
                    }
                },
                raw: {
                    class: RawTool,
                    inlineToolbar: true
                },
                embed: {
                    class: Embed,
                    config: {
                        services: {
                            youtube: true,
                            coub: true
                        }
                    }
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered',
                    }
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author',
                    },
                },
                code: {
                    class: CodeTool,
                    placeholder: "Code",
                },
            }
        });
    }

    return (
        <>
            <section className=' max-w-3xl mx-auto'>

                {/* Title */}
                <div className='prose prose-stone sm:px-9 px-2'>
                    <TextareaAutosize
                        value={titleState}
                        onChange={(e) => { e.preventDefault(); setTitleState(e.target.value) }}
                        placeholder='Title'
                        className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none'
                    />
                </div>

                {/* Description */}
                <div className='prose prose-stone sm:px-9 px-2'>
                    <TextareaAutosize
                        value={descriptionState}
                        onChange={(e) => { e.preventDefault(); setDescriptionState(e.target.value) }}
                        placeholder='Meta Description'
                        className='w-full resize-none appearance-none overflow-hidden bg-transparent text-lg font-bold focus:outline-none'
                    />
                </div>

                {/* Front Image */}
                <div className='max-w-7xl grid place-items-center'>
                    <UploadDropzone
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            setImageState(res[0].url)
                        }}
                        onUploadError={(error) => {
                            alert(`ERROR! ${error}`);
                        }}
                        className={`w-full ${imageState && 'hidden'}`}
                    />
                    <Image src={imageState} alt='Image' width={700} height={700} className={`mb-3 ${!imageState && "hidden"}`} />
                </div>
                <AiOutlinePlus size={30} className='bg-black rounded-full text-white p-1 ml-8' onClick={(e) => { e.preventDefault(); setImageState('') }} />

                {/* Editor Js */}
                <div id='editorjs' className='sm:w-[100%] w-[100%] mx-auto mb-2' ></div>

                {/* Submit Button */}
                <div className='flex justify-end my-4'>
                    <button
                        onClick={submitFormHandler}
                        type="submit"
                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:outline-none `}
                    >Publish</button>
                </div>

            </section>
        </>
    )
}
