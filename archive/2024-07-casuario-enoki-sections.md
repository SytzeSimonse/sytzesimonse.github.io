# Archived Content: CasuarIO and Enoki Work Sections

**Archived on:** 2024-07-28  
**Reason:** Replaced separate company sections with unified personal introduction per user request  

## HTML Content (from index.html)

### CasuarIO Section
```html
<div class="work-subsection">
    <div class="work-header">
        <img src="assets/images/png/casuario_logo.png" alt="CasuarIO Logo" class="work-logo">
        <h3 data-i18n="casuario_title">CasuarIO</h3>
    </div>
    <p class="work-description" data-i18n="casuario_description">As a freelancer, I operate under 'CasuarIO', inspired by the legendary Australian cassowary bird. I provide specialized GIS and technology consulting services, helping organizations unlock the potential of their spatial data and implement cutting-edge geospatial solutions.</p>
</div>
```

### Enoki Section
```html
<div class="work-subsection">
    <div class="work-header">
        <img src="assets/images/svg/enoki_logo.svg" alt="Enoki Logo" class="work-logo">
        <a href="https://enoki-ai.nl/" target="_blank" rel="noopener noreferrer" class="work-title-link">
            <h3 data-i18n="enoki_title">Enoki</h3>
        </a>
    </div>
    <p class="work-description" data-i18n="enoki_description">Together with Kamiel Verhelst, we founded Enoki, which helps organizations implement value-aligned responsible AI solutions. We focus on making AI technology accessible, ethical, and aligned with organizational values.</p>
</div>
```

## Translation Strings (from assets/js/translations.js)

### English (en)
```javascript
casuario_title: "CasuarIO",
casuario_description: "Under the name CasuarIO, I work as an independent geodata specialist, helping make questions visible through (geo)data. I enjoy working at the intersection of data, technology, and social relevance – translating complex information into maps, web applications, or interactive visualizations.",
enoki_title: "Enoki", 
enoki_description: "Together with <a href='https://spatiality.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Kamiel Verhelst</a>, we founded <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a>, which helps organizations implement value-aligned responsible AI solutions. We focus on making AI technology accessible, ethical, and aligned with organizational values.",
```

### Dutch (nl)
```javascript
casuario_title: "CasuarIO",
casuario_description: "Onder de naam CasuarIO werk ik als zelfstandig geodata-specialist en help om vraagstukken inzichtelijk te maken met behulp van (geo)data. Ik werk graag op het snijvlak van data, technologie en maatschappelijke relevantie – en vertaal complexe informatie naar kaarten, webapplicaties of interactieve visualisaties.",
enoki_title: "Enoki",
enoki_description: "Samen met <a href='https://spatiality.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Kamiel Verhelst</a> hebben we <a href='https://www.enoki-ai.nl/' target='_blank' rel='noopener noreferrer' class='inline-link'>Enoki</a> opgericht, dat organisaties helpt met waardegedreven verantwoorde AI-oplossingen. We richten ons op het toegankelijk, ethisch en waardegestuurd maken van AI-technologie.",
```

## Notes
- Both sections featured company logos and structured work descriptions
- Enoki section included external links to partner and company website
- Content emphasized technical expertise and business partnerships
- Used internationalization system with dedicated translation keys