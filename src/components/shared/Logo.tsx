'use client';

import Link from 'next/link';
import { Leaf } from 'lucide-react'; // Changed back to Leaf
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
      <Leaf className="h-7 w-7 text-primary" /> {/* Changed back to Leaf */}
      <span>Sandesh Food Hub</span>
    </Link>
  );
}
