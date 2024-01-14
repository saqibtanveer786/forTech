import { NextResponse } from "next/server";

import prisma from "lib/prisma";
import { comment } from "postcss";

export async function POST(request) {
  try {
    let allComments = [];
    const userId = await request.nextUrl.searchParams.get("userid");

    if (!userId) throw new Error("Internal server error");

    const data = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        autherProfile: {
          include: {
            education: true,
            experience: true,
            followers: true,
          },
        },
        following: true,
        posts: {
          select: {
            id: true,
            title: true,
            briefdescription: true,
            image: true,
            votes: true,
            comments: {
              select: {
                message: true,
                createdAt: true,
                user: {
                  select: {
                    name: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    console.log();

    if (!data) throw new Error("Internal server error");

    data.posts.forEach((post) => {
      post.comments.forEach((comment) => {
        allComments.push(comment);
      });
    });

    data.allComments = allComments;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("error in the auther POST method: " + error);
    return NextResponse.json(
      { message: "Internal Server Error", status: "error" },
      { status: 500 }
    );
  }
}
