import { NextResponse } from "next/server";

import prisma from '../../../lib/prisma';

export async function POST(request) {
    try {
        let comments = [];

        const authorId = await request.nextUrl.searchParams.get("authorid")

        // check if auther profile already exists
        const user = await prisma.user.findUnique({
            where: {
                id: authorId
            },
            select: {
                name: true,
                email: true,
                image: true,
                autherProfile: {
                    select: {
                        socialLinks: true,
                        bio: true
                    }
                },
                posts: {
                    take: 3,
                    select: {
                        id: true,
                        image: true,
                        title: true,
                        briefdescription: true
                    }
                }
            }
        })
        // if (!user.role === 'ADMIN' || !user.role === 'AUTHER') return NextResponse.json({ message: "Not Allowed", status: 'error' }, { status: 401 })


        if (!user) return NextResponse.json({ message: "Internal Server Error", status: 'error' }, { status: 401 })


        return NextResponse.json(
            user,
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