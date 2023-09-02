import React from 'react';

// Importing from next
import Image from 'next/image';
import Link from 'next/link';

import path from 'path';

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
      <div className='mx-2'>

        <Link href={`/pages/${blog?.id}`} className="flex flex-col items-center md:flex-row md:items-start border rounded-lg gap-4 h-auto p-4 my-6 w-fit mx-auto">
          <div className="w-[300px] h-[200px] relative ">
            <Image src={`/images/${blog.image}` || "/img/general.jpg"} alt='placeholder image' fill={'cover'} />
            <div className="bg-blue-400 w-24 pt-1 h-8 text-gray-50 font-semibold text-center absolute top-0">
              Javascript
            </div>
          </div>
          <div className='w-[300px] lg:w-[450px]'>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 cursor-pointer ">{blog?.title}</h3>
            {/* <div className="flex gap-2 mb-2 lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <h4>By Saqib Tanveer</h4>
                <h4>Updated over 2 weeks ago</h4>
              </div>
            </div> */}
            <p className="text-gray-700">{blog?.briefdescription}</p>
          </div>
        </Link>
      </div >
    </>
  );
}
