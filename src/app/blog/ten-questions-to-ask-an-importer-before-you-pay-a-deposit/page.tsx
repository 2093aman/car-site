import { Metadata } from 'next';
import TenQuestionsClient from './TenQuestionsClient';

export const metadata: Metadata = {
  title: 'Ten Questions to Ask an Importer Before You Pay a Deposit | UMZE Autohaus',
  description: 'Importing means paying a large sum for a car you cannot inspect. Ten questions that reveal who you are dealing with before you commit.',
  openGraph: {
    title: 'Ten Questions to Ask an Importer Before You Pay a Deposit | UMZE Autohaus',
    description: 'Importing means paying a large sum for a car you cannot inspect. Ten questions that reveal who you are dealing with before you commit.',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/ten-questions-to-ask-an-importer-before-you-pay-a-deposit',
  },
};

export default function BlogPage() {
  return <TenQuestionsClient />;
}
