const { NextRequest, NextResponse } = require('next/server');
const fs = require('fs');

async function POST(request) {
  try {
    const data = await request.json();
    const dataToAdd = JSON.stringify(data);
    const files = await fs.readdirSync('contact', 'utf-8');
    console.log(files.length);
    fs.writeFile(`contact/${files.length}.json`, dataToAdd, function (error) {
      if (error) {
        throw error;
      } else {
        console.log('File created');
      }
    });
    return NextResponse.json(dataToAdd);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  POST,
};
