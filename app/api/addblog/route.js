const { NextRequest, NextResponse } = require('next/server');
const fs = require('fs');

async function POST(request) {
  try {
    const data = await request.json();

    // Reading the blog directory and checking either blog with same title already exists
    const dir = await fs.readdirSync('blogs', 'utf-8');
    if (dir.includes(`${data.title}.json`)) {
      return NextResponse.json('this file had already included');
    }

    console.log(typeof data);
    console.log(data);

    const addFile = await fs.writeFileSync(
      `blogs/${data.title}.json`,
      JSON.stringify(data)
    );

    return NextResponse.json(
      data,
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}



module.exports = {
  POST,
};
