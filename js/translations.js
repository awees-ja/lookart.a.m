// Multi-language translations
const translations = {
    ar: {
        'nav.about': 'عن الاستوديو',
        'nav.portfolio': 'أعمالي',
        'nav.services': 'الخدمات',
        'nav.process': 'مراحل العمل',
        'nav.contact': 'تواصل معي',
        'hero.title': 'هويتك ليست مجرد شعار،<br><span class="highlight">بل الانطباع الذي يبقى</span>',
        'hero.subtitle': 'استوديو متخصص في تصميم الشعارات والهويات البصرية الاحترافية. أحول أفكارك إلى هويات قوية وجذابة تترك أثراً دائماً',
        'hero.whatsapp': 'تواصل عبر واتساب',
        'hero.request': 'اطلب عرض سعر',
        'stats.projects': 'مشروع',
        'stats.experience': 'سنوات خبرة',
        'stats.countries': 'دول',
        'about.title': 'عن <span class="highlight">Look Art</span>',
        'about.text1': 'أنا أويس الجرود، مصمم جرافيك متخصص في الشعارات والهويات البصرية. بدأت رحلتي في التصميم منذ أكثر من 9 سنوات، وطورت خبرة عميقة في فهم احتياجات العلامات التجارية وترجمتها إلى تصاميم احترافية وفريدة.',
        'about.text2': 'أعتقد أن كل علامة تجارية لها قصة خاصة، وعملي يكمن في إيجاد الطريقة الصحيحة لسرد تلك القصة بصرياً. من خلال 150+ مشروع ناجح في 9 دول مختلفة، اكتسبت خبرة متنوعة في التعامل مع أنواع مختلفة من المشاريع والعملاء.',
        'about.feature1': 'تصاميم احترافية وفريدة',
        'about.feature2': 'تسليم سريع وجودة عالية',
        'about.feature3': 'تواصل احترافي وشفاف',
        'about.feature4': 'خبرة عالمية ومتنوعة',
        'portfolio.title': 'أبرز <span class="highlight">أعمالي</span>',
        'portfolio.subtitle': 'مجموعة مختارة من المشاريع التي أفتخر بها',
        'portfolio.projects': {
            'Latilia': 'مشروع Latilia - تصميم هوية بصرية احترافية',
            '4 Tech Center': 'مركز 4 التقنية - هوية بصرية عصرية',
            'Bodo Coffeehouse': 'مقهى Bodo - تصميم هوية فاخر',
            'LUMAC': 'مشروع LUMAC - تصميم متكامل',
            'Neil Spa': 'Neil Spa - هوية بصرية فاخرة',
            'Raed Alhuthali Law Firm': 'مكتب Raed Alhuthali القانوني - هوية احترافية',
            'Nook Interior Studio': 'Nook Interior - استوديو التصميم الداخلي'
        },
        'services.title': 'الخدمات <span class="highlight">المقدمة</span>',
        'services.subtitle': 'مجموعة شاملة من خدمات التصميم الاحترافية',
        'services.s1.title': 'تصميم الشعارات',
        'services.s1.desc': 'شعارات احترافية وفريدة تعكس هوية علامتك التجارية',
        'services.s2.title': 'الهويات البصرية المتكاملة',
        'services.s2.desc': 'نظام متكامل يشمل الألوان والخطوط والعناصر البصرية',
        'services.s3.title': 'إعادة تصميم الهويات',
        'services.s3.desc': 'تحديث وتطوير الهويات البصرية القديمة',
        'services.s4.title': 'تصاميم وسائل التواصل',
        'services.s4.desc': 'محتوى بصري احترافي لمختلف منصات التواصل الاجتماعي',
        'services.s5.title': 'تصميم المطبوعات والتغليف',
        'services.s5.desc': 'تصاميم احترافية للمطبوعات والعبوات',
        'services.s6.title': 'الموشن جرافيك',
        'services.s6.desc': 'قريباً - خدمة متقدمة من الموشن جرافيك المتخصصة',
        'process.title': 'مراحل <span class="highlight">العمل</span>',
        'process.subtitle': 'عملية احترافية وشفافة من البداية للنهاية',
        'process.step1.title': 'التشاور الأولي',
        'process.step1.desc': 'نتعرف على علامتك التجارية وأهدافك واحتياجاتك',
        'process.step2.title': 'البحث والاستراتيجية',
        'process.step2.desc': 'دراسة السوق والمنافسين لتطوير استراتيجية فريدة',
        'process.step3.title': 'التصميم الإبداعي',
        'process.step3.desc': 'تطوير مفاهيم تصميمية احترافية وفريدة',
        'process.step4.title': 'المراجعة والتعديل',
        'process.step4.desc': 'تعديلات احترافية بناءً على ملاحظاتك',
        'process.step5.title': 'التسليم النهائي',
        'process.step5.desc': 'تسليم ملفات عالية الجودة بجميع الصيغ',
        'contact.title': 'ابدأ <span class="highlight">مشروعك</span> الآن',
        'contact.subtitle': 'تواصل معي للحصول على عرض سعر مخصص',
        'contact.whatsapp': 'واتساب',
        'contact.email': 'البريد الإلكتروني',
        'contact.location': 'الموقع',
        'contact.social': 'تابعني على',
        'contact.quick': 'تواصل سريع',
        'form.name': 'اسمك الكامل',
        'form.email': 'البريد الإلكتروني',
        'form.phone': 'رقم الواتساب أو الهاتف',
        'form.company': 'اسم الشركة',
        'form.service': 'نوع الخدمة',
        'form.message': 'وصف المشروع',
        'form.deadline': 'الموعد المتوقع',
        'form.submit': 'إرسال الطلب',
        'footer.tagline': 'استوديو متخصص في الشعارات والهويات البصرية الاحترافية',
        'footer.links': 'الروابط السريعة',
        'footer.about': 'عن الاستوديو',
        'footer.portfolio': 'الأعمال',
        'footer.services': 'الخدمات',
        'footer.contact': 'التواصل',
        'footer.info': 'معلومات التواصل',
        'footer.location': '📍 إسطنبول، تركيا',
        'footer.copyright': '&copy; 2024 Look Art - جميع الحقوق محفوظة | تصميم واحترافية في كل بكسل'
    },
    en: {
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.services': 'Services',
        'nav.process': 'Process',
        'nav.contact': 'Contact',
        'hero.title': 'Your Identity Is Not Just a Logo,<br><span class="highlight">It\'s The Impression That Lasts</span>',
        'hero.subtitle': 'A specialized studio in professional logo and visual identity design. I transform your ideas into strong, attractive identities that leave a lasting impression',
        'hero.whatsapp': 'Contact via WhatsApp',
        'hero.request': 'Request a Quote',
        'stats.projects': 'Projects',
        'stats.experience': 'Years Experience',
        'stats.countries': 'Countries',
        'about.title': 'About <span class="highlight">Look Art</span>',
        'about.text1': 'I\'m Awees Aljaroud, a graphic designer specializing in logos and visual identities. I started my design journey over 9 years ago and have developed deep expertise in understanding brand needs and translating them into professional and unique designs.',
        'about.text2': 'I believe every brand has its own story, and my work is to find the right way to tell that story visually. Through 150+ successful projects in 9 different countries, I\'ve gained diverse experience in handling various types of projects and clients.',
        'about.feature1': 'Professional & Unique Designs',
        'about.feature2': 'Fast Delivery & High Quality',
        'about.feature3': 'Professional & Transparent Communication',
        'about.feature4': 'Global & Diverse Experience',
        'portfolio.title': 'Featured <span class="highlight">Works</span>',
        'portfolio.subtitle': 'A selection of projects I\'m proud of',
        'portfolio.projects': {
            'Latilia': 'Latilia Project - Professional Visual Identity',
            '4 Tech Center': '4 Tech Center - Modern Visual Identity',
            'Bodo Coffeehouse': 'Bodo Coffeehouse - Luxury Identity Design',
            'LUMAC': 'LUMAC Project - Comprehensive Design',
            'Neil Spa': 'Neil Spa - Luxury Visual Identity',
            'Raed Alhuthali Law Firm': 'Raed Alhuthali Law Office - Professional Identity',
            'Nook Interior Studio': 'Nook Interior - Interior Design Studio'
        },
        'services.title': 'Services <span class="highlight">Offered</span>',
        'services.subtitle': 'Comprehensive range of professional design services',
        'services.s1.title': 'Logo Design',
        'services.s1.desc': 'Professional and unique logos that reflect your brand identity',
        'services.s2.title': 'Complete Visual Identities',
        'services.s2.desc': 'Integrated system including colors, fonts, and visual elements',
        'services.s3.title': 'Rebranding',
        'services.s3.desc': 'Update and improve existing visual identities',
        'services.s4.title': 'Social Media Designs',
        'services.s4.desc': 'Professional visual content for various social media platforms',
        'services.s5.title': 'Printing & Packaging Design',
        'services.s5.desc': 'Professional designs for prints and packaging',
        'services.s6.title': 'Motion Graphics',
        'services.s6.desc': 'Coming Soon - Advanced motion graphics services',
        'process.title': 'Work <span class="highlight">Process</span>',
        'process.subtitle': 'Professional and transparent process from start to finish',
        'process.step1.title': 'Initial Consultation',
        'process.step1.desc': 'We learn about your brand, goals, and needs',
        'process.step2.title': 'Research & Strategy',
        'process.step2.desc': 'Market and competitor analysis to develop unique strategy',
        'process.step3.title': 'Creative Design',
        'process.step3.desc': 'Develop professional and unique design concepts',
        'process.step4.title': 'Review & Refinement',
        'process.step4.desc': 'Professional edits based on your feedback',
        'process.step5.title': 'Final Delivery',
        'process.step5.desc': 'Delivery of high-quality files in all formats',
        'contact.title': 'Start Your <span class="highlight">Project</span> Now',
        'contact.subtitle': 'Contact me to get a customized quote',
        'contact.whatsapp': 'WhatsApp',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.social': 'Follow Me On',
        'contact.quick': 'Quick Chat',
        'form.name': 'Full Name',
        'form.email': 'Email Address',
        'form.phone': 'WhatsApp or Phone Number',
        'form.company': 'Company Name',
        'form.service': 'Service Type',
        'form.message': 'Project Description',
        'form.deadline': 'Expected Deadline',
        'form.submit': 'Send Request',
        'footer.tagline': 'A specialized studio in professional logos and visual identity design',
        'footer.links': 'Quick Links',
        'footer.about': 'About',
        'footer.portfolio': 'Works',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.info': 'Contact Information',
        'footer.location': '📍 Istanbul, Turkey',
        'footer.copyright': '&copy; 2024 Look Art - All Rights Reserved | Professional Design in Every Pixel'
    },
    tr: {
        'nav.about': 'Hakkında',
        'nav.portfolio': 'Portföy',
        'nav.services': 'Hizmetler',
        'nav.process': 'Süreç',
        'nav.contact': 'İletişim',
        'hero.title': 'Kimliğiniz Sadece Bir Logo Değil,<br><span class="highlight">Kalan Bir İzlenimdir</span>',
        'hero.subtitle': 'Logo ve görsel kimlik tasarımında uzmanlaşmış bir stüdyo. Fikirlerinizi kalıcı izlenim bırakan güçlü ve çekici kimliklere dönüştürüyorum',
        'hero.whatsapp': 'WhatsApp ile İletişime Geçin',
        'hero.request': 'Fiyat Teklifi İsteyin',
        'stats.projects': 'Proje',
        'stats.experience': 'Yıl Deneyim',
        'stats.countries': 'Ülke',
        'about.title': '<span class="highlight">Look Art</span> Hakkında',
        'about.text1': 'Ben Awees Aljaroud, logo ve görsel kimlik tasarımında uzmanlaşmış bir grafik tasarımcı. 9 yıldan fazla bir süre önce tasarım yolculuğuma başladım ve marka ihtiyaçlarını anlama ve bunları profesyonel ve benzersiz tasarımlara dönüştürme konusunda derin bir uzmanlık geliştirdim.',
        'about.text2': 'Her markanın kendi hikayesi olduğuna inanıyorum ve benim çalışmam bu hikayeyi görsel olarak anlatmanın doğru yolunu bulmaktır. 9 farklı ülkede 150+ başarılı proje aracılığıyla, çeşitli proje ve müşteri türleriyle uğraşma konusunda çeşitli deneyim kazandım.',
        'about.feature1': 'Profesyonel ve Benzersiz Tasarımlar',
        'about.feature2': 'Hızlı Teslimat ve Yüksek Kalite',
        'about.feature3': 'Profesyonel ve Şeffaf İletişim',
        'about.feature4': 'Küresel ve Çeşitli Deneyim',
        'portfolio.title': 'Öne Çıkan <span class="highlight">Çalışmalar</span>',
        'portfolio.subtitle': 'Gurur duyduğum projelerin seçkisi',
        'portfolio.projects': {
            'Latilia': 'Latilia Projesi - Profesyonel Görsel Kimlik',
            '4 Tech Center': '4 Tech Center - Modern Görsel Kimlik',
            'Bodo Coffeehouse': 'Bodo Coffeehouse - Lüks Kimlik Tasarımı',
            'LUMAC': 'LUMAC Projesi - Kapsamlı Tasarım',
            'Neil Spa': 'Neil Spa - Lüks Görsel Kimlik',
            'Raed Alhuthali Law Firm': 'Raed Alhuthali Hukuk Ofisi - Profesyonel Kimlik',
            'Nook Interior Studio': 'Nook Interior - İç Tasarım Stüdyosu'
        },
        'services.title': 'Sunulan <span class="highlight">Hizmetler</span>',
        'services.subtitle': 'Kapsamlı profesyonel tasarım hizmetleri',
        'services.s1.title': 'Logo Tasarımı',
        'services.s1.desc': 'Marka kimliğini yansıtan profesyonel ve benzersiz logolar',
        'services.s2.title': 'Tam Görsel Kimlikler',
        'services.s2.desc': 'Renkler, yazı tipleri ve görsel öğeleri içeren entegre sistem',
        'services.s3.title': 'Yeniden Markalaşma',
        'services.s3.desc': 'Mevcut görsel kimlikleri güncelleme ve geliştirme',
        'services.s4.title': 'Sosyal Medya Tasarımları',
        'services.s4.desc': 'Çeşitli sosyal medya platformları için profesyonel görsel içerik',
        'services.s5.title': 'Baskı ve Ambalaj Tasarımı',
        'services.s5.desc': 'Baskılar ve ambalajlar için profesyonel tasarımlar',
        'services.s6.title': 'Motion Graphics',
        'services.s6.desc': 'Yakında - Gelişmiş motion graphics hizmetleri',
        'process.title': 'Çalışma <span class="highlight">Süreci</span>',
        'process.subtitle': 'Başından sonuna kadar profesyonel ve şeffaf süreç',
        'process.step1.title': 'İlk Danışma',
        'process.step1.desc': 'Markanız, hedefleriniz ve ihtiyaçlarınız hakkında bilgi edinin',
        'process.step2.title': 'Araştırma ve Strateji',
        'process.step2.desc': 'Benzersiz strateji geliştirmek için pazar ve rakip analizi',
        'process.step3.title': 'Yaratıcı Tasarım',
        'process.step3.desc': 'Profesyonel ve benzersiz tasarım konseptleri geliştirme',
        'process.step4.title': 'İnceleme ve Geliştirme',
        'process.step4.desc': 'Geri bildiriminize dayalı profesyonel düzenlemeler',
        'process.step5.title': 'Son Teslimat',
        'process.step5.desc': 'Tüm formatlarda yüksek kaliteli dosyaların teslimatı',
        'contact.title': 'Projenizi Şimdi <span class="highlight">Başlatın</span>',
        'contact.subtitle': 'Kişiselleştirilmiş bir fiyat teklifi almak için benimle iletişime geçin',
        'contact.whatsapp': 'WhatsApp',
        'contact.email': 'E-posta',
        'contact.location': 'Konum',
        'contact.social': 'Beni Takip Edin',
        'contact.quick': 'Hızlı Sohbet',
        'form.name': 'Tam Adınız',
        'form.email': 'E-posta Adresi',
        'form.phone': 'WhatsApp veya Telefon Numarası',
        'form.company': 'Şirket Adı',
        'form.service': 'Hizmet Türü',
        'form.message': 'Proje Açıklaması',
        'form.deadline': 'Beklenen Son Tarih',
        'form.submit': 'İsteği Gönder',
        'footer.tagline': 'Logo ve görsel kimlik tasarımında uzmanlaşmış bir stüdyo',
        'footer.links': 'Hızlı Bağlantılar',
        'footer.about': 'Hakkında',
        'footer.portfolio': 'Çalışmalar',
        'footer.services': 'Hizmetler',
        'footer.contact': 'İletişim',
        'footer.info': 'İletişim Bilgileri',
        'footer.location': '📍 İstanbul, Türkiye',
        'footer.copyright': '&copy; 2024 Look Art - Tüm Hakları Saklıdır | Her Pikselde Profesyonel Tasarım'
    }
};

// Translation function
function t(key, lang = currentLanguage) {
    const keys = key.split('.');
    let value = translations[lang];

    for (let k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }

    return value || key;
}

// Current language
let currentLanguage = localStorage.getItem('language') || 'ar';

// Update language and page
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage(lang);
}

// Update page content based on language
function updatePageLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.setAttribute('data-language', lang);

    // Set RTL for Arabic, LTR for others
    if (lang === 'ar') {
        html.dir = 'rtl';
        document.body.dir = 'rtl';
    } else {
        html.dir = 'ltr';
        document.body.dir = 'ltr';
    }

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key, lang);
        element.innerHTML = translation;
    });

    // Update form placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key, lang);
    });

    // Update language switcher active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Regenerate portfolio if it exists
    if (document.getElementById('portfolioGrid')) {
        generatePortfolio(lang);
    }
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage(currentLanguage);
});
