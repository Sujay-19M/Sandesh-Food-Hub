
import Image from 'next/image';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button'; // Import buttonVariants
import { Container } from '@/components/layout/Container';
import { Utensils } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn

export function Hero() {
  return (
    <div className="relative bg-primary/5 py-20 md:py-32 overflow-hidden"> {/* Updated background to primary/5 */}
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl drop-shadow-sm"> {/* Primary Green for heading */}
          Welcome to <span className="text-accent">Sandesh Food Hub</span> {/* Accent Orange for highlight */}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl"> {/* Dark brown for text */}
          Savor the rich flavors of authentic, pure vegetarian cuisine crafted with the freshest ingredients.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/menu" 
            className={cn(buttonVariants({ size: "lg", className: "bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground shadow-lg" }))}
          >
            <Utensils className="mr-2 h-5 w-5 inline-block" />
            Explore Our Menu
          </Link>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ size: "lg", variant: "outline", className: "shadow-lg border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" }))}
          >
            Visit Us
          </Link>
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
