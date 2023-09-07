const { NextRequest, NextResponse } = require('next/server');
const fs = require('fs');

export const config = { runtime: 'experimental-edge' }


export async function POST(request) {

  try {
    let data = await request.formData();
    console.log(data)
  } catch (e) {
    console.log(e)
    return NextResponse.json("failfailfailfailafia  ffffffffffffffffail")
  }

}
module.exports = {
  POST,
};
