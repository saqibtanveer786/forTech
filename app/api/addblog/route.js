const { NextRequest, NextResponse } = require('next/server');
const fs = require('fs');

import { PrismaClient } from '@prisma/client';

async function POST(request) {
  try {
    const { title, description, image, content } = await request.json();
    const prisma = new PrismaClient();

    // Adding post
    const addPost = await prisma.post.create({
      data: {
        title: 'title',
        content: 'content',
        image: 'https://images.freeimages.com/images/large-previews/4ca/maldives-unseen-beauty-1641934.jpg'
      },
    })

    return NextResponse.json(
      addPost || { message: "Error while adding" },
      { status: addPost ? 200 : 404 }
    );
  } catch (error) {
    console.log('erroris', error);
    return NextResponse.json(error);
  }
}

module.exports = {
  POST,
};
