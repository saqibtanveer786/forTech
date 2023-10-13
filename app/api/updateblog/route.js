import { NextResponse } from 'next/server';
const fs = require('fs');

import { getAuthSession } from '../../../lib/auth'

async function PUT(request) {
  try {
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
