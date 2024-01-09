const { NextRequest, NextResponse } = require("next/server");

import prisma from "lib/prisma";

async function checkFollowExistance(authorId, userId) {
  const checkFollow = await prisma.follows.findUnique({
    where: {
      followerId_followingId: {
        followerId: authorId,
        followingId: userId,
      },
    },
  });
  console.log("record is:", checkFollow);
  if (!checkFollow) return false;
  return true;
}

async function checkUserExistanceInDB(userId) {
  const isUserExists = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!isUserExists) return false;
  return true;
}

async function deleteFollow(authorId, userId) {
  const deleteUser = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: authorId,
        followingId: userId,
      },
    },
  });
  if (!deleteUser) return false;
  return true;
}

export async function POST(request) {
  try {
    const { userId, authorId } = await request.json();

    // if follows already exists
    const isFollowExists = await checkFollowExistance(authorId, userId);
    console.log("record exist:", isFollowExists);
    if (isFollowExists) {
      const deleteExistingFollow = await deleteFollow(authorId, userId);

      if (!deleteExistingFollow) throw new Error("Internal server error");
      return NextResponse.json(
        { message: "You have Unfollowed.", status: false },
        { status: 200 }
      );
    }

    // Adding message
    const addFollow = await prisma.Follows.create({
      data: {
        followerId: authorId,
        followingId: userId,
      },
    });

    return NextResponse.json(
      addFollow
        ? { message: "You are now following", status: true }
        : { message: "Error While following", status: false },
      { status: addFollow ? 200 : 404 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: `An Unexpected Error Occured On Server`,
      status: "error",
    });
  }
}

// patch request is used instead of get due to a reason.
export async function PATCH(request) {
  try {
    const { userId, authorId } = await request.json();

    // check if user making request
    const isUserExists = await checkUserExistanceInDB(userId);
    if (!isUserExists)
      return NextResponse.json({ message: "Not Allowed!" }, { status: 401 });

    const isUserFollowingAuthor = await prisma.follows.findUnique({
      where: {
        followerId_followingId: {
          followerId: authorId,
          followingId: userId,
        },
      },
    });

    if (!isUserFollowingAuthor) return NextResponse.json(false);

    return NextResponse.json(true);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
