const { NextRequest, NextResponse } = require('next/server');
const fs = require('fs');

async function POST(request) {
  try {
    const data = await request.json();
    const dir = await fs.readdirSync('blogs', 'utf-8');
    if (dir.includes(`${data.slug}.json`)) {
      return NextResponse.json('this file had already included');
    }

    console.log(typeof data);
    console.log(data);
    const addFile = await fs.writeFileSync(
      `blogs/${data.slug}.json`,
      JSON.stringify(data)
    );
    // if (!addFile) {
    //   return NextResponse.json('Some error occured');
    // }
    const dataToSend = JSON.stringify(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}



module.exports = {
  POST,
};
