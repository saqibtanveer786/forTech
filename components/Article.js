"use client"
import React from 'react'
import Output from 'editorjs-react-renderer'
import Image from 'next/image'

export default function Article({ content }) {

    const CodeRenderer = ({ data, style, classNames, config }) => {
        return (
            <pre className='bg-gray-800 rounded-md p-4 my-4'>
                <code className='text-gray-100 text-sm'>{data.code}</code>
            </pre>
        )
    };

    const ImageRenderer = ({ data, style, classNames, config }) => {
        console.log("imagedata is :", data)
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
            {/* <div dangerouslySetInnerHTML={{ __html: <Output data={content} /> || '<p>This blog does not have content</p>' }} >

            </div> */}
            <Output data={content} renderers={renderers} />
        </article>
    )
}
