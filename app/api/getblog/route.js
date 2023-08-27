import { NextRequest, NextResponse } from 'next/server';

import * as fs from 'fs';

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const title = searchParams.get('name');

    const fileData = await fs.readFileSync(`blogs/${title}.json`, 'utf-8');

    if (!fileData) {
      return NextResponse.json(
        { Error: 'No Such Blog', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { data: JSON.parse(fileData), success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { Error: 'Internal Server Error', success: false },
      { status: 500 }
    );
  }
}
