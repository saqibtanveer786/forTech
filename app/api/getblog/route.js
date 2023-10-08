import { NextResponse } from 'next/server';

import prisma from '../../../lib/prisma'

import { getAuthSession } from '../../../lib/auth';

export async function GET(req) {
  try {
    // checking authorization 
    const session = await getAuthSession()
    if (!session) return NextResponse.json(
      {
        message: `You are not Allowed`,
      },
      { status: 404 }
    )

    // getting the blog id
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const stringId = searchParams.get('id');
    const id = stringId

    // Adding post
    const addPost = await prisma.post.findUnique({
      where: {
        id: id
      },
    })

    return NextResponse.json(
      addPost ? { post: addPost } : { message: "Error while getting blog" },
      { status: addPost ? 200 : 404 }
    );
  } catch (error) {
    // console.log('iserror is: ', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
