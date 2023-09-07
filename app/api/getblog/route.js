import { NextRequest, NextResponse } from 'next/server';

// import { PrismaClient } from '@prisma/client';
import prisma from '../../../lib/prisma'

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const stringId = searchParams.get('id');
    const id = parseInt(stringId)

    // const prisma = new PrismaClient()
    // Adding post
    const addPost = await prisma.post.findUnique({
      where: {
        id: id
      },
    })

    return NextResponse.json(
      addPost ? { data: addPost } : { message: "Error while getting blog" },
      { status: addPost ? 200 : 404 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
