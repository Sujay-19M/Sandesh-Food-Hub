
import Image from 'next/image';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button'; 
import { Container } from '@/components/layout/Container';
import { Utensils } from 'lucide-react';
import { cn } from '@/lib/utils'; 

export function Hero() {
  return (
    <div className="relative bg-background/30 py-16 md:py-32 overflow-hidden"> 
      <Container className="relative z-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm"> 
          Welcome to <span className="text-accent">Sandesh Food Hub</span> 
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base text-foreground/80 sm:text-lg md:text-xl"> 
          Savor the rich flavors of authentic, pure vegetarian cuisine crafted with the freshest ingredients.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link 
            href="/menu" 
            className={cn(buttonVariants({ size: "lg", className: "bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground shadow-lg text-sm md:text-base" }))}
          >
            <Utensils className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Explore Our Menu
          </Link>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ size: "lg", variant: "outline", className: "shadow-lg border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground text-sm md:text-base" }))}
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
