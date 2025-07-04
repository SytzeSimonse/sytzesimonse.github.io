const translations = {
    en: {
        // Meta
        title: "Sytze Simonse - GIS & Technology Specialist",
        description: "Tech specialist with a passion for making complex concepts accessible. With a background in Geo-Information Sciences and Information Sciences, I bridge technical and social worlds.",
        
        // Header
        name: "Sytze Simonse",
        intro: "Hi! I'm Sytze, a tech specialist with a passion for making complex concepts accessible.",
        tagline: "With a background in Geo-Information Sciences (GIS) and Information Sciences, I bridge technical and social worlds. I simplify complex technology into understandable language and connect different disciplines through clear communication.",
        
        // Sections
        expertise_title: "Expertise & Passions",
        languages_title: "Languages",
        
        // Skills
        skill_gis: "GIS & Geo-Data",
        skill_foss: "FOSS Tools",
        skill_education: "Technical Education",
        
        // Language levels
        dutch_native: "🇳🇱 Dutch (Native)",
        english_c2: "🇬🇧 English (C2)",
        portuguese_c1: "🇵🇹 Portuguese (C1)",
        russian_b1: "🇷🇺 Russian (B1)",
        german_b1: "🇩🇪 German (B1)",
        
        // Contact
        location: "📍 Rotterdam, Netherlands",
        
        // Business
        business_title: "About My Work",
        business_description: "As a freelancer, I operate under the company name 'CasuarIO', inspired by the legendary Australian cassowary bird. Together with <a href='https://spatiality.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Kamiel Verhelst</a>, we founded <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a>, which helps organizations implement value-aligned responsible AI solutions.",
        
        // Language switcher
        lang_en: "EN",
        lang_nl: "NL"
    },
    nl: {
        // Meta
        title: "Sytze Simonse - GIS & Technologie Specialist",
        description: "Technologie specialist met een passie voor het toegankelijk maken van complexe concepten. Met een achtergrond in Geo-Informatiewetenschappen en Informatiewetenschappen, verbind ik technische en sociale werelden.",
        
        // Header
        name: "Sytze Simonse",
        intro: "Hoi! Ik ben Sytze, een technologie specialist met een passie voor het toegankelijk maken van complexe concepten.",
        tagline: "Met een achtergrond in Geo-Informatiewetenschappen (GIS) en Informatiewetenschappen, verbind ik technische en sociale werelden. Ik vereenvoudig complexe technologie tot begrijpelijke taal en verbind verschillende disciplines door heldere communicatie.",
        
        // Sections
        expertise_title: "Expertise & Passies",
        languages_title: "Talen",
        
        // Skills
        skill_gis: "GIS & Geo-Data",
        skill_foss: "FOSS Tools",
        skill_education: "Technisch Onderwijs",
        
        // Language levels
        dutch_native: "🇳🇱 Nederlands (Moedertaal)",
        english_c2: "🇬🇧 Engels (C2)",
        portuguese_c1: "🇵🇹 Portugees (C1)",
        russian_b1: "🇷🇺 Russisch (B1)",
        german_b1: "🇩🇪 Duits (B1)",
        
        // Contact
        location: "📍 Rotterdam, Nederland",
        
        // Business
        business_title: "Over Mijn Werk",
        business_description: "Als freelancer werk ik onder de bedrijfsnaam 'CasuarIO', geïnspireerd door de legendarische Australische kasuaris vogel. Samen met <a href='https://spatiality.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Kamiel Verhelst</a> hebben we <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a> opgericht, dat organisaties helpt met waardegedreven verantwoorde AI-oplossingen.",
        
        // Language switcher
        lang_en: "EN",
        lang_nl: "NL"
    }
};

// i18n functionality
const i18n = {
    currentLanguage: 'en',
    
    init() {
        // Check for saved language preference or browser language
        const savedLanguage = localStorage.getItem('preferred-language');
        const browserLanguage = navigator.language.split('-')[0];
        
        if (savedLanguage && translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else if (translations[browserLanguage]) {
            this.currentLanguage = browserLanguage;
        }
        
        this.updateLanguage();
        this.setupLanguageSwitcher();
    },
    
    updateLanguage() {
        const currentTranslations = translations[this.currentLanguage];
        
        // Update document title and meta description
        document.title = currentTranslations.title;
        document.querySelector('meta[name="description"]').setAttribute('content', currentTranslations.description);
        document.documentElement.lang = this.currentLanguage;
        
        // Update all elements with data-i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                // Check if the translation contains HTML (links)
                if (currentTranslations[key].includes('<a')) {
                    element.innerHTML = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            }
        });
        
        // Update title attributes for accessibility
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (currentTranslations[key]) {
                element.setAttribute('title', currentTranslations[key]);
            }
        });
        
        // Save language preference
        localStorage.setItem('preferred-language', this.currentLanguage);
    },
    
    setupLanguageSwitcher() {
        const switcher = document.getElementById('language-switcher');
        if (!switcher) return;
        
        // Update active state
        switcher.querySelectorAll('button').forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === this.currentLanguage) {
                button.classList.add('active');
            }
        });
        
        // Add event listeners
        switcher.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const newLanguage = e.target.getAttribute('data-lang');
                if (newLanguage && translations[newLanguage]) {
                    this.currentLanguage = newLanguage;
                    this.updateLanguage();
                    this.setupLanguageSwitcher();
                }
            }
        });
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});