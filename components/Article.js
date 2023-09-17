import React from 'react'

export default function Article({ content }) {
    return (

        <article className='pt-12 max-w-[800px] mx-auto'>
            <div dangerouslySetInnerHTML={{ __html: content || '<p>This blog does not have content</p>' }} >
            </div>
        </article>
    )
}
