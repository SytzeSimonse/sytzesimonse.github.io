// Writings management system
const writingsManager = {
    // List of markdown files - Add new files here
    markdownFiles: [
        "weg_van_water.md"
    ],
    
    // Parsed articles (populated automatically)
    articles: [],

    async init() {
        await this.loadAllArticles();
        this.displayArticles();
    },

    async loadAllArticles() {
        console.log('Loading articles from files:', this.markdownFiles);
        const promises = this.markdownFiles.map(file => this.loadArticleMetadata(file));
        const articles = await Promise.all(promises);
        this.articles = articles.filter(article => article !== null);
        console.log('Loaded articles:', this.articles);
    },

    async loadArticleMetadata(filename) {
        try {
            console.log(`Attempting to load: ${filename}`);
            const response = await fetch(filename);
            console.log(`Response for ${filename}:`, response.status, response.ok);
            
            if (!response.ok) {
                console.warn(`Failed to load ${filename} - Status: ${response.status}`);
                return null;
            }
            
            const content = await response.text();
            console.log(`Content length for ${filename}:`, content.length);
            
            const metadata = this.parseFrontmatter(content);
            console.log(`Parsed metadata for ${filename}:`, metadata);
            
            if (!metadata.title || !metadata.date) {
                console.warn(`Missing required metadata in ${filename}:`, metadata);
                return null;
            }

            const article = {
                id: filename.replace('.md', ''),
                file: filename,
                ...metadata
            };
            console.log(`Created article object:`, article);
            return article;
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            return null;
        }
    },

    parseFrontmatter(content) {
        const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
        const match = content.match(frontmatterRegex);
        
        if (!match) {
            return {};
        }

        const frontmatter = match[1];
        const metadata = {};
        
        frontmatter.split('\n').forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > -1) {
                const key = line.substring(0, colonIndex).trim();
                let value = line.substring(colonIndex + 1).trim();
                
                // Remove quotes if present
                if ((value.startsWith('"') && value.endsWith('"')) || 
                    (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                
                metadata[key] = value;
            }
        });

        return metadata;
    },

    displayArticles() {
        const container = document.getElementById('articles-container');
        const currentLang = i18n?.currentLanguage || 'en';
        
        console.log('Displaying articles. Current language:', currentLang);
        console.log('All articles:', this.articles);
        
        if (this.articles.length === 0) {
            console.log('No articles loaded');
            container.innerHTML = `<div class="no-articles">${this.getTranslation('no_articles_yet', currentLang)}</div>`;
            return;
        }

        // Filter articles by current language and sort by date (newest first)
        const filteredArticles = this.articles
            .filter(article => !article.language || article.language === currentLang)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        
        console.log('Filtered articles:', filteredArticles);
        
        if (filteredArticles.length === 0) {
            console.log('No articles match current language');
            container.innerHTML = `<div class="no-articles">${this.getTranslation('no_articles_in_language', currentLang)}</div>`;
            return;
        }
        
        container.innerHTML = filteredArticles.map(article => this.createArticleCard(article)).join('');
    },

    createArticleCard(article) {
        const formattedDate = this.formatDate(article.date, article.language);
        const currentLang = i18n?.currentLanguage || 'en';
        
        return `
            <article class="writing-card">
                <h3>${article.title}</h3>
                ${article.subtitle ? `<h4 class="article-subtitle">${article.subtitle}</h4>` : ''}
                <div class="writing-meta">
                    ${formattedDate}
                </div>
                ${article.excerpt ? `<p class="writing-excerpt">${article.excerpt}</p>` : ''}
                <a href="article.html?id=${article.id}" class="writing-link">
                    ${currentLang === 'nl' ? 'Lees Artikel' : 'Read Article'}
                </a>
            </article>
        `;
    },

    formatDate(dateString, lang) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const locale = lang === 'nl' ? 'nl-NL' : 'en-US';
        return date.toLocaleDateString(locale, options);
    },

    getTranslation(key, lang) {
        const translations = {
            no_articles_yet: {
                en: "No articles published yet. Check back soon!",
                nl: "Nog geen artikelen gepubliceerd. Kom snel terug!"
            },
            no_articles_in_language: {
                en: "No articles available in English. Switch language to see other articles.",
                nl: "Geen artikelen beschikbaar in het Nederlands. Schakel van taal om andere artikelen te zien."
            }
        };
        
        return translations[key]?.[lang] || translations[key]?.en || key;
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for i18n to initialize if it exists
    if (typeof i18n !== 'undefined') {
        // Override the i18n setupLanguageSwitcher to also reload articles
        const originalSetup = i18n.setupLanguageSwitcher;
        i18n.setupLanguageSwitcher = function() {
            originalSetup.call(this);
            writingsManager.displayArticles();
        };
    }
    
    writingsManager.init();
});