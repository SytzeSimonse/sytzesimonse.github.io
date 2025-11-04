const translations = {
    en: {
        // Meta
        title: "Investigative journalist in development - Sytze Simonse",
        description: "Investigative journalist in development using geodata and open-source tools to uncover hidden connections. Available for freelance geodata & AI projects.",
        
        // Accessibility
        skip_to_content: "Skip to main content",
        language_switcher_label: "Choose language",
        section_nav_heading: "Page sections",
        nav_about: "About me",
        nav_approach: "My approach",
        nav_expertise: "Expertise",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        
        // Header
        name: "Sytze Simonse",
        subtitle: "Investigative journalist in development",
        subtitle_secondary: "Using geodata and open-source tools to uncover hidden connections",
        subtitle_tertiary: "Available for freelance geodata & AI projects",
        tagline: "As a geodata specialist, I am developing into an investigative journalist. With my background in geo-information science (Wageningen University), I make complex datasets comprehensible and literally put hidden connections on the map.",
        
        // Sections
        expertise_title: "Expertise",
        portfolio_title: "Portfolio",
        projects_title: "Projects",
        writings_title: "Writings",
        languages_title: "Languages",
        
        // New 4-category expertise structure
        expertise_geo_title: "Geographic Data Solutions",
        expertise_geo_what: "Interactive maps, spatial analysis, 3D visualizations",
        expertise_geo_tech: "<a href='https://qgis.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>QGIS</a>, <a href='https://postgis.net/' target='_blank' rel='noopener noreferrer' class='tech-link'>PostGIS</a>, <a href='https://leafletjs.com/' target='_blank' rel='noopener noreferrer' class='tech-link'>Leaflet</a>, <a href='https://cesium.com/' target='_blank' rel='noopener noreferrer' class='tech-link'>Cesium</a>, <a href='https://gdal.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>GDAL</a>",
        
        expertise_ai_title: "Data Analysis & AI Implementation",
        expertise_ai_what: "Dataset analysis, predictive models, (local) AI solutions",
        expertise_ai_tech: "<a href='https://pandas.pydata.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>Pandas</a>, <a href='https://numpy.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>numpy</a>, <a href='https://scikit-learn.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>scikit-learn</a>, <a href='https://langchain.com/' target='_blank' rel='noopener noreferrer' class='tech-link'>LangChain</a>, <a href='https://ollama.ai/' target='_blank' rel='noopener noreferrer' class='tech-link'>Ollama</a>",
        
        expertise_web_title: "Web Development",
        expertise_web_what: "Front-end applications, version control, AI-assisted development",
        expertise_web_tech: "<a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>React</a>/<a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>NextJS</a>, <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>TypeScript</a>, <a href='https://www.python.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>Python</a>, <a href='https://git-scm.com/' target='_blank' rel='noopener noreferrer' class='tech-link'>Git</a>",
        
        expertise_foss_title: "FOSS Implementation & Training",
        expertise_foss_what: "Migration from commercial to open source alternatives",
        expertise_foss_how: "Workshops, training sessions and advisory services",
        
        
        // Languages
        languages_description: "Learning languages is a hobby. Besides Dutch and English, I speak Portuguese and Russian well, sufficient for business communication and collaboration.",
        
        // Language levels
        dutch_native: "🇳🇱 Dutch (Native)",
        english_c2: "🇬🇧 English (C2)",
        portuguese_c1: "🇵🇹 Portuguese (C1)",
        russian_b1: "🇷🇺 Russian (B1)",
        
        // Contact
        location: "Rotterdam, Netherlands",
        personal_email_title: "Personal Email",
        personal_email_aria: "Send personal email to Sytze Simonse",
        business_email_title: "Business Email", 
        business_email_aria: "Send business email to Sytze at CasuarIO",
        bluesky_title: "BlueSky",
        bluesky_aria: "Visit Sytze Simonse's BlueSky profile",
        
        // Company information
        company_name: "CasuarIO",
        kvk_number: "KVK: 85266256",
        btw_number: "BTW-ID: NL004072678B40",
        
        // Business
        business_title: "About me",
        business_description: "As a freelancer, I operate under the company name 'CasuarIO', inspired by the legendary Australian cassowary bird. Together with <a href='https://spatiality.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Kamiel Verhelst</a>, we founded <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a>, which helps organizations implement value-aligned responsible AI solutions.",
        
        // Personal introduction
        personal_intro_p1: "As a geodata specialist, I am developing into an investigative journalist. With my background in geo-information science (Wageningen University), I make complex datasets comprehensible and literally put hidden connections on the map.",
        personal_intro_p2: "Currently pursuing investigative journalism training at Open Eyes while leveraging my expertise in AI and open-source technology to tell impactful stories. The same principles that guide my freelance work - <span class='highlight'>open-source tools, open data, and transparent knowledge transfer</span> - now also drive my investigative journalism, ensuring stories are built on accessible, verifiable foundations.",
        personal_intro_p3: "Alongside my journalistic development, I remain available for freelance projects in geodata analysis, AI implementation, and visualization.",
        personal_intro_p4: "In addition to my independent work, I run the company <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a> together with <a href='https://spatiality.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Kamiel Verhelst</a>, where we help organizations with responsible AI implementation.",
        
        // Approach section
        approach_title: "My approach",
        approach_intro: "Whether working on freelance projects or investigative stories, I follow three core principles:",
        approach_pillar1_title: "<span class='highlight'>Open-source technology</span>:",
        approach_pillar1_desc: "I work exclusively with freely available software (FOSS). This means no expensive licenses for clients, and for journalism, it ensures investigative tools remain accessible and transparent - essential for credible reporting.",
        approach_pillar2_title: "<span class='highlight'>Open data</span>:",
        approach_pillar2_desc: "I prioritize freely available datasets from governments and open initiatives. This creates independence from expensive data suppliers and ensures journalistic investigations can be verified and built upon by others.",
        approach_pillar3_title: "<span class='highlight'>Transparent knowledge transfer</span>:",
        approach_pillar3_desc: "I ensure full understanding of methods and sources, so teams remain <span class='highlight'>independent</span> after project completion. In journalism, this transparency is crucial for accountability and allows others to verify and extend investigations.",
        
        // Portfolio
        portfolio_filter_all: "All",
        portfolio_filter_web: "Web Development",
        portfolio_filter_geodata: "Geodata Analysis",
        portfolio_filter_social: "Social Impact",
        portfolio_filter_ai: "AI Ethics",
        portfolio_filter_research: "Research",
        portfolio_filter_journalism: "Journalism",
        portfolio_view_project: "View Project",
        portfolio_view_demo: "View Demo",

        // Portfolio Projects
        project_hoopzaaiers_title: "Hoopzaaiers.nl",
        project_hoopzaaiers_desc: "Political engagement platform connecting citizens with local representatives and encouraging democratic participation through accessible tools and information.",

        project_enoki_title: "Enoki AI",
        project_enoki_desc: "Responsible AI consultancy helping organizations implement ethical AI solutions with focus on transparency, fairness, and human-centered design.",

        project_vanoord_title: "Van Oord Digital Innovation",
        project_vanoord_desc: "Digital transformation initiatives in marine engineering, including geospatial data analysis, predictive modeling, and workflow optimization.",

        // Projects
        project_aarde_title: "De Aarde aan Tafel",
        project_aarde_description: "A RAG-based chatbot for climate and sustainability queries that gives a voice to the Earth. Built with FastAPI, Langchain, and Ollama to make environmental knowledge more accessible. Developed by <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a> in collaboration with <a href='https://www.thenextwilson.ai/' target='_blank' rel='noopener noreferrer' class='inline-link'>The Next Wilson</a>.",
        project_link_demo: "View Demo",
        
        // Writings
        writings_description: "I enjoy practicing my writing by exploring ideas and concepts that interest me. Sometimes it's about technology and society, sometimes it's about completely different topics that pop into my head!",
        writings_link: "View Articles",
        writings_page_description: "My writing practice - exploring ideas and concepts through text.",
        no_articles_yet: "No articles published yet. Check back soon!",
        
        // Language switcher
        lang_en: "EN",
        lang_nl: "NL",
        
        // Carbon footprint
        carbon_title: "Website Carbon Footprint",
        carbon_explanation: "This website's carbon footprint is measured by Website Carbon. It calculates the CO₂ emissions generated each time someone visits this page, based on energy consumption from data transfer, device usage, and server hosting.",
        carbon_comparison: "This website is cleaner than",
        carbon_comparison_suffix: "of websites tested"
    },
    nl: {
        // Meta
        title: "Onderzoeksjournalist in ontwikkeling - Sytze Simonse",
        description: "Onderzoeksjournalist in ontwikkeling die geodata en open-source tools gebruikt om verborgen verbanden bloot te leggen. Beschikbaar voor freelance geodata & AI projecten.",
        
        // Accessibility
        skip_to_content: "Ga naar hoofdinhoud",
        language_switcher_label: "Kies taal",
        section_nav_heading: "Pagina secties",
        nav_about: "Over mij",
        nav_approach: "Mijn werkwijze",
        nav_expertise: "Expertise",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        
        // Header
        name: "Sytze Simonse",
        subtitle: "Onderzoeksjournalist in ontwikkeling",
        subtitle_secondary: "Met geodata en open-source tools verborgen verbanden blootleggen",
        subtitle_tertiary: "Beschikbaar voor freelance geodata & AI projecten",
        tagline: "Als geodata specialist ben ik me aan het ontwikkelen tot onderzoeksjournalist. Met mijn achtergrond in geo-informatiekunde (Wageningen University) maak ik complexe datasets begrijpelijk en zet letterlijk verborgen verbanden op de kaart.",
        
        // Sections
        expertise_title: "Expertises",
        portfolio_title: "Portfolio",
        projects_title: "Projecten",
        writings_title: "Schrijfsels",
        languages_title: "Talen",
        
        // New 4-category expertise structure
        expertise_geo_title: "Geografische data vraagstukken",
        expertise_geo_what: "Interactieve kaarten, ruimtelijke analyse, 3D-visualisaties",
        expertise_geo_tech: "<a href='https://qgis.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>QGIS</a>, <a href='https://postgis.net/' target='_blank' rel='noopener noreferrer' class='tech-link'>PostGIS</a>, <a href='https://leafletjs.com/' target='_blank' rel='noopener noreferrer' class='tech-link'>Leaflet</a>, <a href='https://cesium.com/' target='_blank' rel='noopener noreferrer' class='tech-link'>Cesium</a>, <a href='https://gdal.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>GDAL</a>",
        
        expertise_ai_title: "Data-analyse & AI-implementatie",
        expertise_ai_what: "Datasets analyseren, voorspellende modellen, (lokale) AI-oplossingen",
        expertise_ai_tech: "<a href='https://pandas.pydata.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>Pandas</a>, <a href='https://numpy.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>numpy</a>, <a href='https://scikit-learn.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>scikit-learn</a>, <a href='https://langchain.com/' target='_blank' rel='noopener noreferrer' class='tech-link'>LangChain</a>, <a href='https://ollama.ai/' target='_blank' rel='noopener noreferrer' class='tech-link'>Ollama</a>",
        
        expertise_web_title: "Web-development",
        expertise_web_what: "Front-end applicaties, versiebeheer, AI-geassisteerde development",
        expertise_web_tech: "<a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>React</a>/<a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>NextJS</a>, <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>TypeScript</a>, <a href='https://www.python.org/' target='_blank' rel='noopener noreferrer' class='tech-link'>Python</a>, <a href='https://git-scm.com/' target='_blank' rel='noopener noreferrer' class='tech-link'>Git</a>",
        
        expertise_foss_title: "FOSS-implementatie & Training",
        expertise_foss_what: "Migratie van commerciële naar open source alternatieven",
        expertise_foss_how: "Workshops, trainingen en advies",
        
        
        // Languages
        languages_description: "Talen leren is een hobby. Naast Nederlands en Engels spreek ik goed Portugees en Russisch, voldoende voor zakelijke communicatie en samenwerking.",
        
        // Language levels
        dutch_native: "🇳🇱 Nederlands (Moedertaal)",
        english_c2: "🇬🇧 Engels (C2)",
        portuguese_c1: "🇵🇹 Portugees (C1)",
        russian_b1: "🇷🇺 Russisch (B1)",
        
        // Contact
        location: "Rotterdam, Nederland",
        personal_email_title: "Persoonlijke Email",
        personal_email_aria: "Stuur persoonlijke email naar Sytze Simonse",
        business_email_title: "Zakelijke Email",
        business_email_aria: "Stuur zakelijke email naar Sytze bij CasuarIO", 
        bluesky_title: "BlueSky",
        bluesky_aria: "Bezoek Sytze Simonse's BlueSky profiel",
        
        // Company information
        company_name: "CasuarIO",
        kvk_number: "KVK: 85266256",
        btw_number: "BTW-ID: NL004072678B40",
        
        // Business
        business_title: "Over mij",
        business_description: "Als freelancer werk ik onder de bedrijfsnaam 'CasuarIO', geïnspireerd door de legendarische Australische kasuaris vogel. Samen met <a href='https://spatiality.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Kamiel Verhelst</a> hebben we <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a> opgericht, dat organisaties helpt met waardegedreven verantwoorde AI-oplossingen.",
        
        // Personal introduction
        personal_intro_p1: "Als geodata specialist ben ik me aan het ontwikkelen tot onderzoeksjournalist. Met mijn achtergrond in geo-informatiekunde (Wageningen University) maak ik complexe datasets begrijpelijk en zet letterlijk verborgen verbanden op de kaart.",
        personal_intro_p2: "Momenteel volg ik een opleiding onderzoeksjournalistiek bij Open Eyes terwijl ik mijn expertise in AI en open-source technologie inzet om impactvolle verhalen te vertellen. Dezelfde principes die mijn freelancewerk leiden - <span class='highlight'>open-source tools, open data, en transparante kennisoverdracht</span> - sturen nu ook mijn onderzoeksjournalistiek, zodat verhalen gebouwd zijn op toegankelijke, verifieerbare fundamenten.",
        personal_intro_p3: "Naast mijn journalistieke ontwikkeling blijf ik beschikbaar voor freelance projecten in geodata-analyse, AI-implementatie en visualisatie.",
        personal_intro_p4: "Naast mijn zelfstandige werk run ik samen met <a href='https://spatiality.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Kamiel Verhelst</a> het bedrijf <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a>, waarmee we organisaties helpen bij verantwoorde AI-implementatie.",
        
        // Approach section
        approach_title: "Mijn werkwijze",
        approach_intro: "Of het nu gaat om freelance projecten of onderzoeksverhalen, ik volg drie kernprincipes:",
        approach_pillar1_title: "<span class='highlight'>Open-source technologie</span>:",
        approach_pillar1_desc: "Ik werk uitsluitend met vrij beschikbare software (FOSS). Dat betekent geen dure licenties voor opdrachtgevers, en voor journalistiek zorgt het ervoor dat onderzoekstools toegankelijk en transparant blijven - essentieel voor geloofwaardige berichtgeving.",
        approach_pillar2_title: "<span class='highlight'>Open data</span>:",
        approach_pillar2_desc: "Ik prioriteer vrij beschikbare datasets van overheden en open initiatieven. Dit zorgt voor onafhankelijkheid van dure dataleveranciers en stelt anderen in staat om journalistieke onderzoeken te verifiëren en uit te breiden.",
        approach_pillar3_title: "<span class='highlight'>Transparante kennisoverdracht</span>:",
        approach_pillar3_desc: "Ik zorg voor volledig begrip van methoden en bronnen, zodat teams <span class='highlight'>onafhankelijk</span> blijven na projectafloop. In de journalistiek is deze transparantie cruciaal voor verantwoording en stelt het anderen in staat onderzoeken te verifiëren en voort te zetten.",
        
        // Portfolio
        portfolio_filter_all: "Alles",
        portfolio_filter_web: "Web Development",
        portfolio_filter_geodata: "Geodata Analyse",
        portfolio_filter_social: "Maatschappelijke Impact",
        portfolio_filter_ai: "AI Ethiek",
        portfolio_filter_research: "Onderzoek",
        portfolio_filter_journalism: "Journalistiek",
        portfolio_view_project: "Bekijk Project",
        portfolio_view_demo: "Bekijk Demo",

        // Portfolio Projects
        project_hoopzaaiers_title: "Hoopzaaiers.nl",
        project_hoopzaaiers_desc: "Platform voor politieke betrokkenheid dat burgers verbindt met lokale vertegenwoordigers en democratische participatie bevordert door toegankelijke tools en informatie.",

        project_enoki_title: "Enoki AI",
        project_enoki_desc: "Verantwoorde AI-consultancy die organisaties helpt bij het implementeren van ethische AI-oplossingen met focus op transparantie, eerlijkheid en mensgericht ontwerp.",

        project_vanoord_title: "Van Oord Digital Innovation",
        project_vanoord_desc: "Digitale transformatie-initiatieven in mariene techniek, inclusief geospatiale data-analyse, voorspellende modellering en workflow-optimalisatie.",

        // Projects
        project_aarde_title: "De Aarde aan Tafel",
        project_aarde_description: "Een RAG-gebaseerde chatbot voor klimaat- en duurzaamheidsvragen die een stem geeft aan de Aarde. Gebouwd met FastAPI, Langchain en Ollama om milieukennis toegankelijker te maken. Ontwikkeld door <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a> in samenwerking met <a href='https://www.thenextwilson.ai/' target='_blank' rel='noopener noreferrer' class='inline-link'>The Next Wilson</a>.",
        project_link_demo: "Bekijk demo",
        
        // Writings
        writings_description: "Hier oefen ik mijn schrijfvaardigheid door ideeën en concepten te verkennen die me interesseren. Soms gaat het over technologie en samenleving, soms over heel andere onderwerpen die in me opkomen!",
        writings_link: "Bekijk Artikelen",
        writings_page_description: "Ideeën en concepten verkennen door te schrijven.",
        no_articles_yet: "Nog geen artikelen gepubliceerd. Kom snel terug!",
        
        // Language switcher
        lang_en: "EN",
        lang_nl: "NL",
        
        // Carbon footprint
        carbon_title: "Website Carbon Voetafdruk",
        carbon_explanation: "De CO₂-voetafdruk van deze website wordt gemeten door Website Carbon. Het berekent de CO₂-uitstoot die wordt gegenereerd elke keer dat iemand deze pagina bezoekt, gebaseerd op energieverbruik van datatransfer, apparaatgebruik en serverhosting.",
        carbon_comparison: "Deze website is schoner dan",
        carbon_comparison_suffix: "van de geteste websites"
    }
};

// i18n functionality
const i18n = {
    currentLanguage: 'nl',
    
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
                // Check if the translation contains HTML (links or spans)
                if (currentTranslations[key].includes('<a') || currentTranslations[key].includes('<span')) {
                    element.innerHTML = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            }
        });
        
        // Update tooltips for expertise cards
        document.querySelectorAll('[data-tooltip-key]').forEach(element => {
            const tooltipKey = element.getAttribute('data-tooltip-key');
            if (currentTranslations[tooltipKey]) {
                element.setAttribute('data-tooltip', currentTranslations[tooltipKey]);
            }
        });
        
        // Update title attributes for accessibility
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (currentTranslations[key]) {
                element.setAttribute('title', currentTranslations[key]);
            }
        });
        
        // Update aria-label attributes for accessibility
        document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria-label');
            if (currentTranslations[key]) {
                element.setAttribute('aria-label', currentTranslations[key]);
            }
        });
        
        // Save language preference
        localStorage.setItem('preferred-language', this.currentLanguage);
    },
    
    setupLanguageSwitcher() {
        const switcher = document.getElementById('language-switcher');
        if (!switcher) return;
        
        // Update active state and ARIA attributes
        switcher.querySelectorAll('button').forEach(button => {
            const isActive = button.getAttribute('data-lang') === this.currentLanguage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', isActive.toString());
        });
        
        // Add event listeners
        switcher.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const newLanguage = e.target.getAttribute('data-lang');
                if (newLanguage && translations[newLanguage] && newLanguage !== this.currentLanguage) {
                    this.currentLanguage = newLanguage;
                    this.updateLanguage();
                    this.setupLanguageSwitcher();
                    this.announceLanguageChange(newLanguage);
                }
            }
        });
    },
    
    announceLanguageChange(newLanguage) {
        const liveRegion = document.getElementById('live-region');
        if (!liveRegion) return;
        
        const languageNames = {
            'en': { en: 'English', nl: 'Engels' },
            'nl': { en: 'Dutch', nl: 'Nederlands' }
        };
        
        const announcement = this.currentLanguage === 'en' 
            ? `Language changed to ${languageNames[newLanguage].en}`
            : `Taal gewijzigd naar ${languageNames[newLanguage].nl}`;
            
        // Clear first, then announce (better for screen readers)
        liveRegion.textContent = '';
        setTimeout(() => {
            liveRegion.textContent = announcement;
        }, 100);
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});