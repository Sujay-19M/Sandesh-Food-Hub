
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
  { name: 'Swiggy', logo: '/swiggy-logo.svg', link: 'https://swiggy.com/restaurants/your-restaurant-name', dataAiHint: 'swiggy logo food delivery' }, // Replace with actual link and potentially logo path
  { name: 'Zomato', logo: '/zomato-logo.svg', link: 'https://zomato.com/your-city/your-restaurant-name/order', dataAiHint: 'zomato logo food delivery' }, // Replace with actual link and potentially logo path
];

const RESTAURANT_PHONE_NUMBER = '+919332353778'; // Same as header
const RESTAURANT_PHONE_TEL_URI = `tel:${RESTAURANT_PHONE_NUMBER.replace(/\s+/g, '')}`;


export default function OrderNowPage() {
  return (
    <Container className="py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          Order Your Favorites
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Craving our delicious vegetarian meals? Get them delivered to your doorstep or pick them up at your convenience.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Direct Order Section */}
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
            <Phone className="mr-3 h-7 w-7 text-accent" />
            Order Directly
          </h2>
          <p className="text-foreground/80 mb-4">
            Call us to place your order for takeaway or to inquire about direct delivery options in your area.
          </p>
          <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3">
            <a href={RESTAURANT_PHONE_TEL_URI}>
              <Phone className="mr-2 h-5 w-5" /> Call {RESTAURANT_PHONE_NUMBER}
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Our team is ready to assist you with your order.
          </p>
           <div className="mt-8 text-center">
            <Link href="/menu" className="text-primary hover:text-accent underline font-medium flex items-center justify-center">
               <ShoppingBag className="mr-2 h-5 w-5" /> View Full Menu
            </Link>
          </div>
        </div>

        {/* Online Platforms Section */}
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
            <Globe className="mr-3 h-7 w-7 text-accent" />
            Order Online
          </h2>
          <p className="text-foreground/80 mb-6">
            Find us on your favorite food delivery platforms:
          </p>
          <div className="space-y-4">
            {onlineOrderingPlatforms.map(platform => (
              <Button 
                key={platform.name}
                asChild 
                variant="outline" 
                size="lg"
                className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary text-lg py-3 justify-start"
              >
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  {/* Placeholder for platform logo - Ideally use next/image if you have actual SVGs/PNGs */}
                  {/* For now, just text or a generic icon */}
                  {/* <Image src={platform.logo} alt={`${platform.name} logo`} width={24} height={24} className="mr-3" data-ai-hint={platform.dataAiHint} /> */}
                  <ShoppingBag className="mr-3 h-5 w-5" />
                  Order on {platform.name}
                </a>
              </Button>
            ))}
          </div>
           <p className="text-xs text-muted-foreground mt-6 text-center">
            Delivery availability and times may vary by platform and location.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-secondary/10 p-8 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-semibold text-primary mb-3">Why Order From Us?</h3>
        <p className="text-foreground/80 max-w-xl mx-auto">
          Enjoy the same fresh, high-quality vegetarian dishes you love from our restaurant, conveniently in your home or office. We ensure hygienic preparation and careful packaging for every order.
        </p>
        <Image 
            src="https://placehold.co/800x300.png" 
            alt="Food delivery packaging example" 
            width={800} 
            height={300} 
            className="rounded-md object-cover mt-6 mx-auto shadow-lg"
            data-ai-hint="food packaging takeaway"
        />
      </div>
    </Container>
  );
}
