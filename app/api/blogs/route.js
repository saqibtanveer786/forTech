import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

export async function GET() {
  try {
    const prisma = new PrismaClient()
    // Getting Posts
    const posts = await prisma.post.findMany()

    return NextResponse.json(
      posts ? { posts } : { message: "Error While Getting Posts" },
      { status: posts ? 200 : 404 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An Unexpected Error Occured" },
      { status: 500 }
    );
  }
}
