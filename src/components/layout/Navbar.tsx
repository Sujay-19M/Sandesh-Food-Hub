'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinkItem = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        'text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium',
        pathname === href && 'text-primary bg-primary/10 font-semibold'
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex justify-between items-center mb-6">
                <Logo />
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <XIcon className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLinkItem key={link.href} href={link.href} label={link.label} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
