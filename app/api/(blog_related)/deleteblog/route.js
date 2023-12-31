const { NextRequest, NextResponse } = require("next/server");

import prisma from "lib/prisma";

async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get("id");

    // check on id
    if (!id)
      return NextResponse.json(
        { message: "No Id", status: false },
        { status: 500 }
      );

    // deleting post
    const deletePost = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      deletePost
        ? {
            post: deletePost,
            message: "Post Deleted Successfully",
            status: true,
          }
        : { message: "Error while deleting", status: false },
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
