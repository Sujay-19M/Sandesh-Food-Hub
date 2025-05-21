
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Disclaimer | Sandesh Food Hub',
  description: 'Disclaimer for Sandesh Food Hub website and services.',
};

export default function DisclaimerPage() {
  return (
    <Container className="py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          Disclaimer
        </h1>
      </header>
      <div className="prose prose-lg max-w-3xl mx-auto text-foreground/80">
        <p>
          The information provided by Sandesh Food Hub ("we," "us," or "our") on [Your Website URL if applicable] (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>
        <p>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">External Links Disclaimer</h2>
        <p>
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
        <p>
          We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Food & Allergy Disclaimer</h2>
        <p>
            Sandesh Food Hub makes every attempt to identify ingredients that may cause allergic reactions for those with food allergies. Effort is made to instruct our food production staff on the severity of food allergies. However, there is always a risk of contamination.
        </p>
        <p>
            We use products containing nuts, soy, milk, eggs, and wheat. While we take steps to minimize risk and safely handle the foods that contain potential allergens, please be advised that cross-contamination may occur, as factors beyond our reasonable control may alter the formulations of the food we serve, or manufacturers may change their formulations without our knowledge.
        </p>
        <p>
            Please inform your server of any food allergies. We will do our best to accommodate your needs.
        </p>
        <p className="mt-8">This is a sample disclaimer. Please consult with a legal professional for a disclaimer tailored to your specific business needs.</p>
      </div>
    </Container>
  );
}
