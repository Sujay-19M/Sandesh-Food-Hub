
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Franchise Opportunities | Sandesh Food Hub',
  description: 'Explore franchise opportunities with Sandesh Food Hub and join our growing family of pure vegetarian restaurants.',
};

export default function FranchisePage() {
  return (
    <Container className="py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Franchise With Us
        </h1>
        <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70">
          Become a part of the Sandesh Food Hub success story. We are looking for passionate partners to expand our brand.
        </p>
      </header>
      <div className="max-w-2xl md:max-w-3xl mx-auto text-foreground/80 space-y-6 text-sm sm:text-base">
        <p className="md:text-lg">
          Sandesh Food Hub is a rapidly growing pure vegetarian restaurant brand known for its authentic flavors, fresh ingredients, and warm hospitality. We are excited to offer franchise opportunities to dedicated individuals and groups who share our vision for quality and customer satisfaction.
        </p>
        
        <section className="mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Why Choose Sandesh Food Hub?</h2>
          <ul className="list-disc pl-5 md:pl-6 space-y-1.5 md:space-y-2">
            <li>Proven business model with strong brand recognition.</li>
            <li>Comprehensive training and ongoing support.</li>
            <li>Access to our signature recipes and high-quality supply chain.</li>
            <li>Marketing and operational assistance.</li>
            <li>A commitment to ethical practices and community engagement.</li>
          </ul>
        </section>

        <section className="mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Ideal Franchisee Profile</h2>
          <ul className="list-disc pl-5 md:pl-6 space-y-1.5 md:space-y-2">
            <li>Passion for the food and beverage industry, especially vegetarian cuisine.</li>
            <li>Strong business acumen and operational capabilities.</li>
            <li>Financial stability and investment capacity.</li>
            <li>Commitment to maintaining brand standards and customer service excellence.</li>
            <li>Local market knowledge is a plus.</li>
          </ul>
        </section>

        <section className="mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Next Steps</h2>
          <p>
            If you are interested in learning more about franchise opportunities with Sandesh Food Hub, please fill out our inquiry form or contact our franchise development team. We look forward to hearing from you and exploring a mutually beneficial partnership.
          </p>
          <div className="mt-4 md:mt-6 text-center">
             <Link 
              href="/contact?subject=FranchiseInquiry" 
              className={cn(buttonVariants({ 
                variant: "default", 
                size: "default", 
                className: "bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3" 
              }))}
            >
              Inquire About Franchising
            </Link>
          </div>
        </section>
        <p className="text-xs md:text-sm text-muted-foreground mt-6 md:mt-8 text-center">
          The information provided on this page is for general guidance only and does not constitute a franchise offer. A franchise offering can only be made through a Franchise Disclosure Document (FDD).
        </p>
      </div>
    </Container>
  );
}
