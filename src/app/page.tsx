
import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/home/FeatureCard';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { Leaf, UtensilsCrossed, Smile, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Home | Sandesh Food Hub - Pure Vegetarian Restaurant',
  description: 'Welcome to Sandesh Food Hub! Discover a world of flavorful pure vegetarian dishes made with love and the freshest ingredients. Your go-to destination for healthy and delicious meals.',
};

const popularDishes = [
  {
    title: 'Paneer Tikka Shashlik',
    description: 'Succulent paneer cubes marinated in yogurt and spices, grilled with colorful bell peppers and onions.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Paneer Tikka Shashlik',
    dataAiHint: 'paneer tikka indian',
  },
  {
    title: 'Vegetable Biryani',
    description: 'Aromatic basmati rice cooked with a medley of fresh vegetables and fragrant spices, a true classic.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Vegetable Biryani',
    dataAiHint: 'veg biryani indian',
  },
  {
    title: 'Dal Makhani',
    description: 'Creamy and rich black lentils slow-cooked with butter and spices, a North Indian delicacy.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Dal Makhani',
    dataAiHint: 'dal makhani indian',
  },
];

const restaurantFeatures = [
   {
    title: '100% Pure Vegetarian',
    description: 'Delight in a menu that is entirely vegetarian, crafted with care and a passion for plant-based goodness.',
    icon: <Leaf className="h-8 w-8 md:h-10 md:w-10 text-primary" />, 
  },
  {
    title: 'Fresh & Local Ingredients',
    description: 'We prioritize sourcing the freshest, seasonal, and local ingredients to bring you vibrant and healthy meals.',
    icon: <Smile className="h-8 w-8 md:h-10 md:w-10 text-primary" />, 
  },
  {
    title: 'Authentic Flavors',
    description: 'Our chefs expertly blend traditional recipes with innovative techniques to create an unforgettable dining experience.',
    icon: <UtensilsCrossed className="h-8 w-8 md:h-10 md:w-10 text-primary" />, 
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about-us" className="py-12 md:py-16 bg-background"> 
        <Container>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary"> 
              Our Culinary Philosophy
            </h2>
            <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70"> 
              At Sandesh Food Hub, we believe in the power of fresh, wholesome vegetarian food to nourish the body and soul.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {restaurantFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="popular-dishes" className="py-12 md:py-16 bg-primary/5"> 
        <Container>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary"> 
              Taste Our Popular Dishes
            </h2>
            <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70"> 
              Handpicked by our chefs and loved by our customers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {popularDishes.map((dish) => (
              <FeatureCard
                key={dish.title}
                title={dish.title}
                description={dish.description}
                imageSrc={dish.imageSrc}
                imageAlt={dish.imageAlt}
                dataAiHint={dish.dataAiHint}
              />
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Link 
              href="/menu"
              className={cn(buttonVariants({ size: "lg", className: "bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground text-sm md:text-base" }))}
            >
              View Full Menu 
            </Link>
          </div>
        </Container>
      </section>
      
      <section id="cta-ambiance" className="py-12 md:py-16 bg-background"> 
        <Container className="text-center">
           <Info className="h-10 w-10 md:h-12 md:w-12 text-accent mx-auto mb-3 md:mb-4" /> 
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3 md:mb-4"> 
            Experience a Warm & Welcoming Ambiance
          </h2>
          <p className="max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70 mb-6 md:mb-8"> 
            Our restaurant offers a cozy and inviting atmosphere perfect for family dinners, friendly gatherings, or a quiet meal. 
            We are committed to providing excellent service and a memorable dining experience.
          </p>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ size: "lg", variant: "outline", className: "border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground text-sm md:text-base" }))}
          >
            Find Us & Book a Table 
          </Link>
        </Container>
      </section>
    </>
  );
}
