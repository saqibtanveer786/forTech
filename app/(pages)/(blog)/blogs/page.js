import React from 'react'

// Importing components
import Post from '../../../../components/Post'
import PostCategories from '../../../../components/PostCategories'

// Importing server actions
import { getBlogs } from '../../../../lib/serverAction'
import { getAuthSession } from '../../../../lib/auth'

export const metadata = {
    title: "forTech-AllBlogsPage",
    description: "All blogs can be accessed here with categories tabs",
    metaBase: process.env.HOST,
    openGraph: {
        type: "website",
        url: process.env.HOST,
        title: "forTech",
        description: "forTech-AllBlogs | this page can be used to access all the blogs",
        siteName: "forTech",
        images: [
            {
                url: 'https://fortech-alpha.vercel.app/img/general.webp',
                width: 600,
                height: 800,
                alt: 'forTech'
            },
            {
                url: 'https://fortech-alpha.vercel.app/img/general.webp',
                width: 1600,
                height: 1800,
                alt: 'forTech',
            },
        ],
    }
}

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
