interface BioProps {
  language: 'nl' | 'en';
}

const content = {
  nl: {
    paragraph1: 'Data-analist en geo-informatiekundige (MSc, WUR). Ik specialiseer mij in het analyseren van complexe (ruimtelijke) datasets en het visualiseren van verborgen verbanden.',
    paragraph2: (
      <>
        Als medeoprichter van{' '}
        <a
          href="https://enoki-ai.nl/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a7c7e] hover:text-[#c9a875] transition-colors duration-300 underline decoration-[#4a7c7e]/30 hover:decoration-[#c9a875]"
        >
          Enoki AI
        </a>
        {' '}werk ik op het snijvlak van AI, open source en digital rights. Ik ben gefascineerd door deze onderwerpen, en spreek vloeiend Nederlands, Engels, Portugees en Russisch.
      </>
    ),
    paragraph3: 'Ik sta open voor journalistieke samenwerkingen en freelance projecten.',
  },
  en: {
    paragraph1: 'Data analyst and geo-information scientist (MSc, WUR). I specialize in analyzing complex (spatial) datasets and visualizing hidden connections.',
    paragraph2: (
      <>
        As co-founder of{' '}
        <a
          href="https://enoki-ai.nl/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a7c7e] hover:text-[#c9a875] transition-colors duration-300 underline decoration-[#4a7c7e]/30 hover:decoration-[#c9a875]"
        >
          Enoki AI
        </a>
        , I work at the intersection of AI, open source and digital rights. I am fascinated by these topics, and speak fluent Dutch, English, Portuguese and Russian.
      </>
    ),
    paragraph3: 'I am open to journalistic collaborations and freelance projects.',
  },
};

export function Bio({ language }: BioProps) {
  const text = content[language];

  return (
    <section id="bio" className="container mx-auto px-6 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto space-y-5">
        <p className="text-gray-300 text-lg leading-relaxed transition-opacity duration-300">
          {text.paragraph1}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed transition-opacity duration-300">
          {text.paragraph2}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed transition-opacity duration-300">
          {text.paragraph3}
        </p>
      </div>
    </section>
  );
}