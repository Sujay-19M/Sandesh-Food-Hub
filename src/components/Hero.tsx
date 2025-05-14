import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { Utensils } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-secondary/30 py-20 md:py-32 overflow-hidden">
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl drop-shadow-sm">
          Welcome to <span className="text-accent">Sandesh Food Hub</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
          Savor the rich flavors of authentic, pure vegetarian cuisine crafted with the freshest ingredients.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
            <Link href="/menu">
              <Utensils className="mr-2 h-5 w-5" />
              Explore Our Menu
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="shadow-lg border-primary text-primary hover:bg-primary/10">
            <Link href="/contact">
              Visit Us
            </Link>
          </Button>
        </div>
      </Container>
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Delicious vegetarian food platter at Sandesh Food Hub"
          data-ai-hint="vegetarian food platter"
          layout="fill"
          objectFit="cover"
          priority
        />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
    </div>
  );
}
