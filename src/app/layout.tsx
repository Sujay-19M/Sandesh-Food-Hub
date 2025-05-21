
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { UniversalHeader } from '@/components/layout/UniversalHeader';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from "@/components/theme-provider"; // New import

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
        url: '/custom-logo-icon.svg', 
        width: 1200,
        height: 630,
        alt: 'Sandesh Food Hub Logo',
      },
    ],
  },
  icons: {
    icon: '/custom-logo-icon.svg',
    apple: '/custom-logo-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UniversalHeader />
          <main className="flex-grow pt-16 md:pt-20">{/* Added padding-top to account for sticky header height */}
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
