import React from 'react';

// nextjs imports
import Image from 'next/image';

// Importing assests
// import topImage from '../public/img/general.webp'

export default function TopSection() {
  return (
    <section className="bg-gray-900 relative h-96 max-w-7xl mx-auto">
      <Image src={'/img/general.webp'} alt='Top Image' fill={true} style={{ objectFit: 'cover' }} />
    </section>
  );
}
