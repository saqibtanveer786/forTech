import { NextResponse } from 'next/server';

import prisma from '../../../lib/prisma';

import { getAuthSession } from '../../../lib/auth';

export async function POST() {
  try {
    // checking authorization 
    const session = await getAuthSession()
    if (!session) return NextResponse.json(
      {
        message: `You are not Allowed`,
      },
      { status: 404 }
    )

    // getting Posts
    const posts = await prisma.post.findMany()

    return NextResponse.json(
      posts ? { posts } : { message: "Error While Getting Posts" },
      { status: posts ? 200 : 404 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: `An Unexpected Error Occured error is: ${error}`,
        error: error.message
      },
      { status: 500 }
    )
  }
}
