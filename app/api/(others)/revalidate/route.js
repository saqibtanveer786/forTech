import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

async function PUT(request) {
    try {
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
