import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { getAuthSession } from "../../../../../lib/auth";
export async function PUT(request) {
    try {
        const commentId = request.nextUrl.searchParams.get("commentid")
        const editedMessage = await request.json();
        console.log("edited messages is: ", editedMessage)

        const session = await getAuthSession()
        console.log("session: " + session)

        const updateCommented = await prisma.comment.update({
            where: {
                id: commentId
            },
            data: {
                message: editedMessage
            }
        })

        console.log("updateCommented: " + updateCommented.message)

        return NextResponse.json(updateCommented ? { message: "comment updated", comment: updateCommented, status: "success" } : { message: "An error occured", status: "error" }, { status: updateCommented ? 200 : 500 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error occured on server", status: "error" }, { status: 500 })
    }
}