import { NextResponse } from "next/server";

import prisma from "lib/prisma";

export async function POST(request) {
  try {
    const forWhat = await request.nextUrl.searchParams.get("forwhat");
    const take = await request.nextUrl.searchParams.get("take");
    const skip = await request.nextUrl.searchParams.get("skip");
    console.log("forwaht: ", forWhat, "take", take, "skip", skip);

    //case for featured posts
    if (forWhat === "featureposts") {
      const featuredPosts = await prisma.post.findMany({
        take: parseInt(take),
        skip: parseInt(skip),
        where: {
          featured: true,
          published: true,
        },
        select: {
          id: true,
          title: true,
          briefdescription: true,
          image: true,
        },
      });
      if (!featuredPosts) throw new Error("Internal server error");

      return NextResponse.json(featuredPosts, { status: 200 });
    }

    //for getting all posts
    const posts = await prisma.post.findMany({
      take: parseInt(take),
      skip: parseInt(skip),
      where: {
        published: true,
      },
      select: {
        id: true,
        title: true,
        briefdescription: true,
        image: true,
      },
    });

    console.log("poosts are: ", posts);

    return NextResponse.json(
      posts ? posts : { message: "Error While Getting Posts" },
      { status: posts ? 200 : 404 }
    );

    //
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: `An Unexpected Error Occured error is: ${error}`,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
