import React from 'react';
import dynamic from "next/dynamic";

const PublishBlog = dynamic(() => import("../../../../components/PublishBlog"), { ssr: false })

export default async function AddBlog() {

  return (
    <PublishBlog />
  );
}
