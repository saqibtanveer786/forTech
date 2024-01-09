import React from "react";

// components
import PostCategories from "../BlogPost/PostCategories";
import AboutAuthor from "./AboutAuthor";
import RelatedPost from "./RelatedPost";

export default function Aside({ asideData, recentOpenedBlog, session }) {
  return (
    <aside className="xl:w-80 ml-8 xl:border-l-4 xl:px-4 flex flex-col">
      {/* AboutAuthor */}
      <AboutAuthor
        userId={session?.user?.id}
        authorId={asideData?.autherProfile?.id}
        name={asideData.name}
        image={asideData?.image}
        bio={asideData?.autherProfile?.bio}
        socialLinks={asideData?.autherProfile?.socialLinks}
        followers={asideData?.autherProfile?.followers}
        following={asideData.following}
      />

      {/* Related Posts */}
      <RelatedPost
        relatedPosts={asideData.posts}
        recentOpenedBlog={recentOpenedBlog}
      />
    </aside>
  );
}
