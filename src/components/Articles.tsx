import { useState, useEffect } from 'react';
import { ArticleCard } from './ArticleCard';
import { loadArticlesByLanguage } from '../data/articles';
import { formatDate } from '../utils/date';
import type { Article } from '../types/article';

interface ArticlesProps {
  language: 'nl' | 'en';
}

const titleText = {
  nl: 'Artikelen',
  en: 'Articles',
};

const emptyText = {
  nl: 'Nog geen artikelen beschikbaar in het Nederlands.',
  en: 'No articles available in English yet.',
};

const loadingText = {
  nl: 'Artikelen laden...',
  en: 'Loading articles...',
};

export function Articles({ language }: ArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      console.log('Fetching articles for language:', language);
      setLoading(true);
      try {
        const loadedArticles = await loadArticlesByLanguage(language);
        console.log('Loaded articles:', loadedArticles);
        setArticles(loadedArticles);
      } catch (error) {
        console.error('Failed to load articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [language]);

  return (
    <section id="articles" className="container mx-auto px-6 py-16 lg:py-24 bg-[#1a1a1a]/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#4a7c7e] mb-12 transition-opacity duration-300">
          {titleText[language]}
        </h2>
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">{loadingText[language]}</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">{emptyText[language]}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                slug={article.slug}
                date={formatDate(article.date, language)}
                language={language}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}