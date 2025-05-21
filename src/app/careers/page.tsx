
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers | Sandesh Food Hub',
  description: 'Join the Sandesh Food Hub team. Explore current job openings and opportunities to grow with us.',
};

export default function CareersPage() {
  return (
    <Container className="py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          Work With Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Be a part of a passionate team dedicated to serving delicious vegetarian food and creating memorable dining experiences.
        </p>
      </header>
      <div className="max-w-3xl mx-auto text-foreground/80 space-y-6">
        <p className="text-lg">
          At Sandesh Food Hub, we believe our team is our greatest asset. We are always looking for talented, enthusiastic, and customer-focused individuals to join our growing family. Whether you're an experienced professional or just starting your career in the hospitality industry, we offer a dynamic and supportive environment where you can learn, grow, and make a difference.
        </p>
        
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Why Join Sandesh Food Hub?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Competitive salary and benefits.</li>
            <li>Opportunities for career advancement and skill development.</li>
            <li>A positive and inclusive work culture.</li>
            <li>Be part of a brand committed to quality and customer satisfaction.</li>
            <li>Training programs to enhance your culinary and service skills.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Current Openings</h2>
          <p>
            We are often hiring for various roles, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Chefs (Indian, Continental, Chinese Cuisine)</li>
            <li>Kitchen Staff (Cooks, Prep Staff, Dishwashers)</li>
            <li>Servers / Waitstaff</li>
            <li>Restaurant Managers / Supervisors</li>
            <li>Hosts / Hostesses</li>
            <li>Delivery Personnel</li>
          </ul>
          <p className="mt-4">
            While we may not have specific openings listed here at all times, we encourage you to submit your resume for future consideration.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">How to Apply</h2>
          <p>
            If you are passionate about food and service and want to build a rewarding career with Sandesh Food Hub, we would love to hear from you. Please send your resume and a cover letter detailing your experience and the position you are interested in to:
          </p>
          <p className="mt-2">
            <a href="mailto:careers@sandeshfoodhub.example.com" className="text-accent hover:underline">careers@sandeshfoodhub.example.com</a>
          </p>
          <p className="mt-1">
            Alternatively, you can visit our nearest outlet and speak to the manager.
          </p>
          <div className="mt-6 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              Contact Us for More Info
            </Link>
          </div>
        </section>
         <p className="text-sm text-muted-foreground mt-8 text-center">
          Sandesh Food Hub is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
        </p>
      </div>
    </Container>
  );
}
