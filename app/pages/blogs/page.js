import React from 'react'

// Importing components
import Post from '../../../components/Post'
import PostCategories from '../../../components/PostCategories'

// Importing server actions
import { getBlogs } from '../../../lib/serverAction'
import { getAuthSession } from '../../../lib/auth'

export default async function Page() {
    const blogs = await getBlogs()
    const session = await getAuthSession()
    return (
        <div className='flex flex-col justify-start max-w-7xl mx-auto -mt-6'>
            <PostCategories />
            <div className='-mt-7 flex-1'>
                {
                    blogs && blogs.map(blog => {
                        return <Post key={blog?.id} blog={blog} session={session} />
                    })
                }
            </div>
        </div>
    )
}
