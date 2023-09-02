const { NextRequest, NextResponse } = require('next/server');


import path from 'path';
import fs from 'fs';

import prisma from '../../../lib/prisma'

import multer from 'multer';

// Lib imports
import upload from '../../../lib/multerUploadImages'

async function POST(request) {
  try {
    const { image, title, briefdescription, content } = await request.json();

    async function storeImage() {
      try {

        // Decode the Base64 image data
        const decodedImage = Buffer.from(image, 'base64');

        // Define the path where you want to save the image (inside the "public" folder)
        const imagePath = path.join(process.cwd(), 'public', 'images');

        // Generate a unique filename (you may use a library like `uuid` for this)
        const fileName = `image_${Date.now()}.png`;

        // Combine the image path and filename
        const imagePathWithFilename = path.join(imagePath, fileName);

        // Write the image to the specified path
        fs.writeFileSync(imagePathWithFilename, decodedImage);

        // Return the path to the saved image (relative to the "public" folder)
        let relativeImagePath
        return relativeImagePath = fileName;
      }
      catch (error) {
        console.log('image store error', error)
        return false
      }
    }

    const imagePath = await storeImage()
    if (!imagePath)
      return NextResponse.json({ message: 'Failed to Store Image' }, { status: 404 })

    // Adding post
    const addPost = await prisma.post.create({
      data: {
        title,
        content,
        image: imagePath
      },
    })

    return NextResponse.json(
      addPost || { message: "Error while adding" },
      { status: addPost ? 200 : 404 }
    );
    return NextResponse.json('ok')
  } catch (error) {
    console.log('erroris', error);
    return NextResponse.json(error);
  }
}

module.exports = {
  POST,
};
