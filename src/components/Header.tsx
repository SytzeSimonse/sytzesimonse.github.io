import { Languages } from 'lucide-react';

interface HeaderProps {
  language: 'nl' | 'en';
  onLanguageChange: (lang: 'nl' | 'en') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#4a7c7e]/20">
      <div className="container mx-auto px-6 py-4 flex justify-end items-center">
        <button
          onClick={() => onLanguageChange(language === 'nl' ? 'en' : 'nl')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4a7c7e]/10 hover:bg-[#4a7c7e]/20 text-[#4a7c7e] transition-all duration-300 border border-[#4a7c7e]/30"
          aria-label="Toggle language"
        >
          <Languages className="w-4 h-4" />
          <span className="uppercase">{language === 'nl' ? 'EN' : 'NL'}</span>
        </button>
      </div>
    </header>
  );
}