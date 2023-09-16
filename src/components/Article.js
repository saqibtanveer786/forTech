import React from 'react'

export default function Article({ content }) {
    return (

        <article className='pt-12'>
            <div dangerouslySetInnerHTML={{ __html: content || '<p>This blog does not have content</p>' }} >
            </div>
        </article>
    )
}
