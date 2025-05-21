
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Gardening',
    dropdown: [
      { label: 'Rooftop Gardening', href: '/gardening/rooftop' },
      { label: 'Urban Farming', href: '/gardening/urban-farming' },
      { label: 'Seasonal Plants', href: '/gardening/seasonal-plants' },
      { label: 'Planting Guides', href: '/gardening/planting-guides' },
    ],
  },
  {
    label: 'Design Ideas',
    dropdown: [
      { label: 'Modern Rooftop Designs', href: '/design/modern-rooftop' },
      { label: 'Small Space Gardens', href: '/design/small-space' },
    ],
  },
  {
    label: 'Indoor Plants',
    dropdown: [
      { label: 'Best Indoor Plants', href: '/indoor/best-plants' },
      { label: 'Air Purifying Plants', href: '/indoor/air-purifying' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function UniversalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeMobileMenu = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        // Only close if click is outside the menu and menu is open
        if (isMobileMenuOpen && !(event.target as HTMLElement).closest('button[aria-label="Toggle mobile menu"]')) {
           setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', closeMobileMenu);
    return () => {
      document.removeEventListener('mousedown', closeMobileMenu);
    };
  }, [isMobileMenuOpen]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-green-500 font-bold text-xl hover:opacity-80 transition-opacity">
            RooftopRoots
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button
                    className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-green-500 hover:bg-green-500/10 transition-colors flex items-center"
                    aria-haspopup="true"
                    aria-expanded="false" // This should be dynamic if menu opens on click
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-card text-card-foreground ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby={item.label}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href || '#'}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-green-500 transition-colors"
                          role="menuitem"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || '#'}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-green-500 hover:bg-green-500/10 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-green-500 hover:bg-green-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={cn(
          'md:hidden absolute top-16 left-0 right-0 bg-background shadow-xl transition-all duration-300 ease-in-out transform overflow-y-auto max-h-[calc(100vh-4rem)]', // 4rem is header height
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        )}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <details key={item.label} className="group">
                <summary className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-muted hover:text-green-500 cursor-pointer list-none transition-colors">
                  {item.label}
                  <ChevronDown className="ml-1 h-5 w-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 mt-1 space-y-1 transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen overflow-hidden">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href || '#'}
                      className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:bg-muted hover:text-green-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                href={item.href || '#'}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-muted hover:text-green-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
         <div className="p-4 border-t border-border">
            <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
                <X className="mr-2 h-5 w-5" /> Close Menu
            </button>
        </div>
      </div>
    </header>
  );
}
