import Image from 'next/image';

// Importing components
import Article from '../../../components/Article'

async function fetchData(title) {
  const response = await fetch(
    `http://localhost:3000/api/getblog?name=${title}`,
    {
      cache: 'no-store',
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse.data;
}

import React from 'react';

export default async function page({ params }) {
  // const { id } = router.query;
  console.log(params.blogpost)
  const blog = await fetchData(params.blogpost);
  console.log(blog)
  return (
    <>
      <div class="container mx-auto px-12">
        <section class="grid md:grid-cols-1 mt-12">
          <main class="col-span-2 relative md:mr-2">
            <h1 class="text-3xl font-bold text-gray-800">{blog.title}</h1>
            <div class="flex mt-2 my-2 items-center gap-4">
              <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div class="text-gray-500">
                By <span class="text-gray-800 cursor-pointer">Saqib Tanveer</span> on 14th April 2020
              </div>
            </div>

            <div class="flex justify-center">
              <Image src="/img/general.jpg" class="cursor-pointer" alt="placeholder tag" height={600} width={600} />
            </div>
            <Article content={blog?.content} />
          </main>
        </section>
      </div>
    </>
  );
}
