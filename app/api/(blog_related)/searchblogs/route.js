import { NextResponse } from "next/server";

import prisma from "lib/prisma";

export async function PATCH(request) {
  try {
    const category = await request.nextUrl.searchParams.get("category");
    console.log(category);
    const query = await request.nextUrl.searchParams.get("query");
    let blogs = [];

    if (category) {
      const getBlogs = await prisma.post.findMany({
        where: {
          category: {
            some: {
              name: {
                search: category,
                mode: "insensitive",
              },
            },
          },
        },
        select: {
          id: true,
          title: true,
          briefdescription: true,
          image: true,
          category: true,
        },
      });
      if (!getBlogs) throw new Error();
      return NextResponse.json(getBlogs, { status: 200 });
    }

    if (query) {
      const getBlogs = await prisma.post.findMany({
        where: {
          title: {
            search: query,
          },
          briefdescription: {
            search: query,
          },
        },
        select: {
          id: true,
          title: true,
          briefdescription: true,
          image: true,
        },
      });
      if (!getBlogs) throw new Error();
      return NextResponse.json(getBlogs, { status: 200 });
    }
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
