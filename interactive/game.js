/* ===========================
   Educational Cybercrime Game
   Scenes 1-5: Complete Flow
   =========================== */

// Valid login credentials (from mooncloudfree.zip)
const VALID_CREDENTIALS = {
    email: 'karel.dejong@gmail.com',
    password: 'D3J0ngK@r'
};

// Product catalog
const PRODUCTS = [
    { id: 1, name: 'Philips 5000 Series Dual Basket Airfryer', price: 199.99, image: 'images/airfryer.jpeg', description: 'Philips Airfryer met dubbele basket technologie. Bak twee gerechten tegelijk met verschillende instellingen. 8,3L capaciteit, ideaal voor grotere gezinnen.' },
    { id: 2, name: 'Philips Stoomstrijkijzer DST7020/20', price: 51.95, image: 'images/strijkijzer.jpg', description: 'Krachtig stoomstrijkijzer met OptimalTemp technologie. Geschikt voor alle strijkbare stoffen zonder verstellen. 3000W vermogen voor snel opwarmen.' },
    { id: 3, name: 'Apple iPhone 16 - 128GB - Zwart', price: 688, image: 'images/iphone.jpg', description: 'De nieuwste iPhone 16 met A18 chip, geavanceerd camerasysteem en langere batterijduur. 128GB opslag in klassiek zwart.' },
    { id: 4, name: 'Apple MacBook Air (2025) 13', price: 984.99, image: 'images/apple.jpg', description: 'Ultradunne en lichte MacBook Air met M3 chip. 13 inch Liquid Retina display, tot 18 uur batterijduur. Perfect voor werken en studeren.' }
];

// Shopping cart state
let cart = [];

// Educational content definitions
const EDUCATIONAL_TERMS = {
    logs: {
        title: "Wat zijn 'logs'?",
        description: "Logs zijn gestolen inloggegevens (gebruikersnamen en wachtwoorden) van websites en apps. Criminelen verkopen deze in bulk aan anderen die ermee proberen in te loggen op accounts. Dit wordt 'credential stuffing' genoemd en is strafbaar."
    },
    leads: {
        title: "Wat zijn 'leads'?",
        description: "In criminele context zijn 'leads' gestolen persoonlijke gegevens zoals emailadressen, telefoonnummers en namen. Deze worden gebruikt voor phishing, identiteitsfraude of verkocht aan andere criminelen. Het bezit en handel hiervan is illegaal."
    },
    combolijst: {
        title: "Wat is een 'combolijst'?",
        description: "Een combolijst is een verzameling van email:wachtwoord combinaties die zijn verkregen via datalekken. Criminelen gebruiken deze om automatisch duizenden accounts te proberen over te nemen. Dit wordt credential stuffing genoemd en kan leiden tot identiteitsfraude."
    },
    binlist: {
        title: "Wat is een 'binlist'?",
        description: "BIN staat voor Bank Identification Number - de eerste 6 cijfers van een creditcard. Criminelen gebruiken binlists om nepkaarten te maken die specifieke banken nabootsen voor fraude. Het maken en gebruiken hiervan is een ernstig misdrijf."
    }
};

// Legal warning definitions
const LEGAL_WARNINGS = {
    download_zip: {
        title: "Educatieve Waarschuwing: Illegale Gegevens",
        content: `
            <p><em>💡 Dit is een educatieve simulatie - de gegevens zijn fictief.</em></p>
            <p><strong>Artikel 139d lid 2 Wetboek van Strafrecht</strong></p>
            <p>In de echte wereld zou het downloaden van gestolen inloggegevens strafbaar zijn volgens Nederlands recht:</p>
            <ul>
                <li><strong>Misdrijf:</strong> Bezit van gegevens waarvan je redelijkerwijs kunt vermoeden dat ze worden misbruikt</li>
                <li><strong>Strafmaat:</strong> Gevangenisstraf tot 6 jaar of geldboete (€87.000)</li>
                <li><strong>Gevolgen:</strong> Strafrechtelijk antecedent dat impact heeft op werk en reizen</li>
            </ul>
            <p class="warning-emphasis">In werkelijkheid is het downloaden en gebruiken van gestolen gegevens een ernstig misdrijf.</p>
        `
    },

    login_stolen: {
        title: "Educatieve Waarschuwing: Computervredebreuk & Identiteitsfraude",
        content: `
            <p><em>💡 Dit is een educatieve simulatie - de gegevens zijn fictief.</em></p>
            <p><strong>Artikel 138ab Sr (Computervredebreuk) + Artikel 231b Sr (Identiteitsfraude)</strong></p>
            <p>In de echte wereld zou inloggen met gestolen gegevens meerdere strafbare feiten zijn:</p>
            <ul>
                <li><strong>Computervredebreuk:</strong> Onbevoegd toegang krijgen tot een computersysteem</li>
                <li><strong>Identiteitsfraude:</strong> Gebruik maken van andermans identificerende gegevens</li>
                <li><strong>Strafmaat:</strong> Gevangenisstraf tot 6 jaar of geldboete (€87.000)</li>
            </ul>
            <p class="warning-emphasis">Slachtoffers van identiteitsfraude kunnen jaren last hebben van de gevolgen. Dit is geen spelletje.</p>
        `
    },

    place_order: {
        title: "Educatieve Waarschuwing: Diefstal & Oplichting",
        content: `
            <p><em>💡 Dit is een educatieve simulatie - de gegevens zijn fictief.</em></p>
            <p><strong>Artikel 311 Sr (Diefstal met verzwarende omstandigheden)</strong></p>
            <p>In de echte wereld zou het plaatsen van een bestelling met gestolen gegevens diefstal en oplichting zijn:</p>
            <ul>
                <li><strong>Diefstal:</strong> Wegnemen van goederen die je niet toebehoren</li>
                <li><strong>Oplichting:</strong> Gebruik van valse identiteit voor eigen gewin</li>
                <li><strong>Strafmaat:</strong> Gevangenisstraf tot 4 jaar of geldboete (€87.000)</li>
                <li><strong>Civiel:</strong> Je bent aansprakelijk voor alle schade + proceskosten</li>
            </ul>
            <p class="warning-emphasis">Slachtoffers worden geconfronteerd met onterechte rekeningen en beschadigde kredietwaardigheid. De politie neemt deze meldingen serieus.</p>
        `
    }
};

// Scene Manager
class SceneManager {
    constructor() {
        this.currentScene = 'scene-whatsapp';
        this.scenes = ['scene-whatsapp', 'scene-telegram', 'scene-home', 'scene-bol-login', 'scene-bol-shop',
                       'scene-product-detail', 'scene-cart', 'scene-checkout', 'scene-confirmation', 'scene-profile', 'scene-arrest'];
        this.currentProduct = null;
        this.warningManager = null;  // Will be set before calling init()
    }

    init() {
        // Show initial scene
        this.showScene(this.currentScene);

        // Setup event listeners (warningManager must be set before calling this)
        this.setupEventListeners();
    }

    showScene(sceneId) {
        // Hide all scenes
        this.scenes.forEach(id => {
            const scene = document.getElementById(id);
            if (scene) {
                scene.classList.remove('active');
            }
        });

        // Show target scene
        const targetScene = document.getElementById(sceneId);
        if (targetScene) {
            targetScene.classList.add('active');
            this.currentScene = sceneId;
            console.log(`📱 Navigated to: ${sceneId}`);

            // Update time when showing home screen
            if (sceneId === 'scene-home') {
                this.updateHomeScreenTime();
            }

            // Add delayed WhatsApp notification on initial load
            if (sceneId === 'scene-whatsapp') {
                this.showWhatsAppNotificationDelayed();
            }

            // Transition to arrest scene after confirmation
            if (sceneId === 'scene-confirmation') {
                setTimeout(() => {
                    this.showScene('scene-arrest');
                }, 3000); // Show arrest scene after 3 seconds
            }
        }
    }

    showWhatsAppNotificationDelayed() {
        const notification = document.getElementById('whatsapp-notification');
        if (notification) {
            // Hide notification initially
            notification.style.opacity = '0';
            notification.style.pointerEvents = 'none';

            // Show notification after 2 seconds
            setTimeout(() => {
                notification.style.opacity = '1';
                notification.style.pointerEvents = 'auto';

                // Play sound after notification appears
                setTimeout(() => {
                    this.playNotificationSound();
                }, 300);
            }, 2000);
        }
    }

    updateHomeScreenTime() {
        const statusTime = document.getElementById('status-time');
        if (statusTime) {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            statusTime.textContent = `${hours}:${minutes}`;
        }
    }

    setupEventListeners() {
        // Scene 1 → Scene 2: WhatsApp notification click
        const whatsappNotification = document.getElementById('whatsapp-notification');
        if (whatsappNotification) {
            whatsappNotification.addEventListener('click', () => {
                this.playNotificationSound();
                this.transitionToTelegram();
            });
        }

        // Scene 2 → Scene 1: Back to WhatsApp
        const backToWhatsApp = document.getElementById('back-to-whatsapp');
        if (backToWhatsApp) {
            backToWhatsApp.addEventListener('click', () => {
                this.showScene('scene-whatsapp');
            });
        }

        // Scene 2 → Scene 3: File download triggers home screen
        const fileAttachment = document.querySelector('.file-attachment');
        if (fileAttachment) {
            fileAttachment.addEventListener('click', (e) => {
                // Prevent default download temporarily
                e.preventDefault();

                // Show legal warning before allowing download
                this.warningManager.showWarning('download_zip', {
                    acknowledge: () => {
                        // User acknowledged - allow download and continue
                        const link = document.createElement('a');
                        link.href = 'mooncloudfree.zip';
                        link.download = 'mooncloudfree.zip';
                        link.click();

                        // Navigate to home screen after delay
                        setTimeout(() => {
                            this.showScene('scene-home');
                        }, 1000);
                    },
                    cancel: () => {
                        // User cancelled - stay on telegram
                        console.log('Download cancelled by user');
                    }
                });
            });
        }

        // Scene 3: App icon clicks
        const appTelegram = document.getElementById('app-telegram');
        const appMail = document.getElementById('app-mail');
        const appBol = document.getElementById('app-bol');

        if (appTelegram) {
            appTelegram.addEventListener('click', () => {
                this.showScene('scene-telegram');
            });
        }

        if (appMail) {
            appMail.addEventListener('click', () => {
                alert('Mail app - geen functionaliteit in deze demo');
            });
        }

        if (appBol) {
            appBol.addEventListener('click', () => {
                this.showScene('scene-bol-login');
            });
        }

        // Scene 4 → Scene 3: Back to home
        const backToHome = document.getElementById('back-to-home');
        if (backToHome) {
            backToHome.addEventListener('click', () => {
                this.showScene('scene-home');
            });
        }

        // Scene 4: Login form submission
        const loginForm = document.getElementById('bol-login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Tooltip triggers
        this.setupTooltips();

        // E-commerce navigation
        this.setupEcommerceNavigation();
    }

    setupEcommerceNavigation() {
        // Product cards click to detail page
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const productId = parseInt(card.dataset.productId);
                this.showProductDetail(productId);
            });
        });

        // User profile button
        const userProfileBtn = document.getElementById('user-profile-btn');
        if (userProfileBtn) {
            userProfileBtn.addEventListener('click', () => {
                this.showScene('scene-profile');
            });
        }

        // Cart button
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                this.showCart();
            });
        }

        // Back to shop from product detail
        const backToShop = document.getElementById('back-to-shop');
        if (backToShop) {
            backToShop.addEventListener('click', () => {
                this.showScene('scene-bol-shop');
            });
        }

        // Add to cart button
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                this.addToCart();
            });
        }

        // Back to shop from cart
        const backToShopFromCart = document.getElementById('back-to-shop-from-cart');
        if (backToShopFromCart) {
            backToShopFromCart.addEventListener('click', () => {
                this.showScene('scene-bol-shop');
            });
        }

        // Checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.showScene('scene-checkout');
                this.updateCheckoutTotal();
            });
        }

        // Back to cart from checkout
        const backToCart = document.getElementById('back-to-cart');
        if (backToCart) {
            backToCart.addEventListener('click', () => {
                this.showCart();
            });
        }

        // Place order button
        const placeOrderBtn = document.getElementById('place-order-btn');
        if (placeOrderBtn) {
            placeOrderBtn.addEventListener('click', () => {
                this.placeOrder();
            });
        }

        // Back to shop from confirmation
        const backToShopFinal = document.getElementById('back-to-shop-final');
        if (backToShopFinal) {
            backToShopFinal.addEventListener('click', () => {
                this.showScene('scene-bol-shop');
            });
        }

        // Back to shop from profile
        const backToShopFromProfile = document.getElementById('back-to-shop-from-profile');
        if (backToShopFromProfile) {
            backToShopFromProfile.addEventListener('click', () => {
                this.showScene('scene-bol-shop');
            });
        }

        // Restart game from arrest scene
        const restartBtn = document.getElementById('restart-game');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                // Clear cart
                cart = [];
                this.updateCartBadge();
                // Return to beginning
                this.showScene('scene-whatsapp');
            });
        }
    }

    showProductDetail(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        this.currentProduct = product;

        // Update product detail page
        const imageElement = document.getElementById('product-detail-image');
        if (product.image) {
            imageElement.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
        } else {
            imageElement.textContent = product.emoji || '';
        }
        document.getElementById('product-detail-name').textContent = product.name;
        document.getElementById('product-detail-price').textContent = `€ ${product.price.toFixed(2).replace('.', ',')}`;
        document.getElementById('product-detail-description').textContent = product.description;

        this.showScene('scene-product-detail');
    }

    addToCart() {
        if (!this.currentProduct) return;

        // Check if product already in cart
        const existingItem = cart.find(item => item.id === this.currentProduct.id);
        if (!existingItem) {
            cart.push({ ...this.currentProduct });
        }

        this.updateCartBadge();

        // Show feedback
        const btn = document.getElementById('add-to-cart-btn');
        const originalText = btn.textContent;
        btn.textContent = '✓ Toegevoegd!';
        btn.style.background = '#00a400';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 1500);

        console.log('🛒 Product toegevoegd aan winkelmandje:', this.currentProduct.name);
    }

    updateCartBadge() {
        const badge = document.getElementById('cart-badge');
        if (badge) {
            badge.textContent = cart.length;
        }
    }

    showCart() {
        const cartItemsContainer = document.getElementById('cart-items');

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="cart-empty">Je winkelmandje is leeg</div>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => {
                const imageHtml = item.image
                    ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain;">`
                    : (item.emoji || '');
                return `
                    <div class="cart-item">
                        <div class="cart-item-image">${imageHtml}</div>
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">€ ${item.price.toFixed(2).replace('.', ',')}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        this.updateCartTotal();
        this.showScene('scene-cart');
    }

    updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        const totalElement = document.getElementById('cart-total-price');
        if (totalElement) {
            totalElement.textContent = `€ ${total},-`;
        }
    }

    updateCheckoutTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        const totalElement = document.getElementById('checkout-total-price');
        if (totalElement) {
            totalElement.textContent = `€ ${total},-`;
        }
    }

    placeOrder() {
        // Show legal warning before completing order
        this.warningManager.showWarning('place_order', {
            acknowledge: () => {
                // User acknowledged - complete the order
                const orderNumber = Math.floor(100000 + Math.random() * 900000);
                document.getElementById('order-number').textContent = orderNumber;

                // Clear cart
                cart = [];
                this.updateCartBadge();

                // Show confirmation
                this.showScene('scene-confirmation');

                console.log('✅ Bestelling geplaatst! Ordernummer:', orderNumber);
            },
            cancel: () => {
                // User cancelled - return to checkout
                console.log('Order cancelled by user');
            }
        });
    }

    transitionToTelegram() {
        setTimeout(() => {
            this.showScene('scene-telegram');
        }, 200);
    }

    handleLogin() {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('login-error');

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Check credentials
        if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
            // Success! Show legal warning before shop access
            console.log('✅ Login successful');
            errorMessage.classList.add('hidden');

            // Show legal warning about identity fraud
            this.warningManager.showWarning('login_stolen', {
                acknowledge: () => {
                    // User acknowledged - proceed to shop
                    this.showScene('scene-bol-shop');

                    // Clear form
                    emailInput.value = '';
                    passwordInput.value = '';
                },
                cancel: () => {
                    // User cancelled - clear form and stay on login
                    emailInput.value = '';
                    passwordInput.value = '';
                    console.log('Login cancelled by user after credentials accepted');
                }
            });
        } else {
            // Failed login
            console.log('❌ Login failed');
            errorMessage.classList.remove('hidden');

            // Shake animation
            errorMessage.style.animation = 'none';
            setTimeout(() => {
                errorMessage.style.animation = 'shake 0.3s';
            }, 10);
        }
    }

    playNotificationSound() {
        // Play WhatsApp notification sound
        try {
            const audio = new Audio('sounds/incoming-message-online-whatsapp.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => {
                console.log('Audio playback failed (may require user interaction):', e);
            });
        } catch (e) {
            // Silent fallback
            console.log('Audio not supported, continuing silently');
        }
    }

    setupTooltips() {
        const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
        const tooltipOverlay = document.getElementById('tooltip-overlay');
        const tooltipClose = document.getElementById('tooltip-close');
        const tooltipTitle = document.getElementById('tooltip-title');
        const tooltipDescription = document.getElementById('tooltip-description');

        if (!tooltipOverlay || !tooltipClose || !tooltipTitle || !tooltipDescription) {
            return;
        }

        // Open tooltip on click or hover
        tooltipTriggers.forEach(trigger => {
            const term = trigger.dataset.term;

            // Click handler (for mobile)
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.showTooltip(term, tooltipTitle, tooltipDescription, tooltipOverlay);
            });

            // Hover handler (for desktop)
            trigger.addEventListener('mouseenter', () => {
                this.showTooltip(term, tooltipTitle, tooltipDescription, tooltipOverlay);
            });
        });

        // Close tooltip
        const closeTooltip = () => {
            tooltipOverlay.classList.add('hidden');
        };

        tooltipClose.addEventListener('click', closeTooltip);
        tooltipOverlay.addEventListener('click', (e) => {
            if (e.target === tooltipOverlay) {
                closeTooltip();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !tooltipOverlay.classList.contains('hidden')) {
                closeTooltip();
            }
        });
    }

    showTooltip(term, titleElement, descriptionElement, overlayElement) {
        const content = EDUCATIONAL_TERMS[term];
        if (!content) return;

        titleElement.textContent = content.title;
        descriptionElement.textContent = content.description;
        overlayElement.classList.remove('hidden');
    }
}

// Legal Warning Manager
class LegalWarningManager {
    constructor() {
        this.warningModal = null;
        this.pendingCallbacks = {};
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.warningModal = document.getElementById('legal-warning-modal');
        if (!this.warningModal) {
            console.warn('Legal warning modal not found');
            return;
        }
        this.setupCloseHandlers();
    }

    showWarning(warningKey, callbacks = {}) {
        const warning = LEGAL_WARNINGS[warningKey];
        if (!warning) {
            console.error(`Warning '${warningKey}' not found`);
            return;
        }

        // Store callbacks for action buttons
        this.pendingCallbacks = callbacks;

        // Update content
        const titleElement = document.getElementById('legal-warning-title');
        const contentElement = document.getElementById('legal-warning-content');

        if (titleElement && contentElement) {
            titleElement.textContent = warning.title;
            contentElement.innerHTML = warning.content;
        }

        // Show modal
        if (this.warningModal) {
            this.warningModal.classList.remove('hidden');
        }

        // Log for analytics
        console.log(`⚠️ Legal warning shown: ${warningKey}`);
    }

    acknowledgeWarning() {
        if (this.warningModal) {
            this.warningModal.classList.add('hidden');
        }
        if (this.pendingCallbacks.acknowledge) {
            this.pendingCallbacks.acknowledge();
        }
        this.pendingCallbacks = {};
    }

    cancelWarning() {
        if (this.warningModal) {
            this.warningModal.classList.add('hidden');
        }
        if (this.pendingCallbacks.cancel) {
            this.pendingCallbacks.cancel();
        }
        this.pendingCallbacks = {};
    }

    setupCloseHandlers() {
        const acknowledgeBtn = document.getElementById('legal-warning-acknowledge');
        const cancelBtn = document.getElementById('legal-warning-cancel');
        const closeBtn = document.getElementById('legal-warning-close');

        if (acknowledgeBtn) {
            acknowledgeBtn.addEventListener('click', () => {
                this.acknowledgeWarning();
            });
        }

        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                this.cancelWarning();
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.cancelWarning();
            });
        }

        // ESC key to cancel
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.warningModal && !this.warningModal.classList.contains('hidden')) {
                this.cancelWarning();
            }
        });
    }
}

// Keyboard navigation helper
class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // Tab navigation enhancement
            if (e.key === 'Tab') {
                // Ensure visible focus indicators
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }
}

// Initialize game after scenes are loaded
document.addEventListener('scenes-loaded', () => {
    console.log('🎮 Cybercrime Educatie Game - Volledige flow geladen');

    // Initialize managers
    const sceneManager = new SceneManager();
    const warningManager = new LegalWarningManager();
    const keyboardNav = new KeyboardNavigation();

    // Connect warning manager to scene manager
    sceneManager.warningManager = warningManager;

    // Now that warningManager is set, initialize the scene manager
    sceneManager.init();

    // Add keyboard nav class for CSS
    const style = document.createElement('style');
    style.textContent = `
        body.keyboard-nav *:focus {
            outline: 2px solid var(--telegram-blue);
            outline-offset: 2px;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);

    console.log('✅ Game systemen geïnitialiseerd');
    console.log('📱 Klik op de WhatsApp notificatie om te beginnen');
    console.log('🔑 Valid login: karel.dejong@gmail.com / D3J0ngK@r');
});

// Export for future expansion
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SceneManager, EDUCATIONAL_TERMS, VALID_CREDENTIALS };
}
