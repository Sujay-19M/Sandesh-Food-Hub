
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { UniversalHeader } from '@/components/layout/UniversalHeader'; // Changed
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sandesh Food Hub - Pure Vegetarian Restaurant',
    template: '%s | Sandesh Food Hub',
  },
  description: 'Enjoy delicious and fresh pure vegetarian dishes at Sandesh Food Hub. Explore our diverse menu featuring appetizers, main courses, desserts, and beverages. Visit us for an unforgettable dining experience.',
  keywords: ['vegetarian restaurant', 'pure veg', 'indian food', 'healthy food', 'sandesh food hub menu'],
  openGraph: {
    title: 'Sandesh Food Hub - Pure Vegetarian Restaurant',
    description: 'Delicious and fresh pure vegetarian dishes.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://sandeshfoodhub.example.com', 
    siteName: 'Sandesh Food Hub',
    images: [
      {
        url: '/hand-platter-logo.svg', // Assuming this is your main OG image now
        width: 1200, // Adjust if your SVG has different intrinsic dimensions
        height: 630, // Adjust
        alt: 'Sandesh Food Hub Logo',
      },
    ],
  },
  icons: {
    icon: '/hand-platter-logo.svg', // Favicon
    apple: '/hand-platter-logo.svg', // Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <UniversalHeader /> {/* Changed from Navbar */}
        <main className="flex-grow pt-16 md:pt-20">{/* Added padding-top to account for sticky header height */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
