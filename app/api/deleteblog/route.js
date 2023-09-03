const { NextRequest, NextResponse } = require('next/server');
import prisma from '../../../lib/prisma';

import fs from 'fs';
import path from 'path';

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

    // deleting the corresponding image
    fs.unlink(path.join(process.cwd(), 'public', 'images', deletePost.image), (err) => {
      if (err) {
        console.error(err);
        return NextResponse.json(
          { message: "Post has deleted but Failed to delete corresponding image", status: false },
          { status: 500 }
        );
      }
    });

    return NextResponse.json(
      deletePost ? { post: deletePost, message: "Post Deleted Successfully", status: true } : { message: "Error while deleting", status: false },
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
