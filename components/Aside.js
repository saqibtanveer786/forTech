import React from 'react'

// components
import PostCategories from './PostCategories'
import AboutAuthor from './AboutAuthor'
import RelatedPost from './RelatedPost'

export default function Aside() {

    return (
        <aside className="xl:w-80 ml-8 xl:border-l-4 xl:px-4 flex flex-col">
            {/* AboutAuthor */}
            <AboutAuthor />

        </aside>
    )
}
