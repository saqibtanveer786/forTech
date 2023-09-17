import React from 'react';

// Importing server actions
import { getBlog } from '../../../lib/serverAction';

// nextjs imports
import Image from 'next/image';

// Importing components
import Article from '../../../components/Article'

export default async function page({ params }) {
  const blog = await getBlog(params.blogpost);
  // const immage = Buffer.from(blog?.image.data).toString('base64')
  return (
    <>
      <div className="container mx-auto px-12">
        <section className="grid md:grid-cols-1 mt-12 mb-12">
          <main className="col-span-2 relative md:mr-2">
            <h1 className="text-3xl font-bold text-gray-800 max-w-[800px] mx-auto">{blog?.title}</h1>
            {/* <div className="flex mt-2 my-2 items-center gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="text-gray-500">
                By <span className="text-gray-800 cursor-pointer">Saqib Tanveer</span> on 14th April 2020
              </div>
            </div> */}
            <Image src={blog?.image} alt="placeholder tag" width={800} height={800} className='mx-auto mt-10' />
            <Article content={blog?.content} />
          </main>
        </section>
      </div>
    </>
  );
}
