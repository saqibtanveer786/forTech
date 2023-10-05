'use client';
import React, { useState, useContext, useCallback, useRef } from 'react';

//editorjs imports 
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

// Importing editor
import JoditEditor from 'jodit-react';

// Importing serverActions
import { pusblishBlog, submitForm } from '../lib/serverAction'

// import { uploadFiles } from '../../../lib/uploadthings';
import { UploadButton } from '../lib/uploadthings';
import { uploadFiles } from '../lib/uploadthings'

export default function PublishBlog({ session }) {

    const [data, setData] = useState();
    const [content, setContent] = useState('');
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    // consuming context
    const { setShowAlert, setAlertMessage, setAlertStatus } = useContext(AlertContext)
    const { setIsLoading } = useContext(LoadingContext)

    async function submitFormHandler(e) {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await pusblishBlog(data, content)
            if (response.status) {       //Incase of success
                setAlertStatus("success");
                setAlertMessage(response.message);
                resetInputFields()
            }
            if (!response.status) {      //Incase of error
                setAlertStatus("error");
                setAlertMessage(response.message);
            }
        } catch (error) {
            setAlertStatus("error");
            setAlertMessage("Something went wrong");
        } finally {
            setIsLoading(false);
            setShowAlert(true);

        }
    }

    // Function for getting input fields data
    async function getData(e) {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // Function for resetting input fields
    function resetInputFields() {
        setData({})
        setContent('')
    }

    const titleRef = useRef()
    const descriptionRef = useRef()
    const ref = useRef(false);
    if (!ref.current) {
        let editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => { ref.current = editor },
            placeholder: "Tab here to start",
            inlineToolbar: true,
            data: { blocks: [] },
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
                raw: RawTool,
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
            <section className='px-8 max-w-7xl mx-auto'>
                <div className='prose prose-stone'>
                    <TextareaAutosize
                        ref={(e) => {
                            titleRef.current = e
                        }}
                        placeholder='Title'
                        className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none'
                    />
                </div>
                <div className='prose prose-stone'>
                    <TextareaAutosize
                        ref={(e) => {
                            titleRef.current = e
                        }}
                        placeholder='Meta Description'
                        className='w-full px-4 resize-none appearance-none overflow-hidden bg-transparent text-lg font-bold focus:outline-none'
                    />
                </div>
                <div id='editorjs' className=''></div>
                <button
                    onClick={async () => { const blocks = await ref.current?.save(); console.log(blocks) }}
                    type="submit"
                    className={`mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
                >Publish</button>
            </section>
        </>
    )
}
