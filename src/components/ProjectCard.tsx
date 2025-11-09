import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
  language: 'nl' | 'en';
}

const imageMap: Record<string, string> = {
  'community hope': 'https://images.unsplash.com/photo-1559061542-7f9ef5f51b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBob3BlfGVufDF8fHx8MTc2MjY5NjgzNHww&ixlib=rb-4.1.0&q=80&w=1080',
};

const visitText = {
  nl: 'Bezoek site',
  en: 'Visit site',
};

export function ProjectCard({ title, description, image, link, tech, language }: ProjectCardProps) {
  return (
    <article className="group bg-[#252525] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4a7c7e]/20 border border-[#3a3a3a] hover:border-[#4a7c7e]">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={imageMap[image]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252525] to-transparent opacity-60"></div>
        </div>
        <div className="p-6">
          <h3 className="text-white mb-3 transition-colors duration-300 group-hover:text-[#4a7c7e]">
            {title}
          </h3>
          <p className="text-gray-500 mb-4 leading-relaxed">
            {description}
          </p>
          
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-xs bg-[#4a7c7e]/10 text-[#4a7c7e] rounded border border-[#4a7c7e]/20"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[#4a7c7e] group-hover:text-[#c9a875] transition-colors duration-300">
            <span>{visitText[language]}</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </a>
    </article>
  );
}