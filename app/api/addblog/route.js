const { NextRequest, NextResponse } = require("next/server");

import prisma from "../../../lib/prisma";

async function POST(request) {
  try {
    const { image, title, briefdescription, content, authorId } =
      await request.json();
    // const prisma = new PrismaClient()

    // Adding post
    const addPost = await prisma.post.create({
      data: {
        title,
        content,
        briefdescription,
        image,
        authorId,
        published: true,
      },
    });

    return NextResponse.json(
      addPost
        ? { post: addPost, message: "Blog Added Successfully", status: true }
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
  POST,
};
