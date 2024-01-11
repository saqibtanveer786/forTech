import React from "react";
import dynamic from "next/dynamic";

// Importing components
const Post = dynamic(() => import("../BlogPost/Post"), { ssr: false });
// import Post from './Post'
import { getBlogs } from "../../lib/serverAction";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import Link from "next/link";

export default async function FeaturedPosts() {
  const blogs = await getBlogs("featureposts", 3, 0);
  console.log(blogs);
  const session = await getServerSession(authOptions);
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="col-span-full text-xl md:text-xl mb-8 border-l-4 border-blue-800 pl-2 my-4 text-blue-800 ">
        Featured posts
      </h2>
      {blogs &&
        blogs.map((blog) => (
          <Post key={blog?.id} blog={blog} session={session} />
        ))}
      <Link
        href="/blogs"
        className="text-blue-600 block text-center my-10 bg-gray-100 rounded-md max-w-4xl mx-auto py-4 hover:bg-gray-200"
      >
        See All ...
      </Link>
    </section>
  );
}
