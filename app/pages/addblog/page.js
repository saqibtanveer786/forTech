import React from 'react';
import dynamic from "next/dynamic";

import { getAuthSession } from "../../../lib/auth"

const PublishBlog = dynamic(() => import("../../../components/PublishBlog"), { ssr: false })
// import PublishBlog from '../../../components/PublishBlog';
// const session = getAuthSession()

import { redirect } from 'next/navigation';

export default async function AddBlog() {

  const session = await getAuthSession()
  if (!session || session?.user?.email !== process.env.ADMIN_EMAIL) {
    redirect("/", 'push')
  }
  return (
    <PublishBlog session={session} />
  );
}
