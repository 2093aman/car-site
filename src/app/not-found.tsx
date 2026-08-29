import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-carbon flex items-center justify-center text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25614F]/20 rounded-full border border-[#25614F]/40 text-4xl mb-2">
          🚗
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#EAE2D6]">
          404 - Page Not Found
        </h1>
        <p className="text-[#BDB6AD] text-base leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#25614F] text-[#EAE2D6] px-8 py-3.5 rounded-xl font-bold text-base hover:bg-[#1e4f3f] transition-all duration-300 shadow-xl"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}
