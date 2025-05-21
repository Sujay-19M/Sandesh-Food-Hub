import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sandesh Food Hub',
  description: 'Read the Privacy Policy of Sandesh Food Hub to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}