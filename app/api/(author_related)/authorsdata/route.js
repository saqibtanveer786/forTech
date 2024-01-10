import { NextResponse } from "next/server";

import prisma from "lib/prisma";

export async function POST(request) {
  try {
    const authorId = await request.nextUrl.searchParams.get("authorid");

    const userId = await prisma.AuthorProfile.findUnique({
      where: {
        id: authorId,
      },
      select: {
        userId: true,
      },
    });

    if (!userId) throw new Error("Internal server error");

    const data = await prisma.user.findUnique({
      where: {
        id: userId.userId,
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
      },
    });

    if (!data) throw new Error("Internal server error");

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("error in the auther POST method: " + error);
    return NextResponse.json(
      { message: "Internal Server Error", status: "error" },
      { status: 500 }
    );
  }
}
