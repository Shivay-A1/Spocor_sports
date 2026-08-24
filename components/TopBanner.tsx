'use client';

import Image from 'next/image';

export default function TopBanner() {
  return (
    <div className="relative w-full">
      <div className="w-full h-auto">
        <Image
          src="/banner.png"
          alt="SPACOR SPORTS Banner"
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
