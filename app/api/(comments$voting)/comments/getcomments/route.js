const { NextResponse } = require('next/server');

import prisma from '../../../../../lib/prisma'

async function POST(req) {
    try {
        const url = new URL(req.url)
        const searchParams = new URLSearchParams(url.search)
        const postId = searchParams.get('postid')
        // Adding comment
        const findComments = await prisma.Comment.findMany({
            where: {
                postId
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
            findComments ? { comments: findComments } : { message: "Error While Getting Comments", status: false },
            { status: findComments ? 200 : 404 }
        );
    } catch (error) {
        console.log('erroris', error);
        return NextResponse.json({ message: `An Unexpected Error Occured On Server Side`, status: false });
    }
}

module.exports = {
    POST,
};
