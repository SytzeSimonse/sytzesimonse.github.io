export function formatDate(dateString: string, language: 'nl' | 'en'): string {
  const date = new Date(dateString);
  const locale = language === 'nl' ? 'nl-NL' : 'en-US';

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
