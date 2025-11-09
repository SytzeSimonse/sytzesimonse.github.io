import { Linkedin, Mail, Building2 } from 'lucide-react';

interface FooterProps {
  language: 'nl' | 'en';
}

const content = {
  nl: {
    personalContact: 'Persoonlijk contact',
    businessContact: 'Zakelijk contact',
    copyright: '© 2025 Sytze Simonse. Alle rechten voorbehouden.',
  },
  en: {
    personalContact: 'Personal Contact',
    businessContact: 'Business Contact',
    copyright: '© 2025 Sytze Simonse. All rights reserved.',
  },
};

// GIS StackExchange icon as SVG component
function GISStackExchangeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 3h3v4h-3V3m0 6h3v4h-3V9m-6-6h3v4H9V3m0 6h3v4H9V9m-6-6h3v4H3V3m0 6h3v4H3V9m6 6h3v4H9v-4m-6 0h3v4H3v-4m12 0h3v4h-3v-4m-6 6h3v1H9v-1z"/>
    </svg>
  );
}

export function Footer({ language }: FooterProps) {
  const text = content[language];

  return (
    <footer className="bg-[#252525] border-t border-[#3a3a3a]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {/* Personal Contact */}
          <div>
            <h3 className="text-[#4a7c7e] mb-4">
              {text.personalContact}
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:sytze.simonse@proton.me"
                className="flex items-center gap-3 text-gray-400 hover:text-[#4a7c7e] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>sytze.simonse@proton.me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/sytze-simonse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4a7c7e]/10 hover:bg-[#4a7c7e] text-[#4a7c7e] hover:text-[#1a1a1a] transition-all duration-300 border border-[#4a7c7e]/30 hover:border-[#4a7c7e]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://gis.stackexchange.com/users/147844/sytze"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4a7c7e]/10 hover:bg-[#4a7c7e] text-[#4a7c7e] hover:text-[#1a1a1a] transition-all duration-300 border border-[#4a7c7e]/30 hover:border-[#4a7c7e]"
                aria-label="GIS StackExchange"
              >
                <GISStackExchangeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Business Contact with Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/png/casuario_logo.png"
                  alt="CasuarIO Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#4a7c7e]">
                {text.businessContact}
              </h3>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:sytze@casuario.nl"
                className="flex items-center gap-3 text-gray-400 hover:text-[#4a7c7e] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>sytze@casuario.nl</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Building2 className="w-5 h-5" />
                <span>KVK: 85266256</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-[#3a3a3a]">
          <p className="text-gray-600 text-sm transition-opacity duration-300">
            {text.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}