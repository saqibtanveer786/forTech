import React from 'react';

// Importing from next
import Image from 'next/image';
import Link from 'next/link';

export default function Post({ blog }) {
  // async function deleting() {
  //   const url = `http://localhost:3000/api/deleteblog?slug=${blog.slug}`;
  //   const response = await fetch(url, {
  //     method: 'delete',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   });
  //   if (response.ok) {
  //     router.refresh();
  //   }
  // }
  return (
    <>
      <Link href={`/pages/${blog?.title}`}>
        <div className="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4 max-w-5xl mx-auto">
          <div className="max-w-2xl h-auto flex items-center relative ">
            <Image src={"/img/general.jpg"} alt='placeholder image' width={400} height={400} />
            <div className="bg-blue-400 w-24 pt-1 h-8 text-gray-50 font-semibold text-center absolute top-0">
              Javascript
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 cursor-pointer ">How to create tailwind Template</h3>
            <div className="flex gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <h4>By Saqib Tanveer</h4>
                <h4>Updated over 2 weeks ago</h4>
              </div>
            </div>
            <p className="text-gray-700">{blog?.briefdescription}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
