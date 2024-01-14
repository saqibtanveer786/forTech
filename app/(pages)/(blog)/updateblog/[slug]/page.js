import React from "react";
import dynamic from "next/dynamic";

import { getBlog } from "../../../../../lib/serverAction";

const EditBlog = dynamic(() => import("@components/MakeBlog/EditBlog"), {
  ssr: false,
});
// import UpdateBlog from '../../../../components/UpdateBlog'

export default async function page({ params }) {
  const blog = await getBlog(params.slug);
  let preSelectedCategories = blog?.category.map((cat) => cat.name);
  return (
    <>
      <EditBlog
        id={blog.id}
        title={blog.title}
        description={blog.briefdescription}
        image={blog.image}
        content={blog.content}
        categories={preSelectedCategories}
      />
    </>
  );
}
