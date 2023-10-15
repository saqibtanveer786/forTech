const { NextRequest, NextResponse } = require('next/server');

import prisma from '../../../../../lib/prisma'

async function POST(request) {
    try {
        const { message, userId, blogId } = await request.json();

        // Adding comment
        const addcomment = await prisma.Comment.create({
            data: {
                message,
                postId: blogId,
                userId,
            },
            select: {
                id: true,
                message: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })

        return NextResponse.json(
            addcomment ? { comment: addcomment, message: "Comment Added Successfully", status: true } : { message: "Error While Adding", status: false },
            { status: addcomment ? 200 : 404 }
        );
    } catch (error) {
        console.log('erroris', error);
        return NextResponse.json({ message: `An Unexpected Error Occured error is: ${error}`, status: false });
    }
}

module.exports = {
    POST,
};
