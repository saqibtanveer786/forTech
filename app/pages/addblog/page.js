import React from 'react';

import { getAuthSession } from "../../../lib/auth"

import PublishBlog from '../../../components/PublishBlog';
// const session = getAuthSession()



export default async function AddBlog() {
  const session = await getAuthSession()
  console.log("session is: ", session)
  return (
    <PublishBlog session={session} />
  );
}
