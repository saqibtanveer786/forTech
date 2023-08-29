const { NextRequest, NextResponse } = require('next/server');
import prisma from '../../../lib/prisma';

async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const id = parseInt(searchParams.get('id'))

    // deleting post
    const deletePost = await prisma.post.delete({
      where: {
        id: id
      }
    })

    return NextResponse.json(
      { deletePost, message: "Post Deleted Successfully" } || { message: "Error while deleting" },
      { status: deletePost ? 200 : 404 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An Unexpected Error Occured" },
      { status: 500 }
    );
  }
}

module.exports = {
  DELETE,
};
