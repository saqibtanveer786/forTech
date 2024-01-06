import { NextResponse } from "next/server";

import prisma from '../../../lib/prisma';

export async function POST(request) {
    try {
        let comments = [];

        const userId = await request.nextUrl.searchParams.get("userid")
        // console.log("userid is:", userId)

        // check if auther profile already exists
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                role: true
            }
        })
        // if (!user.role === 'ADMIN' || !user.role === 'AUTHER') return NextResponse.json({ message: "Not Allowed", status: 'error' }, { status: 401 })

        const findPosts = await prisma.post.findMany({
            where: {
                authorId: userId,
            },
            select: {
                id: true,
                title: true,
                image: true,
                comments: {
                    select: {
                        message: true,
                        user: {
                            select: {
                                name: true,
                                image: true,
                                email: true,
                            }
                        }
                    }
                },
                votes: {
                    select: {
                        type: true,
                    }
                }

            }
        })

        if (!findPosts) return NextResponse.json({ message: "Internal Server Error", status: 'error' }, { status: 401 })

        findPosts.forEach(post => {
            post.comments.forEach(comment => {
                comments.push(comment);
            });
        });

        return NextResponse.json(
            { message: "Your Application has been submitted", status: 'success', data: { posts: findPosts, comments } },
            { status: 200 }
        )
    } catch (error) {
        console.log("error in the auther POST method: " + error)
        return NextResponse.json(
            { message: "Internal Server Error", status: 'error' },
            { status: 500 }
        )
    }
}