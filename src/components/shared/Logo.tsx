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
        'flex items-center hover:opacity-80 transition-opacity',
        className
      )}
      aria-label="Sandesh Food Hub Home"
    >
      <Image
        src="/logo.png"
        alt="Sandesh Food Hub Logo"
        width={48}
        height={48}
        className="object-contain"
        priority
      />
    </Link>
  );
}
