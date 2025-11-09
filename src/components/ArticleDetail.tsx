import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { ArrowLeft, Calendar } from 'lucide-react';
import { loadArticle } from '../data/articles';
import { formatDate } from '../utils/date';
import type { Article } from '../types/article';

interface ArticleDetailProps {
  language: 'nl' | 'en';
}

const backText = {
  nl: 'Terug naar overzicht',
  en: 'Back to overview',
};

const loadingText = {
  nl: 'Artikel laden...',
  en: 'Loading article...',
};

const notFoundText = {
  nl: 'Artikel niet gevonden',
  en: 'Article not found',
};

export function ArticleDetail({ language }: ArticleDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const loadedArticle = await loadArticle(id);
        setArticle(loadedArticle);
      } catch (error) {
        console.error('Failed to load article:', error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  // Update page title when article loads
  useEffect(() => {
    if (article) {
      document.title = `${article.title} - Sytze Simonse`;
    }
    return () => {
      document.title = 'Sytze Simonse - Geodata & Journalistiek';
    };
  }, [article]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">{loadingText[language]}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-[#4a7c7e] hover:text-[#c9a875] transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {backText[language]}
            </button>
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">{notFoundText[language]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-32 pb-16">
      <article className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-[#4a7c7e] hover:text-[#c9a875] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {backText[language]}
          </button>

          {/* Article header */}
          <header className="mb-12">
            <h1 className="text-white mb-4 leading-tight">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="text-gray-400 text-xl italic mb-6">
                {article.subtitle}
              </p>
            )}
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4 text-[#4a7c7e]" />
              <time dateTime={article.date}>
                {formatDate(article.date, language)}
              </time>
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-medium text-[#4a7c7e] mt-12 mb-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-medium text-white mt-8 mb-4">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a7c7e] hover:text-[#c9a875] transition-colors duration-300 underline decoration-[#4a7c7e]/30 hover:decoration-[#c9a875]"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside ml-6 mb-6 text-gray-300 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside ml-6 mb-6 text-gray-300 space-y-2">
                    {children}
                  </ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[#4a7c7e] pl-6 italic text-gray-400 my-8">
                    {children}
                  </blockquote>
                ),
                code: ({ className, children }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-[#252525] text-[#4a7c7e] px-2 py-1 rounded text-sm">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className={`${className} bg-[#252525] text-gray-300 block p-4 rounded-lg overflow-x-auto my-6`}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Back to top button */}
          <div className="mt-16 pt-8 border-t border-[#3a3a3a]">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-[#4a7c7e] hover:text-[#c9a875] transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {backText[language]}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
