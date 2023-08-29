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
    console.log('response is', jsonResponse)
    return jsonResponse.post
}

export default async function Page() {
    const blogs = await getBlogs()
    return (
        <>
            {
                blogs && blogs.map(blog => {
                    return <Post key={blog?.title} blog={blog} />
                })
            }
        </>
    )
}
