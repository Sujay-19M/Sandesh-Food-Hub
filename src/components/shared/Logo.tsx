'use client';

import Link from 'next/link';
import { HandPlatter } from '@/components/shared/HandPlatter'; // Changed from Leaf
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
      <HandPlatter className="h-7 w-7 text-primary" /> {/* Changed from Leaf */}
      <span>Sandesh Food Hub</span>
    </Link>
  );
}
