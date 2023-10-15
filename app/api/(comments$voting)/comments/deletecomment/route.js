import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function DELETE(req) {
    try {
        const url = new URL(req.url)
        const searchParams = new URLSearchParams(url.search)
        const commentId = searchParams.get('commentid')

        const deleteComment = await prisma.comment.delete({
            where: {
                id: commentId
            }
        })

        return NextResponse.json(
            deleteComment ? { deletedId: deleteComment, message: 'Comment deleted', status: 'success' } : { message: 'Failed to deleted', status: 'error' }, { status: deleteComment ? 200 : 500 }
        )
    } catch (error) {
        console.log("this error is on the server where deleting commnet", error)
        return NextResponse.json({ message: 'Error on the server', status: 'error' }, { status: 500 }
        )
    }
}