import { NextResponse } from 'next/server';

import prisma from '../../../lib/prisma';

export async function POST() {
  try {
    // getting Posts
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        briefdescription: true,
        image: true
      }
    })

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
