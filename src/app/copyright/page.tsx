
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Copyright Information | Sandesh Food Hub',
  description: 'Copyright information for Sandesh Food Hub website content and materials.',
};

export default function CopyrightPage() {
  const currentYear = new Date().getFullYear();
  return (
    <Container className="py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Copyright Information
        </h1>
      </header>
      <div className="prose prose-sm sm:prose-base md:prose-lg max-w-2xl md:max-w-3xl mx-auto text-foreground/80">
        <p>
          All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Sandesh Food Hub or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.
        </p>
        <p>
          Sandesh Food Hub grants you a limited license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of Sandesh Food Hub.
        </p>
        <p>
          This license does not include any resale or commercial use of this site or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of this site or its contents; any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools.
        </p>
        <p>
          This site or any portion of this site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of Sandesh Food Hub.
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-primary mt-6 md:mt-8 mb-3 md:mb-4">Trademarks</h2>
        <p>
          The trademarks, logos, and service marks (collectively the "Trademarks") displayed on the Site are registered and unregistered Trademarks of Sandesh Food Hub and others. Nothing contained on the Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Trademark displayed on the Site without the written permission of Sandesh Food Hub or such third party that may own the Trademark.
        </p>
        <p className="mt-4 md:mt-6">
          Copyright &copy; {currentYear} Sandesh Food Hub. All Rights Reserved.
        </p>
        <p className="mt-6 md:mt-8 text-xs sm:text-sm">This is sample copyright information. Please consult with a legal professional to ensure it meets your specific requirements.</p>
      </div>
    </Container>
  );
}
