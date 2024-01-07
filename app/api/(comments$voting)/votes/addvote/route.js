import { NextResponse } from "next/server";
import prisma from "lib/prisma";

async function deleteVote(userId, postId) {
  const delete_vote = await prisma.Vote.delete({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });
  if (!delete_vote) return false;
  return true;
}

export async function POST(request) {
  try {
    const { userId, postId, type } = await request.json();

    // check for body data
    if (!userId || !postId || !type)
      return NextResponse.json(
        { message: "something is wrong", status: "error" },
        { status: 405 }
      );

    // check if vote of user allready exists
    const checkVote = await prisma.vote.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    // check if user already liked or disliked
    if (checkVote && checkVote.type === type) {
      const delVote = await deleteVote(userId, postId);

      if (!delVote)
        return NextResponse.json(
          { message: "Internal server error", status: "error" },
          { status: 405 }
        );

      return NextResponse.json(
        { message: "Vote Deleted", status: "success" },
        { status: 405 }
      );
    }

    // case in which user trying to change the vote type
    if (checkVote && checkVote.type !== type) {
      const updateVote = await prisma.vote.update({
        where: {
          userId_postId: {
            userId,
            postId,
          },
        },
        data: {
          type,
        },
      });

      if (!updateVote)
        return NextResponse.json(
          { message: "Internal server error", status: "error" },
          { status: 405 }
        );

      return NextResponse.json(
        {
          message: "operation successfull",
          status: "success",
          type: updateVote.type,
        },
        { status: 200 }
      );
    }

    // case for first time
    const addTheNewOne = await prisma.Vote.create({
      data: {
        userId,
        postId,
        type,
      },
    });

    // vote submitt validity
    if (!addTheNewOne)
      return NextResponse.json(
        { message: "Internal server error", status: "error" },
        { status: 405 }
      );

    // response on operation complete
    return NextResponse.json(
      {
        message: "Thanks for your opinion!",
        status: "success",
        type: addTheNewOne.type,
      },
      { status: 200 }
    );

    // catch blog
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error", status: "error" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { userId, postId } = await request.json();

    console.log(userId, postId);

    const findVote = await prisma.vote.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
      select: {
        type: true,
      },
    });

    if (!findVote)
      return NextResponse.json(
        {
          message: "Internal server error",
        },
        { status: 500 }
      );

    console.log(findVote);

    return NextResponse.json({ type: findVote.type }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
