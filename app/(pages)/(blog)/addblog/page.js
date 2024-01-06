import React from 'react';
import dynamic from "next/dynamic";

const PublishBlog = dynamic(() => import("../../../../components/BlogPost/PublishBlog"), { ssr: false })

export default async function AddBlog() {

  return (
    <PublishBlog />
  );
}
