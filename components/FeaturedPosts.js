import React from 'react'

// Importing components
import Post from '../components/Post'

export default function FeaturedPosts() {
    return (
        <section id="featured-posts" className="grid  sm:grid-cols-1 gap-4 p-2">
            <h2 className="col-span-full text-xl md:text-xl mb-8 border-l-4   border-blue-800 pl-2   my-4 text-blue-800 ">Featured posts</h2>
            <Post />
            <Post />
            <Post />
        </section>
    )
}
