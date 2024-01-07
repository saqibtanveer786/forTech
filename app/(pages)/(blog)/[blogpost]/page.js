"use server";
import React from "react";

// Importing server actions
import {
  getAuthorsData,
  getBlog,
  getComments,
} from "../../../../lib/serverAction";

// nextjs imports
import Image from "next/image";
import dynamic from "next/dynamic";

// Importing components
const Article = dynamic(
  () => import("../../../../components/BlogPostDetailedPage/Article"),
  { ssr: false }
);
import Aside from "../../../../components/BlogPostDetailedPage/Aside";
import CommentBox from "../../../../components/BlogPostDetailedPage/CommentBox";
import CommentList from "../../../../components/BlogPostDetailedPage/CommentList";
const LikeDislikeBtns = dynamic(() =>
  import("@components/BlogPostDetailedPage/LikeDislikeBtns")
);

// Library imports
import { getAuthSession } from "../../../../lib/auth";

// next navigation
import { redirect } from "next/navigation";

export default async function page({ params }) {
  const blog = await getBlog(params.blogpost);
  const comments = await getComments(params.blogpost);
  // console.log(blog)
  // console.log(blog.authorId)
  const asideData = await getAuthorsData(blog?.authorId);

  const session = await getAuthSession();
  if (!session || session.length === 0) redirect("/signin", "push");
  // const immage = Buffer.from(blog?.image.data).toString('base64')
  return (
    <>
      <div className="container mx-auto px-6">
        <section className="mt-12 mb-12">
          <main className="relative md:mr-2">
            <div className="flex items-start justify-center flex-wrap ">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 max-w-[800px] mx-auto">
                  {blog?.title}
                </h1>
                <Image
                  src={blog?.image}
                  alt="placeholder tag"
                  width={800}
                  height={800}
                  className="mx-auto mt-10"
                />
                <Article content={blog?.content} />
                <LikeDislikeBtns
                  userId={session?.user?.id}
                  postId={params?.blogpost}
                />
                <CommentList comments={comments} sessionId={session.user?.id} />
                <CommentBox
                  userId={session?.user?.id}
                  blogId={params.blogpost}
                />
              </div>
              <Aside asideData={asideData} recentOpenedBlog={params.blogpost} />
            </div>
          </main>
        </section>
      </div>
    </>
  );
}
