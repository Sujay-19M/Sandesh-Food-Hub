'use client';

import Link from 'next/link';
import { CookingPot } from 'lucide-react'; // Changed from Utensils to CookingPot
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
      <CookingPot className="h-7 w-7" /> {/* Changed from Utensils to CookingPot */}
      <span>Sandesh Food Hub</span>
    </Link>
  );
}
