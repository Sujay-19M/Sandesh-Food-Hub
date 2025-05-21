
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sandesh Food Hub',
  description: 'Read the Privacy Policy of Sandesh Food Hub to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>
      <div className="prose prose-lg max-w-3xl mx-auto text-foreground/80">
        <p>
          Sandesh Food Hub ("us", "we", or "our") operates the [Your Website URL if applicable] website (the "Service").
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, information you provide when making a reservation, placing an order, or contacting us.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Types of Data Collected</h3>
        <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address, Cookies and Usage Data.</li>
            <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Use of Data</h2>
        <p>Sandesh Food Hub uses the collected data for various purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact" className="text-accent hover:underline">Contact Page</Link>.
        </p>
      </div>
    </Container>
  );
}
