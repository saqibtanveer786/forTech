import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

export const utapi = new UTApi({ apiKey: process.env.UPLOADTHING_SECRET });

export async function POST(request) {
  try {
    const { key } = await request.json();

    const image = await utapi.deleteFiles(key);
    if (!image) throw new Error();

    return NextResponse.json(image);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: `An Unexpected Error Occured On Server`,
        status: "error",
      },
      { status: 500 }
    );
  }
}
