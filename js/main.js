// Portfolio data with extracted images
const portfolioData = {
    'Latilia': {
        slug: 'latilia',
        images: ['/yourusername.github.io/assets/portfolio/latilia/page-1.jpg', '/yourusername.github.io/assets/portfolio/latilia/page-2.jpg', '/yourusername.github.io/assets/portfolio/latilia/page-3.jpg', '/yourusername.github.io/assets/portfolio/latilia/page-4.jpg', '/yourusername.github.io/assets/portfolio/latilia/page-5.jpg']
    },
    '4 Tech Center': {
        slug: '4-tech-center',
        images: ['/yourusername.github.io/assets/portfolio/4-tech-center/page-1.jpg', '/yourusername.github.io/assets/portfolio/4-tech-center/page-2.jpg', '/yourusername.github.io/assets/portfolio/4-tech-center/page-3.jpg', '/yourusername.github.io/assets/portfolio/4-tech-center/page-4.jpg', '/yourusername.github.io/assets/portfolio/4-tech-center/page-5.jpg']
    },
    'Bodo Coffeehouse': {
        slug: 'bodo-coffeehouse',
        images: ['/yourusername.github.io/assets/portfolio/bodo-coffeehouse/page-1.jpg', '/yourusername.github.io/assets/portfolio/bodo-coffeehouse/page-2.jpg', '/yourusername.github.io/assets/portfolio/bodo-coffeehouse/page-3.jpg', '/yourusername.github.io/assets/portfolio/bodo-coffeehouse/page-4.jpg', '/yourusername.github.io/assets/portfolio/bodo-coffeehouse/page-5.jpg']
    },
    'LUMAC': {
        slug: 'lumac',
        images: ['/yourusername.github.io/assets/portfolio/lumac/page-1.jpg', '/yourusername.github.io/assets/portfolio/lumac/page-2.jpg', '/yourusername.github.io/assets/portfolio/lumac/page-3.jpg', '/yourusername.github.io/assets/portfolio/lumac/page-4.jpg', '/yourusername.github.io/assets/portfolio/lumac/page-5.jpg']
    },
    'Neil Spa': {
        slug: 'neil-spa',
        images: ['/yourusername.github.io/assets/portfolio/neil-spa/page-1.jpg', '/yourusername.github.io/assets/portfolio/neil-spa/page-2.jpg', '/yourusername.github.io/assets/portfolio/neil-spa/page-3.jpg', '/yourusername.github.io/assets/portfolio/neil-spa/page-4.jpg', '/yourusername.github.io/assets/portfolio/neil-spa/page-5.jpg']
    },
    'Raed Alhuthali Law Firm': {
        slug: 'raed-alhuthali-law-firm',
        images: ['/yourusername.github.io/assets/portfolio/raed-alhuthali-law-firm/page-1.jpg', '/yourusername.github.io/assets/portfolio/raed-alhuthali-law-firm/page-2.jpg', '/yourusername.github.io/assets/portfolio/raed-alhuthali-law-firm/page-3.jpg', '/yourusername.github.io/assets/portfolio/raed-alhuthali-law-firm/page-4.jpg', '/yourusername.github.io/assets/portfolio/raed-alhuthali-law-firm/page-5.jpg']
    },
    'Nook Interior Studio': {
        slug: 'nook-interior-studio',
        images: ['/yourusername.github.io/assets/portfolio/nook-interior-studio/page-1.jpg', '/yourusername.github.io/assets/portfolio/nook-interior-studio/page-2.jpg', '/yourusername.github.io/assets/portfolio/nook-interior-studio/page-3.jpg', '/yourusername.github.io/assets/portfolio/nook-interior-studio/page-4.jpg', '/yourusername.github.io/assets/portfolio/nook-interior-studio/page-5.jpg']
    }
};

// Generate portfolio grid
function generatePortfolio(lang = currentLanguage) {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    grid.innerHTML = '';

    Object.entries(portfolioData).forEach(([projectName, data]) => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';

        const projectTitle = t(`portfolio.projects.${projectName}`, lang);
        const firstImage = data.images[0] || 'assets/images/placeholder.jpg';

        item.innerHTML = `
            <div class="portfolio-image">
                <img src="${firstImage}" alt="${projectName}" loading="lazy">
                <div class="portfolio-overlay">
                    <span class="view-project" data-i18n="portfolio.view">عرض المشروع</span>
                </div>
            </div>
            <div class="portfolio-info">
                <h3>${projectName}</h3>
                <p>${projectTitle}</p>
            </div>
        `;

        // Click to view project details
        item.addEventListener('click', () => {
            showProjectDetails(projectName, data, lang);
        });

        grid.appendChild(item);
    });
}

// Show project details modal
function showProjectDetails(projectName, data, lang = currentLanguage) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';

    const closeBtn = `<button class="modal-close">&times;</button>`;
    const imagesHTML = data.images.map(img => `<img src="${img}" alt="${projectName}" loading="lazy">`).join('');

    modal.innerHTML = `
        <div class="modal-content">
            ${closeBtn}
            <h2>${projectName}</h2>
            <div class="project-gallery">
                ${imagesHTML}
            </div>
            <div class="project-actions">
                <a href="https://wa.me/905312866822?text=مرحباً، أود الاستفسار عن مشروع ${projectName}" class="cta-btn primary" target="_blank">
                    تواصل عن هذا المشروع
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'flex';

    // Close modal
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
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
