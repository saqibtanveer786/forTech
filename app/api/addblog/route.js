const { NextRequest, NextResponse } = require('next/server');


import path from 'path';
import fs from 'fs';

import { PrismaClient } from '../../../prisma/generated/client';
import { cwd } from 'process';
// import prisma from '../../../lib/prisma'

async function POST(request) {
  try {
    const { image, title, briefdescription, content } = await request.json();
    const prisma = new PrismaClient()

    async function storeImage() {
      try {

        // Decode the Base64 image data
        const decodedImage = Buffer.from(image, 'base64');

        // Define the path where you want to save the image (inside the "public" folder)
        const imagePath = "./public/images"
        // const imagePath = path.join(process.cwd(), 'public', 'images')

        console.log("imagePath is: ", imagePath)

        // Generate a unique filename (you may use a library like `uuid` for this)
        const fileName = `image_${Date.now()}.png`;

        // Combine the image path and filename
        const imagePathWithFilename = path.join(imagePath, fileName);

        // Write the image to the specified path
        const dirExists = fs.existsSync(imagePath)
        if (!dirExists) fs.mkdirSync(imagePath)
        fs.writeFileSync(imagePathWithFilename, decodedImage);
        console.log(imagePathWithFilename)

        // Return the path to the saved image (relative to the "public" folder)
        let relativeImagePath = fileName;

        return { imagepath: relativeImagePath }
      }
      catch (error) {
        return { imagepath: null, error }
      }
    }

    const ress = await storeImage()
    if (!ress.imagepath)
      return NextResponse.json({ message: `Failed to Store Image Error is : ${ress.error}`, status: false }, { status: 404 })

    // Adding post
    const addPost = await prisma.post.create({
      data: {
        title,
        content,
        image: ress.imagepath
      },
    })

    return NextResponse.json(
      addPost ? { post: addPost, message: "Blog Added Successfully", status: true } : { message: "Error While Adding", status: false },
      { status: addPost ? 200 : 404 }
    );
  } catch (error) {
    console.log('erroris', error);
    return NextResponse.json({ message: `An Unexpected Error Occured error is: ${error}`, status: false });
  }
}

module.exports = {
  POST,
};
