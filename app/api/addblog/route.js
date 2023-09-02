const { NextRequest, NextResponse } = require('next/server');
const fs = require('fs');

import prisma from '../../../lib/prisma'

import multer from 'multer';

// Lib imports
import upload from '../../../lib/multerUploadImages'

async function POST(request) {
  try {
    const sform = await request.json();
    console.log(sform)
    // Use Multer middleware to handle the file upload
    // upload.single('image')(req, res, (err) => {
    //   if (err) {
    //     console.error(err);
    //     return NextResponse.json('uploaded error')
    //   }
    // });

    // Adding post
    // const addPost = await prisma.post.create({
    //   data: {
    //     title: 'title',
    //     content: 'content',
    //     image: 'https://images.freeimages.com/images/large-previews/4ca/maldives-unseen-beauty-1641934.jpg'
    //   },
    // })

    // return NextResponse.json(
    //   addPost || { message: "Error while adding" },
    //   { status: addPost ? 200 : 404 }
    // );
    return NextResponse.json('ok')
  } catch (error) {
    console.log('erroris', error);
    return NextResponse.json(error);
  }
}

module.exports = {
  POST,
};
