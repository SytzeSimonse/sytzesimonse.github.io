import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';
import { ArticleDetail } from './components/ArticleDetail';

function HomePage({ language }: { language: 'nl' | 'en' }) {
  return (
    <>
      <Hero language={language} />
      <Bio language={language} />
      <Articles language={language} />
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const location = useLocation();

  // Check if we're on an article page
  const isArticlePage = location.pathname.startsWith('/writings/');

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {!isArticlePage && <Header language={language} onLanguageChange={setLanguage} />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/writings/:id" element={<ArticleDetail language={language} />} />
        </Routes>
      </main>
      {!isArticlePage && <Footer language={language} />}
    </div>
  );
}