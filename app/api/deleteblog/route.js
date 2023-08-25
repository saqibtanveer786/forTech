const { NextRequest, NextResponse } = require('next/server');
const fs = require('fs');

async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const slug = searchParams.get('slug');

    const filesList = await fs.readdirSync('blogs', 'utf-8');
    if (!filesList.includes(`${slug}.json`)) {
      return NextResponse.json('There is no such blog to delete');
    }
    console.log(filesList);
    const file = await fs.unlinkSync(`blogs/${slug}.json`);
    console.log(file);
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  DELETE,
};
