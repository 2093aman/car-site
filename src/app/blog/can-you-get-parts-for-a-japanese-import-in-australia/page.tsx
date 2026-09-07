import { Metadata } from 'next';
import PartsClient from './PartsClient';

export const metadata: Metadata = {
  title: 'Can You Get Parts for a Japanese Import in Australia? | UMZE Autohaus',
  description: 'Worried about parts and servicing for a Japanese import? What is easy to find, what is harder, and why the mechanic matters most.',
  openGraph: {
    title: 'Can You Get Parts for a Japanese Import in Australia? | UMZE Autohaus',
    description: 'Worried about parts and servicing for a Japanese import? What is easy to find, what is harder, and why the mechanic matters most.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/can-you-get-parts-for-a-japanese-import-in-australia',
  },
};

export default function BlogPage() {
  return <PartsClient />;
}
