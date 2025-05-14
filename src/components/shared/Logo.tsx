import Link from 'next/link';
import { Utensils } from 'lucide-react'; // Changed from Leaf to Utensils
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
      <Utensils className="h-7 w-7" /> {/* Changed from Leaf to Utensils */}
      <span>Sandesh Food Hub</span>
    </Link>
  );
}
