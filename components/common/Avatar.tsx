'use client';

import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

export default function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden flex-shrink-0 ${sizeMap[size]} ${className}`}
      style={{ backgroundColor: 'var(--border)' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
