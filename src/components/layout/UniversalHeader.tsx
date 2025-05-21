
'use client';

import type { SVGProps } from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sun, Moon, PhoneCall, MessageCircle } from 'lucide-react';
import { CustomLogoIcon } from '@/components/shared/CustomLogoIcon';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


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
      { label: 'Starters', href: '/menu#starters' }, // Updated to match menuData categories
      { label: 'South Indian', href: '/menu#south-indian' },
      { label: 'Main Course (Indian Gravy)', href: '/menu#indian-gravy' },
      { label: 'Desserts (Ice Cream)', href: '/menu#ice-cream' }, // Example, adjust as needed
      { label: 'Beverages (Shakes & Lassi)', href: '/menu#shakes' }, // Example
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: 'Order Now', href: '/order' },
  { label: 'Gallery', href: '/gallery' },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '911234567890';
const RESTAURANT_PHONE_NUMBER = process.env.NEXT_PUBLIC_RESTAURANT_PHONE || '+919332353778';
const RESTAURANT_PHONE_TEL_URI = `tel:${RESTAURANT_PHONE_NUMBER.replace(/\s+/g, '')}`;


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
          !(event.target as HTMLElement).closest('a[aria-label="Call restaurant"]') 
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
    return (
        <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60 text-primary-foreground shadow-md h-16 md:h-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 md:h-20 items-center justify-between">
                    <div className="hidden md:block"> 
                        <CustomLogoIcon className="h-24 w-24 text-accent" />
                    </div>
                    <div className="md:hidden w-9 h-9 bg-muted rounded-full animate-pulse"></div> {/* Phone Icon Placeholder */}
                    <div className="md:hidden absolute left-1/2 -translate-x-1/2"> {/* Centered Logo Placeholder */}
                         <div className="h-12 w-12 bg-muted rounded-full animate-pulse"></div> {/* Smaller mobile logo placeholder */}
                    </div>
                    <div className="hidden md:flex mx-auto items-center space-x-1 md:space-x-2">
                         <span className="h-5 w-12 md:w-16 bg-muted rounded animate-pulse"></span>
                         <span className="h-5 w-12 md:w-16 bg-muted rounded animate-pulse"></span>
                         <span className="h-5 w-12 md:w-16 bg-muted rounded animate-pulse"></span>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block h-9 w-24 bg-muted rounded-md animate-pulse"></div> {/* Call Button Placeholder */}
                        <div className="md:hidden w-9 h-9 ml-2 bg-muted rounded-full animate-pulse"></div> {/* Hamburger Placeholder */}
                    </div>
                </div>
            </div>
        </header>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60 text-primary-foreground shadow-md h-16 md:h-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden md:flex h-20 items-center">
            <Link href="/" className="flex-shrink-0" aria-label="Sandesh Food Hub Home">
              <CustomLogoIcon className="h-24 w-24 text-accent" />
            </Link>
            
            <nav className="mx-auto flex items-center space-x-1 md:space-x-2"> {/* Reduced space-x for tighter packing if needed */}
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href || '#'}
                      className="px-2 py-2 md:px-3 rounded-md text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors flex items-center"
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
                            className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted hover:text-muted-foreground transition-colors"
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
                    className="px-2 py-2 md:px-3 rounded-md text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="flex items-center space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="default" size="sm" className="bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground text-xs md:text-sm">
                      <PhoneCall className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      Call Now
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" align="end" className="w-auto p-3 shadow-lg rounded-md bg-popover text-popover-foreground border-border">
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-xs text-muted-foreground">Contact us:</p>
                      <a href={RESTAURANT_PHONE_TEL_URI} className="text-sm font-semibold text-primary hover:text-secondary">
                        {RESTAURANT_PHONE_NUMBER}
                      </a>
                    </div>
                  </PopoverContent>
                </Popover>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex h-16 items-center justify-between">
             <Button asChild variant="ghost" size="icon" className="p-1 text-primary-foreground hover:bg-primary-foreground/10" aria-label="Call restaurant">
                <a href={RESTAURANT_PHONE_TEL_URI}>
                  <PhoneCall className="h-5 w-5" /> {/* Slightly smaller icon */}
                </a>
            </Button>
            <Link href="/" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2" aria-label="Sandesh Food Hub Home">
               <CustomLogoIcon className="h-16 w-16 text-accent" /> {/* Smaller logo for mobile header */}
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-1 rounded-md text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
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
            'md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-xl transition-all duration-300 ease-in-out transform overflow-y-auto max-h-[calc(100vh-4rem)] z-40', 
            isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          )}
        >
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <details key={item.label} className="group">
                  <summary className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground cursor-pointer list-none transition-colors">
                    <Link href={item.href || '#'} onClick={(e) => { e.preventDefault(); (e.currentTarget.parentElement as HTMLDetailsElement).open = !(e.currentTarget.parentElement as HTMLDetailsElement).open; }} className="flex-grow">{item.label}</Link>
                    <ChevronDown className="ml-1 h-4 w-4 group-open:rotate-180 transition-transform flex-shrink-0 text-foreground" />
                  </summary>
                  <div className="pl-7 mt-1 space-y-1 transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen overflow-hidden">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href || '#'}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-secondary-foreground transition-colors"
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
                  className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
           <div className="p-4 border-t border-border space-y-3">
              <Button
                  asChild
                  className="w-full flex items-center justify-center text-sm font-medium text-accent-foreground bg-accent hover:bg-secondary hover:text-secondary-foreground transition-colors py-2.5" 
                  onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href={RESTAURANT_PHONE_TEL_URI}>
                  <PhoneCall className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
              <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="outline"
                  className="w-full flex items-center justify-center text-sm font-medium border-primary text-primary hover:bg-secondary hover:text-secondary-foreground py-2.5"
              >
                  <X className="mr-2 h-4 w-4" /> Close Menu
              </Button>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp CTA Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      </a>
    </>
  );
}
