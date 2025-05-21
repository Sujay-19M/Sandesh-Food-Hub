
'use client';

import Link from 'next/link';
import { CustomLogoIcon } from '@/components/shared/CustomLogoIcon';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconClassName?: string; // To allow specific styling for the icon itself
}

export function Logo({ className, iconClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center space-x-2 text-xl font-semibold text-primary hover:opacity-80 transition-opacity',
        className
      )}
      aria-label="Sandesh Food Hub Home"
    >
      <CustomLogoIcon className={cn("h-24 w-24 text-accent", iconClassName)} />
      {/* Text "Sandesh Food Hub" is removed as the SVG logo should contain it */}
    </Link>
  );
}
