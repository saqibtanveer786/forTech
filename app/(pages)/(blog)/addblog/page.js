import React from "react";
import dynamic from "next/dynamic";
import { getAuthSession } from "lib/auth";
import EditBlog from "@components/MakeBlog/EditBlog";

const PublishBlog = dynamic(
  () => import("../../../../components/BlogPost/PublishBlog"),
  { ssr: false }
);

export default async function AddBlog() {
  const session = await getAuthSession();

  return <EditBlog authorId={session?.user?.id} />;
}
