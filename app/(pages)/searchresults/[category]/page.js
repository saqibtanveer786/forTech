import { getAuthSession } from "lib/auth";
import { getSearchResults } from "lib/serverAction";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Post({ blog }) {
  return (
    <div className="grid place-items-center border-gray-200 border-2 rounded-lg h-100 py-4 px-2 my-6 w-fit md:px-4">
      {/* Image Col */}
      <Image
        src={blog.image}
        alt="placeholder image"
        width={300}
        height={200}
        priority
      />

      <div className="w-[300px] text-center">
        {/* Title Col */}
        <Link href={`/${blog?.id}`}>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 cursor-pointer hover:underline">
            {blog?.title.substr(0, 75)} .....
          </h3>
        </Link>
        <p className="text-gray-700">
          {blog?.briefdescription.substr(0, 50)} ......
        </p>
      </div>
    </div>
  );
}

export default async function page({ params }) {
  // const session = await getAuthSession();
  const blogs = await getSearchResults(params.category);
  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {blogs &&
          blogs.length !== 0 &&
          blogs.map((blog) => {
            return <Post key={blog.id} blog={blog} />;
          })}
      </div>
    </section>
  );
}
