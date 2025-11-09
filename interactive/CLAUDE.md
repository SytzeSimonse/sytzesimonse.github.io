# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an educational interactive web application titled "De Verleiding - Cybercrime Educatie" (The Temptation - Cybercrime Education). It's a scenario-based game designed to educate young people about cybercrime risks through an interactive phone simulation.

The application simulates a realistic scenario where users:
1. Receive a WhatsApp notification leading to a Telegram channel
2. Download a file containing stolen credentials (triggers legal warning)
3. Use those credentials to log into a mock Bol.com shopping site (triggers legal warning)
4. Complete a shopping flow, demonstrating how credential theft enables fraud (triggers legal warning)

**Educational Legal Warnings**: The application shows three legal warnings at critical moments, explaining Dutch criminal law (Wetboek van Strafrecht) violations:
- Article 139d lid 2 Sr: Possession of stolen data
- Articles 138ab + 231b Sr: Computer trespass & identity fraud
- Article 311 Sr: Theft with aggravating circumstances

This is part of a larger personal portfolio site (parent directory) for Sytze Simonse.

## Architecture

### Application Structure
- **Single Page Application (SPA)**: Scenes are loaded dynamically from separate HTML files
- **Scene-Based Navigation**: 10 distinct scenes representing different stages of the user journey
- **Modular File Structure**: Scenes separated into individual files for easy editing
- **Pure Vanilla Stack**: No frameworks - uses vanilla HTML, CSS, and JavaScript

### Directory Structure
```
interactive/
├── scenes/
│   ├── scene-whatsapp.html
│   ├── scene-telegram.html
│   ├── scene-home.html
│   ├── scene-bol-login.html
│   ├── scene-bol-shop.html
│   ├── scene-product-detail.html
│   ├── scene-cart.html
│   ├── scene-checkout.html
│   ├── scene-confirmation.html
│   ├── scene-profile.html
│   └── components/
│       ├── tooltip-overlay.html
│       └── legal-warning-modal.html
├── index.html (main entry point with scene loader)
├── game.js (all application logic)
├── style.css (all styles)
└── images/ (logos and graphics)
```

### Core Components

**SceneManager** ([game.js](game.js)):
- Central state manager controlling scene transitions
- Manages all navigation between scenes (WhatsApp → Telegram → Home → Bol.com flow)
- Handles e-commerce functionality (cart, checkout, order placement)
- Connected to LegalWarningManager for showing warnings

**LegalWarningManager** ([game.js:512-609](game.js#L512-L609)):
- Manages legal warning modals that appear at critical decision points
- Three warnings defined in `LEGAL_WARNINGS` object ([game.js:43-87](game.js#L43-L87))
- Callback-based system for "acknowledge" vs "cancel" actions
- Higher z-index (2000) than educational tooltips (1000)
- Orange/warning color scheme to differentiate from educational content

**Educational Tooltips**:
- Interactive tooltips explain cybercrime terminology (logs, leads, combo lists, bin lists)
- Defined in `EDUCATIONAL_TERMS` object in [game.js:24-41](game.js#L24-L41)
- Blue color scheme, user-initiated (hover/click)

**Authentication Flow**:
- Uses hardcoded credentials from "stolen" data: `karel.dejong@gmail.com` / `D3J0ngK@r`
- Credentials defined in [game.js:7-10](game.js#L7-L10)

### Key Files
- [index.html](index.html): Main entry point, loads scenes dynamically via fetch
- [game.js](game.js): SceneManager, LegalWarningManager, event handlers, state management
- [style.css](style.css): All styling including legal warning modal styles (lines 1292-1478)
- [mooncloudfree.zip](mooncloudfree.zip): Educational prop containing the "stolen" credentials
- [scenes/](scenes/): Individual scene HTML files for easy editing

## Development

### Running Locally
This is a static website. To run:
```bash
# Simple HTTP server (Python)
python3 -m http.server 8000

# Or use any static file server
npx serve .
```

Then navigate to `http://localhost:8000`

### Testing the Flow
1. Click the WhatsApp notification bubble
2. Click the file attachment to download credentials (legal warning appears)
3. Acknowledge warning → navigates to home screen
4. Click Bol.com app icon on home screen
5. Log in with: `karel.dejong@gmail.com` / `D3J0ngK@r` (legal warning appears)
6. Acknowledge warning → navigates to shop
7. Add products to cart and proceed to checkout
8. Place order (legal warning appears)
9. Acknowledge warning → order confirmation

**Note**: You must run a local web server (not `file://`) because the app uses `fetch()` to load scenes.

### Scene Flow Map
```
scene-whatsapp (1)
    ↓ (click notification)
scene-telegram (2)
    ↓ (download file)
scene-home (3)
    ↓ (click Bol.com app)
scene-bol-login (4)
    ↓ (successful login)
scene-bol-shop (5) ←→ scene-profile (10)
    ↓ (click product)         ↑
scene-product-detail (6)      |
    ↓ (add to cart)           |
scene-cart (7) ←──────────────┘
    ↓ (checkout)
scene-checkout (8)
    ↓ (place order)
scene-confirmation (9)
```

## Important Constraints

### Educational Nature
This application contains realistic-looking cybercrime content (Telegram channels selling stolen data, credential stuffing) **for educational purposes only**. The credentials are fictional and the shopping site is a simulation.

### No External Dependencies
- No build process required
- No package.json or node_modules
- All dependencies are CDN-based (fonts, FontAwesome in parent site)

### State Management
- Shopping cart stored in global `cart` array
- Current scene tracked in `SceneManager.currentScene`
- No persistence - reloading resets state

## Code Patterns

### Adding New Scenes
1. Create new HTML file in `scenes/` directory (e.g., `scenes/scene-newpage.html`)
2. Add scene wrapper: `<div class="scene" id="scene-newpage">...</div>`
3. Add scene ID to `this.scenes` array in [game.js:46-48](game.js#L46-L48)
4. Add file path to `sceneFiles` array in [index.html](index.html) scene loader
5. Create navigation event listeners in `setupEventListeners()`
6. Use `this.showScene('scene-newpage')` to navigate

### Adding Legal Warnings
Add to `LEGAL_WARNINGS` object in [game.js:43-87](game.js#L43-L87):
```javascript
warning_key: {
    title: "Waarschuwing: Title",
    content: `
        <p><strong>Artikel XXX Sr</strong></p>
        <p>Warning description</p>
        <ul>
            <li>Point 1</li>
        </ul>
        <p class="warning-emphasis">Emphasis text</p>
    `
}
```

Then trigger in code:
```javascript
this.warningManager.showWarning('warning_key', {
    acknowledge: () => {
        // User clicked "Ik begrijp"
    },
    cancel: () => {
        // User clicked "Annuleren"
    }
});
```

### Adding Educational Terms
Add to `EDUCATIONAL_TERMS` object in [game.js:24-41](game.js#L24-L41):
```javascript
termname: {
    title: "Question",
    description: "Educational explanation"
}
```

Then add tooltip trigger in HTML:
```html
<span class="tooltip-trigger" data-term="termname">highlighted text</span>
```
