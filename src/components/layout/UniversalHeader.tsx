
'use client';

import type { SVGProps } from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, MessageCircle, Sun, Moon } from 'lucide-react'; // Sun, Moon can be removed if not used elsewhere after this fix
import { CustomLogoIcon } from '@/components/shared/CustomLogoIcon';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Menu',
    href: '/menu',
    dropdown: [
      { label: 'Starters', href: '/menu#appetizers' },
      { label: 'Main Course', href: '/menu#main-courses' },
      { label: 'Desserts', href: '/menu#desserts' },
      { label: 'Beverages', href: '/menu#beverages' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: 'Order Now', href: '/order' },
  { label: 'Gallery', href: '/gallery' },
];

const WHATSAPP_NUMBER = '911234567890'; // Replace with your actual WhatsApp number

export function UniversalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const closeMobileMenu = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        if (
          isMobileMenuOpen &&
          !(event.target as HTMLElement).closest('button[aria-label="Toggle mobile menu"]') &&
          !(event.target as HTMLElement).closest('button[aria-label="Toggle theme"]') // Ensure theme toggle doesn't close it
        ) {
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
  
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  if (!isMounted) {
    // Render a skeleton or basic version of the header until mounted
    // This helps avoid hydration mismatches related to theme preference
    return (
        <header className="sticky top-0 z-50 bg-background text-foreground shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 md:h-20 items-center justify-between">
                    <div className="md:flex-shrink-0"> {/* Placeholder for logo area */}
                        <CustomLogoIcon className="h-24 w-24 text-accent" />
                    </div>
                    <div className="hidden md:flex mx-auto items-center space-x-2"> {/* Placeholder for nav */}
                         <span className="p-2">Home</span>
                         <span className="p-2">Menu</span>
                         <span className="p-2">Contact</span>
                    </div>
                    <div className="flex items-center"> {/* Placeholder for right side actions */}
                        <div className="w-9 h-9 md:w-10 md:h-10 bg-muted rounded-full animate-pulse"></div> {/* Skeleton for theme toggle */}
                        <div className="md:hidden w-9 h-9 ml-2 bg-muted rounded-full animate-pulse"></div> {/* Skeleton for hamburger */}
                    </div>
                </div>
            </div>
        </header>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-background text-foreground shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden md:flex h-20 items-center">
            <Link href="/" className="flex-shrink-0" aria-label="Sandesh Food Hub Home">
              <CustomLogoIcon className="h-24 w-24 text-accent" />
            </Link>
            
            <nav className="mx-auto flex items-center space-x-2">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href || '#'}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors flex items-center"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-card text-card-foreground ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0 z-20">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby={item.label}>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href || '#'}
                            className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                            role="menuitem"
                            onClick={handleLinkClick}
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
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            {/* Removed Theme Toggle Button for Desktop */}
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex h-16 items-center justify-between">
             {/* Removed Theme Toggle Button for Mobile Left */}
            <div className="w-9 md:w-10"></div> {/* Placeholder for spacing if theme toggle was on left */}
            <Link href="/" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2" aria-label="Sandesh Food Hub Home">
               <CustomLogoIcon className="h-20 w-20 text-accent" />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          ref={mobileMenuRef}
          className={cn(
            'md:hidden fixed inset-x-0 top-16 bg-background shadow-xl transition-all duration-300 ease-in-out transform overflow-y-auto max-h-[calc(100vh-4rem)] z-40',
            isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          )}
        >
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <details key={item.label} className="group">
                  <summary className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-muted hover:text-primary cursor-pointer list-none transition-colors">
                    <Link href={item.href || '#'} onClick={handleLinkClick} className="flex-grow">{item.label}</Link>
                    <ChevronDown className="ml-1 h-5 w-5 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="pl-7 mt-1 space-y-1 transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen overflow-hidden">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href || '#'}
                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                        onClick={handleLinkClick}
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
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted hover:text-primary transition-colors"
                  onClick={handleLinkClick}
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

      {/* Floating WhatsApp CTA Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
