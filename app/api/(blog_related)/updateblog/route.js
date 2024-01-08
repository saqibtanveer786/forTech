const { NextRequest, NextResponse } = require("next/server");

import prisma from "lib/prisma";

async function PUT(request) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get("id");

    const { image, title, briefdescription, content } = await request.json();
    // const prisma = new PrismaClient()

    // Adding post
    const addPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        briefdescription,
        image,
      },
    });

    return NextResponse.json(
      addPost
        ? { post: addPost, message: "Blog Updated Successfully", status: true }
        : { message: "Error While Adding", status: false },
      { status: addPost ? 200 : 404 }
    );
  } catch (error) {
    console.log("erroris", error);
    return NextResponse.json({
      message: `An Unexpected Error Occured error is: ${error}`,
      status: false,
    });
  }
}

module.exports = {
  PUT,
};
