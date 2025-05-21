
import Link from 'next/link';
import { Container } from './Container';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { CustomLogoIcon } from '@/components/shared/CustomLogoIcon'; // Assuming this is your SVG logo component

const footerNavLinks = {
  ourHub: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Our Menu', href: '/menu' },
    { label: 'Gallery', href: '/gallery' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Copyright', href: '/copyright' },
  ],
  more: [
    { label: 'Franchise', href: '/franchise' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'RSS Feed', href: '/rss.xml', newTab: true },
    { label: 'Sitemap', href: '/sitemap.xml', newTab: true },
  ],
};

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/sandeshfoodhub', icon: Facebook },
  { label: 'Instagram', href: 'https://instagram.com/sandeshfoodhub', icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com/sandeshfoodhub', icon: Youtube },
  { label: 'WhatsApp', href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '911234567890'}`, icon: MessageCircle },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const siteName = "Sandesh Food Hub";

  return (
    <footer className="border-t border-border/40 bg-muted text-muted-foreground mt-auto"> {/* Dark Brown BG, Light text */}
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Section */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
             <Link href="/" className="inline-block mb-2 text-accent hover:opacity-80 transition-opacity"> {/* Orange Accent Color for Logo */}
              <CustomLogoIcon className="h-20 w-20" /> {/* Adjust size as needed */}
            </Link>
            <Link href="/" className="text-primary-foreground hover:text-secondary transition-colors"> {/* Light text, Mint green hover */}
              <span className="font-playfair text-2xl font-bold">{siteName}</span>
            </Link>
            <p className="text-sm text-muted-foreground/80 max-w-xs mx-auto md:mx-0">
              Experience the joy of pure vegetarian cuisine, crafted with passion and the freshest ingredients.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground/70 hover:text-primary transition-transform duration-300 ease-in-out hover:scale-110" // Light icon, Green hover
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: 'Our Hub' Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">Our Hub</h3> {/* Light heading */}
            <ul className="space-y-2">
              {footerNavLinks.ourHub.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground/90 hover:text-secondary transition-colors"> {/* Light link, Mint hover */}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 'Legal' Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">Legal</h3> {/* Light heading */}
            <ul className="space-y-2">
              {footerNavLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground/90 hover:text-secondary transition-colors"> {/* Light link, Mint hover */}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: 'More' Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">More</h3> {/* Light heading */}
            <ul className="space-y-2">
              {footerNavLinks.more.map((link) => (
                <li key={link.label}>
                   {link.newTab ? (
                     <a
                       href={link.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-sm text-muted-foreground/90 hover:text-secondary transition-colors" /* Light link, Mint hover */
                     >
                       {link.label}
                     </a>
                   ) : (
                    <Link href={link.href} className="text-sm text-muted-foreground/90 hover:text-secondary transition-colors"> {/* Light link, Mint hover */}
                      {link.label}
                    </Link>
                   )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 mt-8 text-center"> {/* Lighter border on dark bg */}
          <p className="text-sm text-muted-foreground/80">
            &copy; {currentYear}{' '}
            <Link href="/" className="font-semibold text-primary-foreground hover:text-secondary transition-colors font-playfair"> {/* Light site name, Mint hover */}
              {siteName}
            </Link>
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
