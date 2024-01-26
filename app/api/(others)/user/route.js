import prisma from "lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, pass } = await request.json();

    // adding user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: pass,
      },
    });

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
