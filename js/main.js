// Portfolio data
// Image paths follow <base href> in index.html, so renaming the repo only needs that one tag changed.
const PORTFOLIO_BASE = new URL('assets/portfolio/', document.baseURI).pathname;
const pageImgs = (slug, count) => Array.from({ length: count }, (_, i) => `${PORTFOLIO_BASE}${slug}/page-${i + 1}.jpg`);
const coverOf = (slug) => `${PORTFOLIO_BASE}${slug}/cover.jpg`;

// categories: identity | logo | packaging | print
const portfolioData = {
    'Touch Hair & Nail Spa': { slug: 'touch-spa', categories: ['identity', 'print', 'social'], cover: coverOf('touch-spa'), images: pageImgs('touch-spa', 6) },
    'Arabo 212': { slug: 'arabo-212', categories: ['identity', 'packaging'], cover: coverOf('arabo-212'), images: pageImgs('arabo-212', 1) },
    'Latilia': { slug: 'latilia', categories: ['identity', 'logo'], images: pageImgs('latilia', 5) },
    'Icewana Pop Wana': { slug: 'icewana-popwana', categories: ['packaging'], cover: coverOf('icewana-popwana'), images: pageImgs('icewana-popwana', 1) },
    'Light Foam': { slug: 'light-foam', categories: ['identity'], cover: coverOf('light-foam'), images: pageImgs('light-foam', 10) },
    'Bodo Coffeehouse': { slug: 'bodo-coffeehouse', categories: ['identity'], images: pageImgs('bodo-coffeehouse', 5) },
    'أولد كاف': { slug: 'old-caf', categories: ['packaging', 'logo'], cover: coverOf('old-caf'), images: pageImgs('old-caf', 1) },
    'Silvora': { slug: 'silvora', categories: ['identity'], cover: coverOf('silvora'), images: pageImgs('silvora', 1) },
    'LUMAC': { slug: 'lumac', categories: ['identity'], images: pageImgs('lumac', 5) },
    'Ajmal Malqa': { slug: 'ajmal-malqa', categories: ['identity'], cover: coverOf('ajmal-malqa'), images: pageImgs('ajmal-malqa', 1) },
    'Neil Spa': { slug: 'neil-spa', categories: ['identity'], images: pageImgs('neil-spa', 5) },
    'Ammar Kaddah Studio': { slug: 'ammar-kaddah', categories: ['identity'], cover: coverOf('ammar-kaddah'), images: pageImgs('ammar-kaddah', 1) },
    '4 Tech Center': { slug: '4-tech-center', categories: ['identity'], images: pageImgs('4-tech-center', 5) },
    'Transporte GmbH': { slug: 'transporte-gmbh', categories: ['identity'], cover: coverOf('transporte-gmbh'), images: pageImgs('transporte-gmbh', 1) },
    'Raed Alhuthali Law Firm': { slug: 'raed-alhuthali-law-firm', categories: ['identity'], images: pageImgs('raed-alhuthali-law-firm', 5) },
    'مطبق الحارة': { slug: 'nook-interior-studio', categories: ['identity'], images: pageImgs('nook-interior-studio', 5) },
    'OMRA': { slug: 'omra', categories: ['logo'], cover: coverOf('omra'), images: pageImgs('omra', 1) },
    'Molto': { slug: 'molto', categories: ['packaging', 'logo'], cover: coverOf('molto'), images: pageImgs('molto', 1) },
    'المحامي نواف العصيمي': { slug: 'nawaf-alosaimi-lawyer', categories: ['identity', 'print'], cover: coverOf('nawaf-alosaimi-lawyer'), images: pageImgs('nawaf-alosaimi-lawyer', 6) },
    'HQ Motor Service': { slug: 'hq-motor-service', categories: ['social'], cover: coverOf('hq-motor-service'), images: pageImgs('hq-motor-service', 5) },
    'دوشيش': { slug: 'doushesh', categories: ['logo', 'print'], cover: coverOf('doushesh'), images: pageImgs('doushesh', 1) },
    'Firas A.M. Agha': { slug: 'firas-agha-brochure', categories: ['print'], cover: coverOf('firas-agha-brochure'), images: pageImgs('firas-agha-brochure', 1) }
};

const PORTFOLIO_FILTERS = ['all', 'identity', 'logo', 'packaging', 'print', 'social'];
let portfolioFilter = 'all';

function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Filter buttons
function renderPortfolioFilters(lang) {
    const box = document.getElementById('portfolioFilters');
    if (!box) return;
    box.innerHTML = '';
    PORTFOLIO_FILTERS.forEach(f => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'filter-btn' + (f === portfolioFilter ? ' active' : '');
        btn.textContent = t(`portfolio.filter.${f}`, lang);
        btn.addEventListener('click', () => {
            portfolioFilter = f;
            generatePortfolio(lang);
        });
        box.appendChild(btn);
    });
}

// Generate portfolio grid
function generatePortfolio(lang = currentLanguage) {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    renderPortfolioFilters(lang);
    grid.innerHTML = '';

    Object.entries(portfolioData).forEach(([projectName, data]) => {
        if (portfolioFilter !== 'all' && !data.categories.includes(portfolioFilter)) return;

        const item = document.createElement('div');
        item.className = 'portfolio-item';

        const projectTitle = t(`portfolio.projects.${projectName}`, lang);
        const cover = data.cover || data.images[0];
        const tags = data.categories.map(c => `<span class="portfolio-tag">${escapeHTML(t(`portfolio.filter.${c}`, lang))}</span>`).join('');

        item.innerHTML = `
            <div class="portfolio-image">
                <img src="${cover}" alt="${escapeHTML(projectName)}" loading="lazy">
                <div class="portfolio-overlay">
                    <span class="view-project">${escapeHTML(t('portfolio.view', lang))}</span>
                </div>
            </div>
            <div class="portfolio-info">
                <div class="portfolio-tags">${tags}</div>
                <h3>${escapeHTML(projectName)}</h3>
                <p>${escapeHTML(projectTitle)}</p>
            </div>
        `;

        item.addEventListener('click', () => showProjectDetails(projectName, data, lang));
        grid.appendChild(item);
    });
}

// Full-size image viewer
function openLightbox(src, alt) {
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = `<img src="${src}" alt="${escapeHTML(alt)}">`;
    const close = () => { box.remove(); document.removeEventListener('keydown', onKey); };
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    box.addEventListener('click', close);
    document.addEventListener('keydown', onKey);
    document.body.appendChild(box);
}

// Show project details modal
function showProjectDetails(projectName, data, lang = currentLanguage) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';

    const imagesHTML = data.images.map(img => `<img src="${img}" alt="${escapeHTML(projectName)}" loading="lazy">`).join('');
    const waText = encodeURIComponent(t('portfolio.waMessage', lang).replace('{name}', projectName));

    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" aria-label="Close">&times;</button>
            <h2>${escapeHTML(projectName)}</h2>
            <div class="project-gallery${data.images.length === 1 ? ' single' : ''}">
                ${imagesHTML}
            </div>
            <div class="project-actions">
                <a href="https://wa.me/905312866822?text=${waText}" class="cta-btn primary" target="_blank" rel="noopener">
                    ${escapeHTML(t('portfolio.contactProject', lang))}
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'flex';

    const close = () => { modal.remove(); document.removeEventListener('keydown', onKey); };
    const onKey = (e) => { if (e.key === 'Escape' && !document.querySelector('.lightbox')) close(); };
    document.addEventListener('keydown', onKey);

    modal.querySelector('.modal-close').addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    modal.querySelectorAll('.project-gallery img').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, projectName));
    });
}

// Language switcher
document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Generate initial portfolio
    generatePortfolio(currentLanguage);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// Service cards animation
document.querySelectorAll('.service-card').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animation = `slideInLeft 0.8s ease-out ${index * 0.1}s forwards`;
});

// Timeline items animation
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animation = `slideInLeft 0.8s ease-out ${index * 0.1}s forwards`;
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const phone = formData.get('phone').trim();
        const company = formData.get('company').trim();
        const service = formData.get('service').trim();
        const message = formData.get('message').trim();
        const deadline = formData.get('deadline').trim();

        // Validation
        if (!name || !email || !service || !message) {
            showNotification('الرجاء ملء جميع الحقول المطلوبة', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('الرجاء إدخال بريد إلكتروني صحيح', 'error');
            return;
        }

        // Create WhatsApp message
        const whatsappMessage = `
*طلب عرض سعر جديد من موقع Look Art*

👤 الاسم: ${name}
📧 البريد: ${email}
📱 الهاتف: ${phone || 'لم يتم إدخاله'}
🏢 الشركة: ${company || 'لم يتم إدخالها'}
💼 الخدمة: ${service}
📅 الموعد: ${deadline || 'لم يتم تحديده'}

📝 وصف المشروع:
${message}

---
تم إرسال هذا الطلب عبر نموذج الاتصال على موقع Look Art
        `.trim();

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/905312866822?text=${encodedMessage}`;

        // Show success and redirect to WhatsApp
        showNotification('يتم تحويلك إلى WhatsApp لإرسال الطلب...', 'success');

        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            contactForm.reset();
        }, 1500);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        max-width: 400px;
    `;

    if (type === 'success') {
        notification.style.background = '#06D6A0';
        notification.style.color = 'white';
    } else if (type === 'error') {
        notification.style.background = '#FF6B6B';
        notification.style.color = 'white';
    } else {
        notification.style.background = '#7138B6';
        notification.style.color = 'white';
    }

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(400px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(style);

// Scroll-triggered counter animation
function animateCounters() {
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                stats.forEach(stat => {
                    const text = stat.textContent;
                    const target = parseInt(text);
                    let current = 0;
                    const increment = target / 30;
                    const suffix = text.includes('+') ? '+' : '';

                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + suffix;
                            clearInterval(counter);
                        } else {
                            stat.textContent = Math.floor(current) + suffix;
                        }
                    }, 50);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }
}

animateCounters();

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0% ${scrolled * 0.5}px`;
    }
});

// Add hover effect to interactive elements
document.querySelectorAll('.cta-btn, .nav-link, .portfolio-item, .service-card, .feature, .timeline-item, .info-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Performance optimization - lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        imageObserver.observe(img);
    });
}

// Smooth scroll behavior
window.addEventListener('load', () => {
    document.body.style.scrollBehavior = 'smooth';
});

console.log('🎨 Look Art - Professional Design Studio Loaded Successfully!');
