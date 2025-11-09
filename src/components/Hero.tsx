interface HeroProps {
  language: 'nl' | 'en';
}

const content = {
  nl: {
    subtitle: 'Geodata & Journalistiek',
  },
  en: {
    subtitle: 'Geodata & Journalism',
  },
};

export function Hero({ language }: HeroProps) {
  const text = content[language];

  return (
    <section className="relative container mx-auto px-6 py-20 lg:py-32 overflow-hidden">
      {/* Large background profile photo with gradient fade */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[540px] lg:w-[550px] lg:h-[660px] pointer-events-none">
        <div className="relative w-full h-full">
          <img
            src="/images/profile_photo_Sytze.jpg"
            alt="Sytze Simonse"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient overlay for smooth fade */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1a1a1a]/20 to-[#1a1a1a]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-white mb-4 transition-opacity duration-300 text-5xl lg:text-7xl tracking-tight">
          Sytze Simonse
        </h1>
        <p className="text-[#4a7c7e] text-2xl lg:text-3xl transition-opacity duration-300">
          {text.subtitle}
        </p>
      </div>
    </section>
  );
}