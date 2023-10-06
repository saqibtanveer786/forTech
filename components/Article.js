"use client"
import React from 'react'
import Output from 'editorjs-react-renderer'

export default function Article({ content }) {
    return (

        <article className='pt-12 max-w-[800px] mx-auto'>
            {/* <div dangerouslySetInnerHTML={{ __html: <Output data={content} /> || '<p>This blog does not have content</p>' }} >

            </div> */}
            <Output data={content} />
        </article>
    )
}
