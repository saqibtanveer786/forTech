const { NextRequest, NextResponse } = require('next/server');

import prisma from '../../../lib/prisma';

import { getAuthSession } from '../../../lib/auth';

async function DELETE(request) {
  try {
    // checking authorization 
    const session = await getAuthSession()
    if (!session || session?.user?.email !== process.env.ADMIN_EMAIL) return NextResponse.json(
      {
        message: `You are not Allowed`,
      },
      { status: 404 }
    )

    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get('id')

    // const prisma = new PrismaClient()

    // deleting post
    const deletePost = await prisma.post.delete({
      where: {
        id: id
      }
    })

    return NextResponse.json(
      deletePost ? { post: deletePost, message: "Post Deleted Successfully", status: true } : { message: "Error while deleting", status: false },
      { status: deletePost ? 200 : 404 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An Unexpected Error Occured", status: false },
      { status: 500 }
    );
  }
}

module.exports = {
  DELETE,
};
