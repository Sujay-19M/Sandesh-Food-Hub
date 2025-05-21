
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Phone, ShoppingBag, Globe } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Order Now | Sandesh Food Hub',
  description: 'Order your favorite vegetarian dishes from Sandesh Food Hub for delivery or takeaway. Quick, easy, and delicious!',
};

const onlineOrderingPlatforms = [
  { name: 'Swiggy', logo: '/swiggy-logo.svg', link: 'https://swiggy.com/restaurants/your-restaurant-name', dataAiHint: 'swiggy logo food delivery' },
  { name: 'Zomato', logo: '/zomato-logo.svg', link: 'https://zomato.com/your-city/your-restaurant-name/order', dataAiHint: 'zomato logo food delivery' },
];

const RESTAURANT_PHONE_NUMBER = process.env.NEXT_PUBLIC_RESTAURANT_PHONE || '+919332353778';
const RESTAURANT_PHONE_TEL_URI = `tel:${RESTAURANT_PHONE_NUMBER.replace(/\s+/g, '')}`;


export default function OrderNowPage() {
  return (
    <Container className="py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Order Your Favorites
        </h1>
        <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70">
          Craving our delicious vegetarian meals? Get them delivered to your doorstep or pick them up at your convenience.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="bg-card p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6 flex items-center">
            <Phone className="mr-2 md:mr-3 h-6 w-6 md:h-7 md:w-7 text-accent" />
            Order Directly
          </h2>
          <p className="text-sm md:text-base text-foreground/80 mb-3 md:mb-4">
            Call us to place your order for takeaway or to inquire about direct delivery options in your area.
          </p>
          <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg py-2.5 md:py-3">
            <a href={RESTAURANT_PHONE_TEL_URI}>
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Call {RESTAURANT_PHONE_NUMBER}
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3 md:mt-4 text-center">
            Our team is ready to assist you with your order.
          </p>
           <div className="mt-6 md:mt-8 text-center">
            <Link href="/menu" className="text-sm md:text-base text-primary hover:text-accent underline font-medium flex items-center justify-center">
               <ShoppingBag className="mr-2 h-4 w-4 md:h-5 md:w-5" /> View Full Menu
            </Link>
          </div>
        </div>

        <div className="bg-card p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6 flex items-center">
            <Globe className="mr-2 md:mr-3 h-6 w-6 md:h-7 md:w-7 text-accent" />
            Order Online
          </h2>
          <p className="text-sm md:text-base text-foreground/80 mb-4 md:mb-6">
            Find us on your favorite food delivery platforms:
          </p>
          <div className="space-y-3 md:space-y-4">
            {onlineOrderingPlatforms.map(platform => (
              <Button 
                key={platform.name}
                asChild 
                variant="outline" 
                size="lg"
                className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary text-sm md:text-base py-2.5 md:py-3 justify-start"
              >
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5" />
                  Order on {platform.name}
                </a>
              </Button>
            ))}
          </div>
           <p className="text-xs text-muted-foreground mt-4 md:mt-6 text-center">
            Delivery availability and times may vary by platform and location.
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-16 bg-secondary/10 p-6 md:p-8 rounded-lg shadow-md text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2 md:mb-3">Why Order From Us?</h3>
        <p className="text-sm md:text-base text-foreground/80 max-w-md md:max-w-xl mx-auto">
          Enjoy the same fresh, high-quality vegetarian dishes you love from our restaurant, conveniently in your home or office. We ensure hygienic preparation and careful packaging for every order.
        </p>
        <div className="relative w-full max-w-lg mx-auto mt-4 md:mt-6 aspect-[16/6] md:aspect-[16/5]">
            <Image 
                src="https://placehold.co/800x300.png" 
                alt="Food delivery packaging example" 
                layout="fill"
                objectFit="cover" 
                className="rounded-md shadow-lg"
                data-ai-hint="food packaging takeaway"
            />
        </div>
      </div>
    </Container>
  );
}
