import React from 'react'

export default function Article({ content }) {
    return (

        <article className='pt-12'>
            <section dangerouslySetInnerHTML={{ __html: content }} >
            </section>
        </article>
    )
}
