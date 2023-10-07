import React from 'react';

// nextjs imports
import Image from 'next/image';

// getting session function
import { getAuthSession } from '../lib/auth';

export default async function TopSection() {
  const session = await getAuthSession()
  console.log(session)
  return (
    <section className="bg-gray-900 relative h-96 max-w-7xl mx-auto">
      <Image src={'/img/general.webp'} alt='Top Image' fill={true} style={{ objectFit: 'cover' }} priority />
    </section>
  );
}
