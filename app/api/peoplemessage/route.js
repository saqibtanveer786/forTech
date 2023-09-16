const { NextRequest, NextResponse } = require('next/server');

import prisma from '../../../lib/prisma';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Adding message
    const addMessage = await prisma.PeopleMessages.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json(
      addMessage ? { submittedMessage: addMessage, message: "Message Submitted Successfully", status: true } : { message: "Error While Adding", status: false },
      { status: addMessage ? 200 : 404 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: `An Unexpected Error Occured On Server`, status: false });
  }

}
module.exports = {
  POST,
};
