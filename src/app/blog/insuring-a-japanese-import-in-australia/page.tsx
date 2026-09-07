import { Metadata } from 'next';
import InsuranceClient from './InsuranceClient';

export const metadata: Metadata = {
  title: 'Insuring a Japanese Import in Australia | UMZE Autohaus',
  description: 'Insuring an imported Japanese car works differently. What to expect, which insurers understand imports, and why agreed value matters.',
  openGraph: {
    title: 'Insuring a Japanese Import in Australia | UMZE Autohaus',
    description: 'Insuring an imported Japanese car works differently. What to expect, which insurers understand imports, and why agreed value matters.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/insuring-a-japanese-import-in-australia',
  },
};

export default function BlogPage() {
  return <InsuranceClient />;
}
