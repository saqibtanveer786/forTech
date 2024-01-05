import React from 'react'

// components
import PostCategories from './PostCategories'
import AboutAuthor from './AboutAuthor'
import RelatedPost from './RelatedPost'

export default function Aside({asideData, recentOpenedBlog}) {

    return (
        <aside className="xl:w-80 ml-8 xl:border-l-4 xl:px-4 flex flex-col">
            {/* AboutAuthor */}
            <AboutAuthor name={asideData.name} email={asideData.email} image={asideData?.image} bio={asideData?.autherProfile?.bio} socialLinks={asideData?.autherProfile?.socialLinks}/>

            {/* Related Posts */}
            <RelatedPost relatedPosts={asideData.posts} recentOpenedBlog={recentOpenedBlog}/>
        </aside>
    )
}
