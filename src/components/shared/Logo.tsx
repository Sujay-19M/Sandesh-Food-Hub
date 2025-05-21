
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClassName?: string; 
}

export function Logo({ className, textClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center text-primary hover:opacity-80 transition-opacity',
        className
      )}
      aria-label="Sandesh Food Hub Home"
    >
      <span className={cn('font-pacifico text-2xl', textClassName)}> {/* Reduced font size to text-2xl */}
        Sandesh Food Hub
      </span>
    </Link>
  );
}
