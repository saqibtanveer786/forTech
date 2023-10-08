import { NextResponse } from 'next/server';
const fs = require('fs');

import { getAuthSession } from '../../../lib/auth'

async function PUT(request) {
  try {
    // checking authorization 
    const session = await getAuthSession()
    if (!session || session?.user?.email !== process.env.ADMIN_EMAIL) return NextResponse.json(
      {
        message: `You are not Allowed`,
      },
      { status: 404 }
    )

    const data = await request.json();
    console.log(data);
    const updateFile = await fs.writeFileSync(
      `blogs/${data.slug}.json`,
      JSON.stringify(data)
    );

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  PUT,
};
