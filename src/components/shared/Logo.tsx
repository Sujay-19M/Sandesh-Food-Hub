'use client';

import Link from 'next/link';
import { HandPlatterIcon } from './HandPlatterIcon'; // Import the new icon component
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
      {/* Use the new HandPlatterIcon component */}
      <HandPlatterIcon className="h-7 w-7 text-primary" /> 
      <span>Sandesh Food Hub</span>
    </Link>
  );
}
