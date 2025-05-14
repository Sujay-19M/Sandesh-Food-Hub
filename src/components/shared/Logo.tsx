import Link from 'next/link';
import { Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors ${className}`}>
      <Leaf className="h-8 w-8" />
      <span>Veggie Delights</span>
    </Link>
  );
}
