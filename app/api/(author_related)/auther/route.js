import { NextResponse } from "next/server";

import prisma from "lib/prisma";

export async function POST(request) {
  try {
    const userId = await request.nextUrl.searchParams.get("userid");
    console.log("userid is:", userId);

    // check if auther profile already exists
    const autherAlreadyExists = await prisma.AuthorProfile.findUnique({
      where: {
        id: userId,
      },
    });
    if (autherAlreadyExists)
      return NextResponse.json(
        { message: "You Have Already A Profile", status: "error" },
        { status: 401 }
      );

    // check if login user is making request
    const isNormalUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!isNormalUser)
      return NextResponse.json(
        { message: "Not Allowed", status: "error" },
        { status: 401 }
      );

    // validating data
    // const result = AutherSchema.safeParse(data)
    // if (!result.success) {
    //     console.log("error is validation of auther data: " + result.error)
    //     return NextResponse.json({ message: "Data is not valid", status: 'error'}, { status: 401 })
    // }

    const { infoData, educationData, experienceData, socialLinks, skills } =
      await request.json();
    const addAuther = await prisma.AuthorProfile.create({
      data: {
        socialLinks: JSON.stringify(socialLinks),
        userId: userId,
        skills: skills,
        ...infoData,
        education: {
          create: educationData,
        },
        experience: {
          create: experienceData,
        },
      },
    });

    if (!addAuther)
      return NextResponse.json(
        { message: "Internal Server Error", status: "error" },
        { status: 401 }
      );

    return NextResponse.json(
      {
        message: "Your Application has been submitted",
        status: "success",
        auther: addAuther,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error in the auther POST method: " + error);
    return NextResponse.json(
      { message: "Internal Server Error", status: "error" },
      { status: 500 }
    );
  }
}
