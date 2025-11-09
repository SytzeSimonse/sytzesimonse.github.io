import matter from 'gray-matter';
import type { Article, ArticleFrontmatter } from '../types/article';

// Import markdown files as raw text
const articleFiles = {
  'de_computerkruimeldief': {
    content: null as string | null,
    path: '/writings/de_computerkruimeldief.md'
  },
  'weg_van_water': {
    content: null as string | null,
    path: '/writings/weg_van_water.md'
  }
};

// Parse article from markdown
function parseArticle(id: string, rawMarkdown: string): Article {
  const { data, content } = matter(rawMarkdown);
  const frontmatter = data as ArticleFrontmatter;

  return {
    id,
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    date: frontmatter.date,
    language: frontmatter.language as 'nl' | 'en',
    excerpt: frontmatter.excerpt,
    content: content.trim(),
    slug: id
  };
}

// Fetch and parse all articles
export async function loadArticles(): Promise<Article[]> {
  const articles: Article[] = [];

  for (const [id, file] of Object.entries(articleFiles)) {
    try {
      const response = await fetch(file.path);
      if (!response.ok) {
        console.error(`Failed to load article: ${id}`);
        continue;
      }
      const markdown = await response.text();
      const article = parseArticle(id, markdown);
      articles.push(article);
    } catch (error) {
      console.error(`Error parsing article ${id}:`, error);
    }
  }

  // Sort by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single article by ID
export async function loadArticle(id: string): Promise<Article | null> {
  const file = articleFiles[id as keyof typeof articleFiles];
  if (!file) return null;

  try {
    const response = await fetch(file.path);
    if (!response.ok) return null;
    const markdown = await response.text();
    return parseArticle(id, markdown);
  } catch (error) {
    console.error(`Error loading article ${id}:`, error);
    return null;
  }
}

// Get articles filtered by language
export async function loadArticlesByLanguage(language: 'nl' | 'en'): Promise<Article[]> {
  const allArticles = await loadArticles();
  return allArticles.filter(article => article.language === language);
}
