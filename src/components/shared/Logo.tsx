
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center space-x-2 text-xl font-semibold text-primary hover:opacity-80 transition-opacity',
        className
      )}
      aria-label="Sandesh Food Hub Home"
    >
      <Image
        src="/hand-platter-logo.svg"
        alt="Sandesh Food Hub Logo"
        width={28} // Adjust width as needed
        height={28} // Adjust height as needed
        className="h-7 w-7" // You can use Tailwind for sizing or rely on width/height
      />
      <span>Sandesh Food Hub</span>
    </Link>
  );
}
