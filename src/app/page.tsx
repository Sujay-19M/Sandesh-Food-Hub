
import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/home/FeatureCard';
import { Button, buttonVariants } from '@/components/ui/button'; // Import buttonVariants
import { Container } from '@/components/layout/Container';
import { Leaf, UtensilsCrossed, Smile, Info } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn

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
    icon: <Leaf className="h-10 w-10 text-primary" />, // Green icon
  },
  {
    title: 'Fresh & Local Ingredients',
    description: 'We prioritize sourcing the freshest, seasonal, and local ingredients to bring you vibrant and healthy meals.',
    icon: <Smile className="h-10 w-10 text-primary" />, // Green icon
  },
  {
    title: 'Authentic Flavors',
    description: 'Our chefs expertly blend traditional recipes with innovative techniques to create an unforgettable dining experience.',
    icon: <UtensilsCrossed className="h-10 w-10 text-primary" />, // Green icon
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about-us" className="py-16 bg-background"> {/* Beige Background */}
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"> {/* Green Heading */}
              Our Culinary Philosophy
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70"> {/* Dark Brown Text */}
              At Sandesh Food Hub, we believe in the power of fresh, wholesome vegetarian food to nourish the body and soul.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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

      <section id="popular-dishes" className="py-16 bg-primary/5"> {/* Very light green tint background */}
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"> {/* Green Heading */}
              Taste Our Popular Dishes
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70"> {/* Dark Brown Text */}
              Handpicked by our chefs and loved by our customers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="text-center mt-12">
            <Link 
              href="/menu"
              className={cn(buttonVariants({ size: "lg", className: "bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground" }))}
            >
              View Full Menu
            </Link>
          </div>
        </Container>
      </section>
      
      <section id="cta-ambiance" className="py-16 bg-background"> {/* Beige Background */}
        <Container className="text-center">
           <Info className="h-12 w-12 text-accent mx-auto mb-4" /> {/* Orange Icon */}
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4"> {/* Green Heading */}
            Experience a Warm & Welcoming Ambiance
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 mb-8"> {/* Dark Brown Text */}
            Our restaurant offers a cozy and inviting atmosphere perfect for family dinners, friendly gatherings, or a quiet meal. 
            We are committed to providing excellent service and a memorable dining experience.
          </p>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ size: "lg", variant: "outline", className: "border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" }))}
          >
            Find Us & Book a Table
          </Link>
        </Container>
      </section>
    </>
  );
}
