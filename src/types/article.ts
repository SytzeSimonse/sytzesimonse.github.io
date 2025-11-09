export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  language: 'nl' | 'en';
  excerpt: string;
  content: string;
  slug: string;
}

export interface ArticleFrontmatter {
  title: string;
  subtitle?: string;
  date: string;
  language: string;
  excerpt: string;
}
