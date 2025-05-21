
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sandesh Food Hub',
  description: 'Read the Terms and Conditions for using the Sandesh Food Hub website and services.',
};

export default function TermsPage() {
  return (
    <Container className="py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Please read these terms and conditions carefully before using our services.
        </p>
      </header>
      <div className="prose prose-lg max-w-3xl mx-auto text-foreground/80">
        <p>Welcome to Sandesh Food Hub!</p>
        <p>
          These terms and conditions outline the rules and regulations for the use of Sandesh Food Hub's Website, located at [Your Website URL if applicable].
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use Sandesh Food Hub if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Cookies</h2>
        <p>
          We employ the use of cookies. By accessing Sandesh Food Hub, you agreed to use cookies in agreement with the Sandesh Food Hub's Privacy Policy.
          Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">License</h2>
        <p>
          Unless otherwise stated, Sandesh Food Hub and/or its licensors own the intellectual property rights for all material on Sandesh Food Hub. All intellectual property rights are reserved. You may access this from Sandesh Food Hub for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul className="list-disc pl-6 space-y-1">
            <li>Republish material from Sandesh Food Hub</li>
            <li>Sell, rent or sub-license material from Sandesh Food Hub</li>
            <li>Reproduce, duplicate or copy material from Sandesh Food Hub</li>
            <li>Redistribute content from Sandesh Food Hub</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">User Comments</h2>
        <p>
            This Agreement shall begin on the date hereof.
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Sandesh Food Hub does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Sandesh Food Hub,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Sandesh Food Hub shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
         <ul className="list-disc pl-6 space-y-1">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
        <p>
          The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
          As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
        </p>
         <p className="mt-8">Content is for placeholder purposes only. Please consult with a legal professional to draft your official Terms & Conditions.</p>
      </div>
    </Container>
  );
}
