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


import formidable from 'formidable';
async function POST(request) {
    try {
        // let data = await request.formData();
        // console.log('form is ', data)
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
