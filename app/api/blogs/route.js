import { NextResponse } from 'next/server';

import * as fs from 'fs';
import prisma from '../../../lib/prisma';

export async function GET() {
  // let blogs = [];

  // const response = await fs.readdirSync('blogs');
  // for (let index = 0; index < response.length; index++) {
  //   const blog = await fs.readFileSync('blogs/' + response[index], 'utf-8');
  //   blogs.push(JSON.parse(blog));
  // }
  const posts = await prisma.post.findMany()


  return NextResponse.json(posts, { status: 200 });
}
