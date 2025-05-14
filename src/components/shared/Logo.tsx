'use client';

import Link from 'next/link';
import { Star } from 'lucide-react'; // Changed from CookingPot to Star
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
      <Star className="h-7 w-7" /> {/* Changed from CookingPot to Star */}
      <span>Sandesh Food Hub</span>
    </Link>
  );
}
