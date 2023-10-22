"use server"
import React from 'react';

// Importing server actions
import { getBlog, getComments } from '../../../lib/serverAction';

// nextjs imports
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Importing components
const Article = dynamic(() => import("../../../components/Article"), { ssr: false })
import CommentBox from '../../../components/CommentBox'
import CommentList from '../../../components/CommentList'

// Library imports
import { getAuthSession } from '../../../lib/auth';

// next navigation
import { redirect } from 'next/navigation';

export default async function page({ params }) {
  const blog = await getBlog(params.blogpost);
  const comments = await getComments(params.blogpost);

  const session = await getAuthSession()
  if (!session || session.length === 0) redirect("/pages/signin", 'push')
  // const immage = Buffer.from(blog?.image.data).toString('base64')
  return (
    <>
      <div className="container mx-auto px-6">
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
            <Aside
            <CommentList comments={comments} sessionId={session.user?.id} />
            <CommentBox userId={session?.user?.id} blogId={params.blogpost} />
          </main>
        </section>
      </div>
    </>
  );
}
