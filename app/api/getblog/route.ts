import { NextRequest, NextResponse } from 'next/server';

import * as fs from 'fs';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const slug = searchParams.get('slug');

    const fileData = await fs.readFileSync(`blogs/${slug}.json`, 'utf-8');

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
