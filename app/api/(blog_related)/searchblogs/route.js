import { NextResponse } from "next/server";

import prisma from "lib/prisma";

export async function POST(request) {
  try {
    const query = request.nextUrl.searchParams.get("query");
    const modifiedQuery = query.split(" ").join(" & ");
    console.log("modified query is: ", modifiedQuery);

    const getBlogs = await prisma.post.findMany({
      where: {
        title: {
          search: modifiedQuery,
        },
        briefdescription: {
          search: modifiedQuery,
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

    //
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "Internal Server Error", status: "error" },
      { status: 500 }
    );
  }
}
