// Current language (default: Arabic)
let currentLanguage = localStorage.getItem('language') || 'ar';

// Complete translations for all languages
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
        'about.text1': 'أنا أويس الجرود، مصمم هويات بصرية وعلامات تجارية ومؤسس Look Art. بدأت رحلتي في التصميم منذ أكثر من 9 سنوات، وطورت خبرة عميقة في فهم احتياجات العلامات التجارية وترجمتها إلى تصاميم احترافية وفريدة.',
        'about.text2': 'أعتقد أن كل علامة تجارية لها قصة خاصة، وعملي يكمن في إيجاد الطريقة الصحيحة لسرد تلك القصة بصرياً. من خلال 150+ مشروع ناجح في 9 دول مختلفة، اكتسبت خبرة متنوعة في التعامل مع أنواع مختلفة من المشاريع والعملاء.',
        'about.feature1': 'تصاميم احترافية وفريدة',
        'about.feature2': 'تسليم سريع وجودة عالية',
        'about.feature3': 'تواصل احترافي وشفاف',
        'about.feature4': 'خبرة عالمية ومتنوعة',

        'portfolio.title': 'أبرز <span class="highlight">أعمالي</span>',
        'portfolio.subtitle': 'مجموعة مختارة من المشاريع التي أفتخر بها',
        'portfolio.filter.all': 'الكل',
        'portfolio.filter.identity': 'الهويات البصرية',
        'portfolio.filter.logo': 'الشعارات',
        'portfolio.filter.packaging': 'التغليف',
        'portfolio.filter.print': 'المطبوعات',
        'portfolio.filter.social': 'تصاميم السوشال ميديا',
        'portfolio.projects.المحامي نواف العصيمي': 'هوية بصرية متكاملة للمحامي نواف ضاوي العصيمي: شعار وبطاقات وقرطاسية ومحتوى رقمي',
        'portfolio.projects.HQ Motor Service': 'تصاميم سوشال ميديا للمناسبات والأعياد الأمريكية لشركة HQ Motor Service',
        'portfolio.contactProject': 'تواصل عن هذا المشروع',
        'portfolio.waMessage': 'مرحباً، أود الاستفسار عن مشروع {name}',
        'portfolio.view': 'عرض المشروع',
        'portfolio.projects.Latilia': 'تصميم شامل للهوية البصرية والشعار',
        'portfolio.projects.4 Tech Center': 'هوية بصرية حديثة وجريئة',
        'portfolio.projects.Bodo Coffeehouse': 'تصميم متكامل للمقهى الراقي',
        'portfolio.projects.LUMAC': 'نظام هوية متطور',
        'portfolio.projects.Neil Spa': 'تصميم فاخر وأنيق',
        'portfolio.projects.Raed Alhuthali Law Firm': 'هوية قانونية احترافية',
        'portfolio.projects.مطبق الحارة': 'هوية بصرية متكاملة ودليل استخدام العلامة',
        'portfolio.projects.Touch Hair & Nail Spa': 'هوية متكاملة لسبا شعر وأظافر: شعار، ألوان، سوشال ميديا، منيو وزي موحد',
        'portfolio.projects.Arabo 212': 'هوية مطعم أربو 212 مع تغليف الوجبات والأكياس والأكواب',
        'portfolio.projects.Icewana Pop Wana': 'تصميم علبة تغليف لمنتج فواكه مجمدة من ايس وانا',
        'portfolio.projects.Light Foam': 'هوية بصرية لمغسلة السيارات رغوة خفيفة',
        'portfolio.projects.أولد كاف': 'هوية وتغليف أكواب لمقهى أولد كاف',
        'portfolio.projects.Silvora': 'هوية بصرية لعلامة مجوهرات فاخرة',
        'portfolio.projects.Ajmal Malqa': 'هوية بصرية لصالون حلاقة رجالي',
        'portfolio.projects.Ammar Kaddah Studio': 'هوية بصرية لاستوديو تصميم داخلي',
        'portfolio.projects.Transporte GmbH': 'هوية بصرية لشركة نقل وشحن',
        'portfolio.projects.OMRA': 'تصميم شعار لشركة مقاولات وعقارات',
        'portfolio.projects.Molto': 'شعار وتغليف لمنتج معكرونة',
        'portfolio.projects.دوشيش': 'تصميم شعار وبطاقة أعمال',
        'portfolio.projects.Firas A.M. Agha': 'ملف تعريفي مطبوع لمهندس معماري',

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
        'form.err.required': 'الرجاء ملء جميع الحقول المطلوبة',
        'form.err.email': 'الرجاء إدخال بريد إلكتروني صحيح',
        'form.redirect': 'يتم تحويلك إلى WhatsApp لإرسال الطلب...',
        'footer.tagline': 'استوديو متخصص في الشعارات والهويات البصرية الاحترافية',
        'footer.links': 'الروابط السريعة',
        'footer.about': 'عن الاستوديو',
        'footer.portfolio': 'الأعمال',
        'footer.services': 'الخدمات',
        'footer.contact': 'التواصل',
        'footer.info': 'معلومات التواصل',
        'footer.location': '📍 إسطنبول، تركيا',
        'footer.copyright': '&copy; 2026 Look Art - جميع الحقوق محفوظة | تصميم واحترافية في كل بكسل'
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
        'about.text1': 'I\'m Awees Aljaroud, a brand identity designer and the founder of Look Art. I started my design journey over 9 years ago and have developed deep expertise in understanding brand needs and translating them into professional and unique designs.',
        'about.text2': 'I believe every brand has its own story, and my work is to find the right way to tell that story visually. Through 150+ successful projects in 9 different countries, I\'ve gained diverse experience in handling various types of projects and clients.',
        'about.feature1': 'Professional & Unique Designs',
        'about.feature2': 'Fast Delivery & High Quality',
        'about.feature3': 'Professional & Transparent Communication',
        'about.feature4': 'Global & Diverse Experience',
        'portfolio.title': 'Featured <span class="highlight">Works</span>',
        'portfolio.subtitle': 'A selection of projects I\'m proud of',
        'portfolio.filter.all': 'All',
        'portfolio.filter.identity': 'Brand Identity',
        'portfolio.filter.logo': 'Logos',
        'portfolio.filter.packaging': 'Packaging',
        'portfolio.filter.print': 'Print',
        'portfolio.filter.social': 'Social Media',
        'portfolio.view': 'View Project',
        'portfolio.contactProject': 'Enquire about this project',
        'portfolio.waMessage': 'Hello, I would like to enquire about the project {name}',
        'portfolio.projects': {
            'Latilia': 'Latilia Project - Professional Visual Identity',
            '4 Tech Center': '4 Tech Center - Modern Visual Identity',
            'Bodo Coffeehouse': 'Bodo Coffeehouse - Luxury Identity Design',
            'LUMAC': 'LUMAC Project - Comprehensive Design',
            'Neil Spa': 'Neil Spa - Luxury Visual Identity',
            'Raed Alhuthali Law Firm': 'Raed Alhuthali Law Office - Professional Identity',
            'مطبق الحارة': 'Mutabbaq Al-Hara - Complete Brand Identity',
            'Touch Hair & Nail Spa': 'Full identity for a hair & nail spa: logo, palette, social media, menu and uniforms',
            'Arabo 212': 'Restaurant identity with takeaway packaging, bags and cups',
            'Icewana Pop Wana': 'Packaging design for a frozen-fruit product by Icewana',
            'Light Foam': 'Brand identity for the Light Foam car wash',
            'المحامي نواف العصيمي': 'Complete brand identity for lawyer Nawaf Dawi Al-Osaimi: logo, cards, stationery and digital touchpoints',
            'HQ Motor Service': 'Social media designs for US holidays and occasions for HQ Motor Service',
            'أولد كاف': 'Brand identity and cup packaging for Old Caf coffee shop',
            'Silvora': 'Brand identity for a luxury jewelry brand',
            'Ajmal Malqa': 'Brand identity for a men\'s barbershop',
            'Ammar Kaddah Studio': 'Brand identity for an interior design studio',
            'Transporte GmbH': 'Brand identity for a transport & logistics company',
            'OMRA': 'Logo design for a contracting & real-estate company',
            'Molto': 'Logo and packaging for a pasta product',
            'دوشيش': 'Logo design and business card',
            'Firas A.M. Agha': 'Printed professional profile for an architect'
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
        'form.err.required': 'Please fill in all required fields',
        'form.err.email': 'Please enter a valid email address',
        'form.redirect': 'Redirecting you to WhatsApp to send your request...',
        'footer.tagline': 'A specialized studio in professional logos and visual identity design',
        'footer.links': 'Quick Links',
        'footer.about': 'About',
        'footer.portfolio': 'Works',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.info': 'Contact Information',
        'footer.location': '📍 Istanbul, Turkey',
        'footer.copyright': '&copy; 2026 Look Art - All Rights Reserved | Professional Design in Every Pixel'
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
        'about.text1': 'Ben Awees Aljaroud, marka kimliği tasarımcısı ve Look Art\'ın kurucusuyum. 9 yıldan fazla bir süre önce tasarım yolculuğuma başladım ve marka ihtiyaçlarını anlama ve bunları profesyonel ve benzersiz tasarımlara dönüştürme konusunda derin bir uzmanlık geliştirdim.',
        'about.text2': 'Her markanın kendi hikayesi olduğuna inanıyorum ve benim çalışmam bu hikayeyi görsel olarak anlatmanın doğru yolunu bulmaktır. 9 farklı ülkede 150+ başarılı proje aracılığıyla, çeşitli proje ve müşteri türleriyle uğraşma konusunda çeşitli deneyim kazandım.',
        'about.feature1': 'Profesyonel ve Benzersiz Tasarımlar',
        'about.feature2': 'Hızlı Teslimat ve Yüksek Kalite',
        'about.feature3': 'Profesyonel ve Şeffaf İletişim',
        'about.feature4': 'Küresel ve Çeşitli Deneyim',
        'portfolio.title': 'Öne Çıkan <span class="highlight">Çalışmalar</span>',
        'portfolio.subtitle': 'Gurur duyduğum projelerin seçkisi',
        'portfolio.filter.all': 'Tümü',
        'portfolio.filter.identity': 'Marka Kimliği',
        'portfolio.filter.logo': 'Logolar',
        'portfolio.filter.packaging': 'Ambalaj',
        'portfolio.filter.print': 'Baskı',
        'portfolio.filter.social': 'Sosyal Medya',
        'portfolio.view': 'Projeyi Gör',
        'portfolio.contactProject': 'Bu proje hakkında iletişime geç',
        'portfolio.waMessage': 'Merhaba, {name} projesi hakkında bilgi almak istiyorum',
        'portfolio.projects': {
            'Latilia': 'Latilia Projesi - Profesyonel Görsel Kimlik',
            '4 Tech Center': '4 Tech Center - Modern Görsel Kimlik',
            'Bodo Coffeehouse': 'Bodo Coffeehouse - Lüks Kimlik Tasarımı',
            'LUMAC': 'LUMAC Projesi - Kapsamlı Tasarım',
            'Neil Spa': 'Neil Spa - Lüks Görsel Kimlik',
            'Raed Alhuthali Law Firm': 'Raed Alhuthali Hukuk Ofisi - Profesyonel Kimlik',
            'مطبق الحارة': 'Mutabbaq Al-Hara - Komple Marka Kimliği',
            'Touch Hair & Nail Spa': 'Saç ve tırnak spa için komple kimlik: logo, renkler, sosyal medya, menü ve üniforma',
            'Arabo 212': 'Restoran kimliği ile paket servis ambalajı, çanta ve bardaklar',
            'Icewana Pop Wana': 'Icewana dondurulmuş meyve ürünü için ambalaj tasarımı',
            'Light Foam': 'Light Foam oto yıkama için marka kimliği',
            'المحامي نواف العصيمي': 'Avukat Nawaf Dawi Al-Osaimi için logo, kartvizit, kırtasiye ve dijital uygulamaları içeren kurumsal kimlik',
            'HQ Motor Service': 'HQ Motor Service için ABD resmi tatil ve özel gün sosyal medya tasarımları',
            'أولد كاف': 'Old Caf kahve dükkânı için marka kimliği ve bardak ambalajı',
            'Silvora': 'Lüks takı markası için marka kimliği',
            'Ajmal Malqa': 'Erkek berber salonu için marka kimliği',
            'Ammar Kaddah Studio': 'İç mimarlık stüdyosu için marka kimliği',
            'Transporte GmbH': 'Nakliye ve lojistik şirketi için marka kimliği',
            'OMRA': 'Müteahhitlik ve gayrimenkul şirketi için logo tasarımı',
            'Molto': 'Makarna ürünü için logo ve ambalaj',
            'دوشيش': 'Logo tasarımı ve kartvizit',
            'Firas A.M. Agha': 'Bir mimar için basılı tanıtım dosyası'
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
        'form.err.required': 'Lütfen tüm zorunlu alanları doldurun',
        'form.err.email': 'Lütfen geçerli bir e-posta adresi girin',
        'form.redirect': 'Talebinizi göndermek için WhatsApp\'a yönlendiriliyorsunuz...',
        'footer.tagline': 'Logo ve görsel kimlik tasarımında uzmanlaşmış bir stüdyo',
        'footer.links': 'Hızlı Bağlantılar',
        'footer.about': 'Hakkında',
        'footer.portfolio': 'Çalışmalar',
        'footer.services': 'Hizmetler',
        'footer.contact': 'İletişim',
        'footer.info': 'İletişim Bilgileri',
        'footer.location': '📍 İstanbul, Türkiye',
        'footer.copyright': '&copy; 2026 Look Art - Tüm Hakları Saklıdır | Her Pikselde Profesyonel Tasarım'
    }
};

// Translation function
function t(key, lang = currentLanguage) {
    const dict = translations[lang];
    if (dict[key] !== undefined) return dict[key];
    const prefix = 'portfolio.projects.';
    if (key.indexOf(prefix) === 0 && dict['portfolio.projects'] && typeof dict['portfolio.projects'] === 'object') {
        return dict['portfolio.projects'][key.slice(prefix.length)] || key;
    }
    return key;
}

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
