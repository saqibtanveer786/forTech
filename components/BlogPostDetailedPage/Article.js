"use client"
import React from 'react'
import Output from 'editorjs-react-renderer'
import Image from 'next/image'

export default function Article({ content }) {

    const CodeRenderer = ({ data }) => {
        return (
            <pre className='bg-gray-800 rounded-md p-4 my-4 max-w-[800px] sm:w-[100%] w-[329px] overflow-scroll'>
                <code className='text-gray-100 text-sm'>{data.code}</code>
            </pre>
        )
    };

    const ImageRenderer = ({ data }) => {

        return (
            <Image src={data.file.url} alt='Image' width={300} height={300} className='mx-auto' />
        )
    }

    const renderers = {
        code: CodeRenderer,
        image: ImageRenderer
    };
    return (

        <article className='pt-12 max-w-[800px] mx-auto'>
            <Output data={content} renderers={renderers} />
        </article>
    )
}
