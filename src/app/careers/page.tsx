
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Careers | Sandesh Food Hub',
  description: 'Join the Sandesh Food Hub team. Explore current job openings and opportunities to grow with us.',
};

export default function CareersPage() {
  return (
    <Container className="py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Work With Us
        </h1>
        <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70">
          Be a part of a passionate team dedicated to serving delicious vegetarian food and creating memorable dining experiences.
        </p>
      </header>
      <div className="max-w-2xl md:max-w-3xl mx-auto text-foreground/80 space-y-6 text-sm sm:text-base">
        <p className="md:text-lg">
          At Sandesh Food Hub, we believe our team is our greatest asset. We are always looking for talented, enthusiastic, and customer-focused individuals to join our growing family. Whether you're an experienced professional or just starting your career in the hospitality industry, we offer a dynamic and supportive environment where you can learn, grow, and make a difference.
        </p>
        
        <section className="mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Why Join Sandesh Food Hub?</h2>
          <ul className="list-disc pl-5 md:pl-6 space-y-1.5 md:space-y-2">
            <li>Competitive salary and benefits.</li>
            <li>Opportunities for career advancement and skill development.</li>
            <li>A positive and inclusive work culture.</li>
            <li>Be part of a brand committed to quality and customer satisfaction.</li>
            <li>Training programs to enhance your culinary and service skills.</li>
          </ul>
        </section>

        <section className="mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Current Openings</h2>
          <p>
            We are often hiring for various roles, including:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 mt-1.5 md:mt-2">
            <li>Chefs (Indian, Continental, Chinese Cuisine)</li>
            <li>Kitchen Staff (Cooks, Prep Staff, Dishwashers)</li>
            <li>Servers / Waitstaff</li>
            <li>Restaurant Managers / Supervisors</li>
            <li>Hosts / Hostesses</li>
            <li>Delivery Personnel</li>
          </ul>
          <p className="mt-3 md:mt-4">
            While we may not have specific openings listed here at all times, we encourage you to submit your resume for future consideration.
          </p>
        </section>

        <section className="mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">How to Apply</h2>
          <p>
            If you are passionate about food and service and want to build a rewarding career with Sandesh Food Hub, we would love to hear from you. Please send your resume and a cover letter detailing your experience and the position you are interested in to:
          </p>
          <p className="mt-1.5 md:mt-2">
            <a href="mailto:careers@sandeshfoodhub.example.com" className="text-accent hover:underline">careers@sandeshfoodhub.example.com</a>
          </p>
          <p className="mt-1">
            Alternatively, you can visit our nearest outlet and speak to the manager.
          </p>
          <div className="mt-4 md:mt-6 text-center">
            <Link 
              href="/contact" 
              className={cn(buttonVariants({ 
                variant: "default", 
                size: "default", 
                className: "bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3" 
              }))}
            >
              Contact Us for More Info
            </Link>
          </div>
        </section>
         <p className="text-xs md:text-sm text-muted-foreground mt-6 md:mt-8 text-center">
          Sandesh Food Hub is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
        </p>
      </div>
    </Container>
  );
}
