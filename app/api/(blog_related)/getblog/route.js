import { NextResponse } from "next/server";

import prisma from "lib/prisma";

export async function GET(req) {
  try {
    // getting the blog id
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const stringId = searchParams.get("id");
    const id = stringId;

    // Adding post
    const addPost = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(
      addPost ? { post: addPost } : { message: "Error while getting blog" },
      { status: addPost ? 200 : 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
