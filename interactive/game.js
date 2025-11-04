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
    { id: 1, name: 'Smartphone XYZ', price: 599, emoji: '📱', description: 'Premium smartphone met 5G, 128GB opslag en hoogwaardige camera. Perfect voor dagelijks gebruik en multitasking.' },
    { id: 2, name: 'Laptop Pro', price: 1299, emoji: '💻', description: 'Krachtige laptop met Intel Core i7 processor, 16GB RAM en 512GB SSD. Ideaal voor werk en entertainment.' },
    { id: 3, name: 'Koptelefoon', price: 149, emoji: '🎧', description: 'Draadloze noise-cancelling koptelefoon met premium geluidskwaliteit en lange batterijduur van 30 uur.' },
    { id: 4, name: 'Smartwatch', price: 299, emoji: '⌚', description: 'Fitness smartwatch met hartslagmeter, GPS tracking en waterdicht tot 50 meter. Compatibel met iOS en Android.' }
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

// Scene Manager
class SceneManager {
    constructor() {
        this.currentScene = 'scene-whatsapp';
        this.scenes = ['scene-whatsapp', 'scene-telegram', 'scene-home', 'scene-bol-login', 'scene-bol-shop',
                       'scene-product-detail', 'scene-cart', 'scene-checkout', 'scene-confirmation', 'scene-profile'];
        this.currentProduct = null;
        this.init();
    }

    init() {
        // Show initial scene
        this.showScene(this.currentScene);

        // Setup event listeners
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
                // Let download happen, then show home screen after delay
                setTimeout(() => {
                    this.showScene('scene-home');
                }, 1000);
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
    }

    showProductDetail(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        this.currentProduct = product;

        // Update product detail page
        document.getElementById('product-detail-image').textContent = product.emoji;
        document.getElementById('product-detail-name').textContent = product.name;
        document.getElementById('product-detail-price').textContent = `€ ${product.price},-`;
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
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.emoji}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">€ ${item.price},-</div>
                    </div>
                </div>
            `).join('');
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
        // Generate random order number
        const orderNumber = Math.floor(100000 + Math.random() * 900000);
        document.getElementById('order-number').textContent = orderNumber;

        // Clear cart
        cart = [];
        this.updateCartBadge();

        // Show confirmation
        this.showScene('scene-confirmation');

        console.log('✅ Bestelling geplaatst! Ordernummer:', orderNumber);
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
            // Success! Go to shop
            console.log('✅ Login successful');
            errorMessage.classList.add('hidden');
            this.showScene('scene-bol-shop');

            // Clear form
            emailInput.value = '';
            passwordInput.value = '';
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
        // Use Web Audio API for notification sound
        // Fallback to silent if not supported
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // Create a pleasant notification sound
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
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

// Initialize game on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Cybercrime Educatie Game - Volledige flow geladen');

    // Initialize managers
    const sceneManager = new SceneManager();
    const keyboardNav = new KeyboardNavigation();

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
