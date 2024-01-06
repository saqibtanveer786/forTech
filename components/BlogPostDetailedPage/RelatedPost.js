import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function RelatedPost({relatedPosts, recentOpenedBlog}) {
    return (

        <div id="related-posts" className="grid gap-2">
            <p className="text-xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700">Related Posts</p>
            <div className='flex flex-wrap gap-6'>
                {relatedPosts&& relatedPosts.map((post, i) => {
                   if(post.id !== recentOpenedBlog) return  (<div key={i} className="grid grid-cols-1 border rounded-lg p-3 max-w-[350px]">
                    <div className="w-fit">
                        <Image src={post?.image} alt='image' height={250} width={300} />
                    </div>
                    <div className="px-2 flex flex-col justify-start pt-4">
                        <p className="text-xl cursor-pointer">
                            <Link href={`/${post?.id}`}>
                                {post.title.substr(0,60)} ...
                            </Link>
                        </p>
                        <p className="text-gray-600">{post.briefdescription.substr(0, 120)} .....</p>
                    </div>
                </div>)
                })}
            </div>
        </div>
    )
}
