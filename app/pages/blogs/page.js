import React from 'react'

// Importing components
import Post from '../../../components/Post'

// Importing server actions
import { getBlogs } from '../../../serverActions/serverAction'

export default async function Page() {
    const blogs = await getBlogs()
    return (
        <>
            {
                blogs && blogs.map(blog => {
                    return <Post key={blog?.id} blog={blog} />
                })
            }
        </>
    )
}
