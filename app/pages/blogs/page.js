import React from 'react'

// Importing components
import Post from '../../../components/Post'

async function getBlogs() {
    const response = await fetch(`http://localhost:3000/api/blogs`, {
        cache: 'no-cache',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const jsonResponse = await response.json()
    return jsonResponse.posts
}

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
