import React from 'react'

// Importing components
import Post from './Post'
import { getBlogs } from '../lib/serverAction'

export default async function FeaturedPosts() {
    const blogs = await getBlogs()
    return (
        <section className='max-w-7xl mx-auto'>
            <h2 className="col-span-full text-xl md:text-xl mb-8 border-l-4 border-blue-800 pl-2 my-4 text-blue-800 ">Featured posts</h2>
            {
                blogs && blogs.map(blog => <Post key={blog?.id} blog={blog} />)
            }
        </section>
    )
}
