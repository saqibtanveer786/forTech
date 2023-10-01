import React from 'react'

// Importing components
import Post from '../../../components/Post'

// Importing server actions
import { getBlogs } from '../../../lib/serverAction'

import { getAuthSession } from '../../../lib/auth'

import { redirect } from 'next/navigation'

export default async function Page() {
    const session = await getAuthSession()
    if (!session) redirect('/pages/signin')
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
