const { NextRequest, NextResponse } = require('next/server');

import prisma from '../../../lib/prisma'

import multer from 'multer';

// Lib imports
import upload from '../../../lib/multerUploadImages'
// export const config = {
//     runtime: 'experimental-edge',
//     api: {
//         bodyParser: false
//     }
// }

import path from 'path';
import fs from 'fs';


import formidable from 'formidable';
async function POST(request) {
    try {
        // let data = await request.formData();
        // console.log('form is ', data)
        const { image } = await request.json()
        // Decode the Base64 image data
        const decodedImage = Buffer.from(image, 'base64');

        // Define the path where you want to save the image (inside the "public" folder)
        const imagePath = path.join(process.cwd(), 'storage', 'images');

        // Generate a unique filename (you may use a library like `uuid` for this)
        const fileName = `image_${Date.now()}.png`;

        // Combine the image path and filename
        const imagePathWithFilename = path.join(imagePath, fileName);

        // Write the image to the specified path
        await fs.writeFileSync(imagePathWithFilename, decodedImage);

        // Return the path to the saved image (relative to the "public" folder)
        const relativeImagePath = path.join('images', fileName);
        // console.log(dat.get('image'))
        // text = dat.get('text')
        // console.log(text)
        // const formData = await request.formData()
        // const image = await formData.get('image')
        // console.log(image)
        // for (const key in formData) {
        //     console.log(key)
        // }
        return NextResponse.json({ path: relativeImagePath })

    } catch (error) {
        console.log('erroris', error);
        return NextResponse.json(error);
    }
}

module.exports = {
    POST,
};
