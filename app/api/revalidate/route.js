import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

import { getAuthSession } from '../../../lib/auth'

async function PUT(request) {
    try {
        // checking authorization 
        const session = await getAuthSession()
        if (!session) return NextResponse.json(
            {
                message: `You are not Allowed`,
            },
            { status: 404 }
        )

        // getting the tag
        const url = new URL(request.url);
        const searchParams = new URLSearchParams(url.search);
        const tag = searchParams.get('tag')
        // Revalidating
        revalidateTag(tag)

        return NextResponse.json(
            { message: "Revalidated Successfully", status: true },
            { status: 200 }
        );

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: `An Unexpected Error Occured error is: ${error}`, status: false },
            { status: 500 }
        );
    }
}

module.exports = {
    PUT,
};
