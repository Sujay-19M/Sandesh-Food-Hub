
import type { Metadata } from 'next';
import { Inter, Fira_Code, Pacifico, Playfair_Display } from 'next/font/google'; // Added Playfair_Display
import './globals.css';
import { UniversalHeader } from '@/components/layout/UniversalHeader';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const pacifico = Pacifico({
  variable: '--font-pacifico',
  subsets: ['latin'],
  weight: '400',
});

const playfair = Playfair_Display({ 
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700'], 
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
        url: '/favicon.ico', 
        width: 128, 
        height: 128, 
        alt: 'Sandesh Food Hub Logo',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico', 
    apple: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${pacifico.variable} ${playfair.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
            <UniversalHeader />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
      </body>
    </html>
  );
}
