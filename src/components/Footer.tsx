import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-2xl font-bold font-heading">Umze Autohaus</span>
            </div>
            <p className="text-neutral mb-6 leading-relaxed">
              Melbourne's trusted automotive import agency specializing in JDM vehicles from Japan, US, and UK with complete transparency.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-primary">📍</span>
                <span className="text-neutral">Melbourne, Australia</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-secondary">📞</span>
                <span className="text-neutral">+61 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">✉️</span>
                <span className="text-neutral">info@umzeautohaus.com</span>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span className="text-sm text-neutral">Licensed Import Agent</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span className="text-sm text-neutral">100+ Cars Verified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/vehicles-for-import" className="text-neutral hover:text-white transition-colors text-sm">Vehicles For Import</Link></li>
              <li><Link href="/import-process" className="text-neutral hover:text-white transition-colors text-sm">Import Process</Link></li>
              <li><Link href="/finance" className="text-neutral hover:text-white transition-colors text-sm">Finance</Link></li>
              <li><Link href="/resources" className="text-neutral hover:text-white transition-colors text-sm">Resources</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-neutral hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact-us" className="text-neutral hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/import-now" className="text-neutral hover:text-white transition-colors text-sm">Import Now</Link></li>
              <li><Link href="/view-auctions" className="text-neutral hover:text-white transition-colors text-sm">View Auctions</Link></li>
            </ul>
            
            {/* Social Links & Legal */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-3">Legal</h5>
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-neutral hover:text-white text-xs transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-neutral hover:text-white text-xs transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral text-sm">
            © 2024 Umze Autohaus. All rights reserved.
          </p>
          
          {/* Small Map Thumbnail Placeholder */}
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="w-8 h-8 bg-neutral/20 rounded border border-neutral/30 flex items-center justify-center">
              <span className="text-neutral text-xs">🗺️</span>
            </div>
            <span className="text-neutral text-xs">Melbourne, Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;