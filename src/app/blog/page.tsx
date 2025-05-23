
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog | Sandesh Food Hub',
  description: 'Latest news, articles, recipes, and updates from Sandesh Food Hub.',
};

const blogPosts = [
  {
    slug: 'the-joy-of-vegetarian-cuisine',
    title: 'The Joy of Vegetarian Cuisine: A Healthy and Delicious Lifestyle',
    date: 'October 26, 2023',
    excerpt: 'Discover the vibrant world of vegetarian food, its health benefits, and how Sandesh Food Hub is making it more exciting than ever.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'vegetarian food variety',
  },
  {
    slug: 'behind-the-scenes-our-kitchen-secrets',
    title: 'Behind the Scenes: Our Kitchen Secrets for Freshness and Flavor',
    date: 'November 05, 2023',
    excerpt: 'Take a peek into how we source our ingredients and prepare your favorite dishes with love and care at Sandesh Food Hub.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chef cooking kitchen',
  },
  {
    slug: 'top-5-must-try-dishes-at-sandesh',
    title: 'Top 5 Must-Try Dishes at Sandesh Food Hub This Season',
    date: 'November 15, 2023',
    excerpt: 'Our chef’s top picks and customer favorites that you absolutely cannot miss on your next visit!',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'food platter delicious',
  },
];

export default function BlogPage() {
  return (
    <Container className="py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Our Blog
        </h1>
        <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70">
          Stay updated with the latest news, recipes, and stories from Sandesh Food Hub.
        </p>
      </header>

      {blogPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 sm:h-56 w-full">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={post.dataAiHint}
                  />
                </div>
              </Link>
              <CardHeader className="px-4 py-3 md:px-6 md:py-4">
                <Link href={`/blog/${post.slug}`}>
                  <CardTitle className="text-lg md:text-xl font-semibold text-primary hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                <CardDescription className="text-xs text-muted-foreground">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-4 py-2 md:px-6 md:py-3">
                <p className="text-xs sm:text-sm text-foreground/80">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-4 py-3 md:px-6 md:py-4">
                <Link 
                  href={`/blog/${post.slug}`}
                  className={cn(buttonVariants({ variant: "link", className: "text-accent p-0 h-auto text-sm" }))}
                >
                  Read More &rarr;
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 md:py-10">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Coming Soon!</h2>
          <p className="text-sm md:text-base text-foreground/70">
            Our blog is under preparation. Check back soon for exciting articles and updates.
          </p>
        </div>
      )}
    </Container>
  );
}
