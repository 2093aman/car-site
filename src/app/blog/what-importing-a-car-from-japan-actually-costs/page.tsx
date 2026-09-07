import { Metadata } from 'next';
import ImportCostsClient from './ImportCostsClient';

export const metadata: Metadata = {
  title: 'What Importing a Car From Japan Actually Costs | UMZE Autohaus',
  description: 'The auction price is only the beginning. Every cost of bringing a car from Japan to an Australian driveway, explained in order.',
  openGraph: {
    title: 'What Importing a Car From Japan Actually Costs | UMZE Autohaus',
    description: 'The auction price is only the beginning. Every cost of bringing a car from Japan to an Australian driveway, explained in order.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/what-importing-a-car-from-japan-actually-costs',
  },
};

export default function BlogPage() {
  return <ImportCostsClient />;
}
