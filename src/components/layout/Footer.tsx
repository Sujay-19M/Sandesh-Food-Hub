
import Link from 'next/link';
import { Container } from './Container';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

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
    <footer className="border-t border-border/40 bg-card text-card-foreground mt-auto">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Section */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="text-primary hover:opacity-80 transition-opacity">
              <span className="font-pacifico text-3xl font-bold">{siteName}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
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
                  className="text-muted-foreground hover:text-primary transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: 'Our Hub' Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Our Hub</h3>
            <ul className="space-y-2">
              {footerNavLinks.ourHub.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 'Legal' Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerNavLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: 'More' Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">More</h3>
            <ul className="space-y-2">
              {footerNavLinks.more.map((link) => (
                <li key={link.label}>
                   {link.newTab ? (
                     <a
                       href={link.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-sm text-muted-foreground hover:text-primary transition-colors"
                     >
                       {link.label}
                     </a>
                   ) : (
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                   )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear}{' '}
            <Link href="/" className="font-semibold text-foreground hover:text-primary transition-colors font-pacifico">
              {siteName}
            </Link>
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
