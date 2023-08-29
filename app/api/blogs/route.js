import { NextResponse } from 'next/server';

import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    // Getting Posts
    const posts = await prisma.post.findMany()

    return NextResponse.json(
      posts ? { posts } : { message: "Error While Getting Posts" },
      { status: 200 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An Unexpected Error Occured" },
      { status: 500 }
    );
  }
}
