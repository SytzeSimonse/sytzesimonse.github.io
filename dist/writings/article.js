// Article rendering system
const articleRenderer = {
    currentArticle: null,

    async init() {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');
        
        if (!articleId) {
            this.showError('No article specified');
            return;
        }

        try {
            await this.loadArticle(articleId);
        } catch (error) {
            console.error('Error loading article:', error);
            this.showError('Article not found or failed to load');
        }
    },

    async loadArticle(articleId) {
        // Access articles from the global writingsManager
        if (typeof writingsManager === 'undefined') {
            throw new Error('Writings manager not loaded');
        }

        // Wait for writingsManager to load articles if not already loaded
        if (writingsManager.articles.length === 0) {
            await writingsManager.loadAllArticles();
        }

        const articles = writingsManager.articles;
        const article = articles.find(a => a.id === articleId);
        
        if (!article) {
            throw new Error(`Article ${articleId} not found`);
        }

        this.currentArticle = article;
        await this.renderArticle(article);
    },

    async renderArticle(article) {
        // Update page title and meta
        document.title = `${article.title} - Sytze Simonse`;
        document.getElementById('article-title').textContent = `${article.title} - Sytze Simonse`;
        if (article.excerpt) {
            document.getElementById('article-description').setAttribute('content', article.excerpt);
        }

        // Render article header
        this.renderHeader(article);

        // Load and render markdown content
        try {
            const markdownResponse = await fetch(article.file);
            if (!markdownResponse.ok) {
                throw new Error(`Failed to load ${article.file}`);
            }
            
            const markdownContent = await markdownResponse.text();
            this.renderContent(markdownContent);
        } catch (error) {
            this.showError(`Failed to load article content: ${error.message}`);
        }
    },

    renderHeader(article) {
        const formattedDate = this.formatDate(article.date, article.language);

        const headerHTML = `
            <h1>${article.title}</h1>
            ${article.subtitle ? `<h2 class="article-subtitle">${article.subtitle}</h2>` : ''}
            <div class="article-meta">
                ${formattedDate}
            </div>
        `;

        document.getElementById('article-header-content').innerHTML = headerHTML;
    },

    renderContent(markdownContent) {
        // Remove frontmatter before rendering
        const contentWithoutFrontmatter = markdownContent.replace(/^---\n[\s\S]*?\n---\n/, '');
        
        // Configure marked for security and features
        marked.setOptions({
            breaks: true,
            gfm: true,
            sanitize: false, // We trust our own content
            smartLists: true,
            smartypants: true
        });

        let htmlContent = marked.parse(contentWithoutFrontmatter);
        
        // Add automatic linking for citations
        htmlContent = this.addCitationLinks(htmlContent);
        
        document.getElementById('article-body').innerHTML = `<div class="article-content">${htmlContent}</div>`;
    },

    addCitationLinks(htmlContent) {
        // Replace citation numbers [1], [2], etc. with clickable links
        // Only replace if they appear in the text (not already in reference section)
        const citationRegex = /\[(\d+)\]/g;
        
        return htmlContent.replace(citationRegex, (match, number) => {
            // Don't replace if this is already inside a reference line
            const beforeMatch = htmlContent.substring(0, htmlContent.indexOf(match));
            const lastParagraph = beforeMatch.split('<p>').pop();
            
            // Skip if this appears to be in the references section
            if (lastParagraph && lastParagraph.includes('Geraadpleegd') || 
                lastParagraph && lastParagraph.includes('Retrieved')) {
                return match;
            }
            
            return `<a href="#ref-${number}" class="citation-link">[${number}]</a>`;
        });
    },

    formatDate(dateString, lang) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const locale = lang === 'nl' ? 'nl-NL' : 'en-US';
        return date.toLocaleDateString(locale, options);
    },

    showError(message) {
        document.getElementById('article-header-content').innerHTML = `
            <div class="error-message">
                <h1>Article Not Found</h1>
                <p>${message}</p>
            </div>
        `;
        document.getElementById('article-body').innerHTML = `
            <div class="error-message">
                <p><a href="index.html">← Return to Writings</a></p>
            </div>
        `;
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    articleRenderer.init();
});