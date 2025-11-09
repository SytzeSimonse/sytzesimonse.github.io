import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FileText } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  language: 'nl' | 'en';
}

const readText = {
  nl: 'Lees meer',
  en: 'Read',
};

export function ArticleCard({ title, excerpt, slug, date, language }: ArticleCardProps) {
  return (
    <article className="group bg-[#252525] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4a7c7e]/20 border border-[#3a3a3a] hover:border-[#4a7c7e]">
      <Link to={`/writings/${slug}`} className="block">
        {/* Header with gradient and icon instead of image */}
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-[#4a7c7e] to-[#2d4c4d]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#252525] to-transparent opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FileText className="w-16 h-16 text-white/20" />
          </div>
          {/* Date overlay */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-md border border-[#4a7c7e]/30">
            <Calendar className="w-3.5 h-3.5 text-[#4a7c7e]" />
            <span className="text-xs text-gray-300">{date}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-white mb-3 transition-colors duration-300 group-hover:text-[#4a7c7e]">
            {title}
          </h3>
          <p className="text-gray-500 mb-4 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center gap-2 text-[#4a7c7e] group-hover:text-[#c9a875] transition-colors duration-300">
            <span>{readText[language]}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}