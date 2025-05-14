import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
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
    default: 'Veggie Delights - Pure Vegetarian Restaurant',
    template: '%s | Veggie Delights',
  },
  description: 'Enjoy delicious and fresh pure vegetarian dishes at Veggie Delights. Explore our diverse menu featuring appetizers, main courses, desserts, and beverages. Visit us for an unforgettable dining experience.',
  keywords: ['vegetarian restaurant', 'pure veg', 'indian food', 'healthy food', 'veggie delights menu'],
  openGraph: {
    title: 'Veggie Delights - Pure Vegetarian Restaurant',
    description: 'Delicious and fresh pure vegetarian dishes.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://veggiedelights.example.com', // Replace with actual URL
    siteName: 'Veggie Delights',
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=Veggie+Delights+Restaurant', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Veggie Delights Restaurant',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
