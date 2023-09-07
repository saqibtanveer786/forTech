import { NextResponse } from 'next/server';

import { PrismaClient } from '../../../prisma/generated/client';
// import prisma from '../../../lib/prisma';

export async function POST() {
  try {
    const prisma = await new PrismaClient()
    // Getting Posts
    const posts = await prisma.post.findMany()

    return NextResponse.json(
      posts ? { posts } : { message: "Error While Getting Posts" },
      { status: posts ? 200 : 404 }
    );

  } catch (error) {
    throw new Error(`Error on server at route blogs which is for getting all blogs. Error is: ${error}`)
    console.log(error);
    return NextResponse.json(
      { message: "An Unexpected Error Occured" },
      { status: 500 }
    );
  }
}
