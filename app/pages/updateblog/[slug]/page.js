import React from 'react'
import dynamic from 'next/dynamic'

import { getBlog } from '../../../../lib/serverAction'

const UpdateBlog = dynamic(() => import("../../../../components/UpdateBlog"), { ssr: false })
// import UpdateBlog from '../../../../components/UpdateBlog'

export default async function page({ params }) {

    const blog = await getBlog(params.slug)
    console.log(blog)
    return (
        <>
            <UpdateBlog id={blog.id} title={blog.title} description={blog.briefdescription} image={blog.image} content={blog.content} />
        </>
    )
}
