"use client";
import React from "react";

// Importing from next
import Image from "next/image";
import Link from "next/link";

// components
import PostSpeedDial from "./PostSpeedDial";

export default function Post({ blog, session }) {
  // const immage = Buffer.from(blog.image.data).toString('base64')

  return (
    <>
      <div className="mx-2">
        <div
          className={`grid md:grid-cols-2 md:place-items-start place-content-center place-items-center max-w-7xl border-gray-200 border-2 rounded-lg h-auto py-4 px-2 my-6 w-fit mx-auto relative md:px-4`}
        >
          {session && session.user?.role === "ADMIN" && (
            <div className="absolute bottom-2 right-2">
              <PostSpeedDial blogId={blog?.id} />
            </div>
          )}

          {/* Image Col */}
          <Image
            src={blog.image}
            alt="placeholder image"
            width={300}
            height={200}
            priority
          />

          <div className="w-80 text-center">
            {/* Title Col */}
            <Link href={`/${blog?.id}`}>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 cursor-pointer hover:underline">
                {blog?.title}
              </h3>
            </Link>
            <p className="text-gray-700">{blog?.briefdescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}
