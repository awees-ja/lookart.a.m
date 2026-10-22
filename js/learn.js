// "Learn with Look Art" — Claude tutorial series
(function () {
    const BASE = new URL('assets/learn/', document.baseURI).pathname;
    const EP = [
        { ar: ['ضيف سكيل لـ Claude', 'حوّل خبرتك لموظف بيشتغل بنفس الطريقة كل مرة'], en: ['Add a Skill to Claude', 'Turn your know-how into an assistant that works the same way every time'], tr: ['Claude\'a Skill ekle', 'Bilgini her seferinde aynı şekilde çalışan bir asistana dönüştür'] },
        { ar: ['خلّي Claude يشتغل على موعد', 'مهام متكررة بتشتغل لحالها بالوقت اللي بتحدده'], en: ['Schedule Claude tasks', 'Recurring tasks that run on their own, on your schedule'], tr: ['Claude görevlerini zamanla', 'Belirlediğin saatte kendiliğinden çalışan görevler'] },
        { ar: ['رتّب شغلك بـ Projects', 'كل عميل بمشروع لحاله، بتعليماته وملفاته'], en: ['Organise work with Projects', 'One project per client, with its own instructions and files'], tr: ['İşini Projects ile düzenle', 'Her müşteri için talimat ve dosyalarıyla ayrı bir proje'] },
        { ar: ['وصّل Claude بتطبيقاتك', 'Gmail، Drive، Canva وغيرهن جوّا المحادثة'], en: ['Connect Claude to your apps', 'Gmail, Drive, Canva and more — right inside the chat'], tr: ['Claude\'u uygulamalarına bağla', 'Gmail, Drive, Canva ve dahası sohbetin içinde'] },
        { ar: ['خلّي Claude يتذكّرك', 'كل محادثة بتبلّش وهو بيعرف شغلك'], en: ['Let Claude remember you', 'Every chat starts with Claude already knowing your work'], tr: ['Claude seni hatırlasın', 'Her sohbet, işini zaten bilerek başlar'] },
        { ar: ['من فكرة لصفحة حيّة', 'اطلب صفحة أو أداة وشاركها برابط'], en: ['From idea to a live page', 'Ask for a page or tool and share it with a link'], tr: ['Fikirden canlı sayfaya', 'Bir sayfa ya da araç iste, bağlantıyla paylaş'] },
        { ar: ['بحث كامل بسؤال واحد', 'ساعات بحث صارت دقائق، مع المصادر'], en: ['Full research in one question', 'Hours of research in minutes, with sources'], tr: ['Tek soruyla kapsamlı araştırma', 'Saatlerce araştırma dakikalar içinde, kaynaklarıyla'] },
        { ar: ['ابني فريقك من السكيلات', 'استوديو كامل بشخص واحد: كل سكيل بدور'], en: ['Build a team from Skills', 'A full studio with one person — one Skill per role'], tr: ['Skill\'lerden ekibini kur', 'Tek kişiyle tam bir stüdyo — her rol için bir Skill'] },
        { ar: ['تقرير صباحي أوتوماتيك', 'كل يوم الصبح بيوصلك ملخص يومك جاهز'], en: ['Automatic morning report', 'A ready summary of your day, every morning'], tr: ['Otomatik sabah raporu', 'Her sabah gününün hazır özeti'] }
    ];
    const lang = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'ar');
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    const T = {
        ar: { series: 'سلسلة', name: 'كيف تشتغل مع Claude', count: '9 حلقات قصيرة · أقل من 30 ثانية للحلقة', open: 'شاهد السلسلة', ep: 'الحلقة', back: 'كل الحلقات' },
        en: { series: 'Series', name: 'How to work with Claude', count: '9 short episodes · under 30 seconds each', open: 'Watch the series', ep: 'Episode', back: 'All episodes' },
        tr: { series: 'Seri', name: 'Claude ile nasıl çalışılır', count: '9 kısa bölüm · her biri 30 saniyeden kısa', open: 'Seriyi izle', ep: 'Bölüm', back: 'Tüm bölümler' }
    };
    const tx = () => T[lang()] || T.ar;
    const num = i => String(i + 1).padStart(2, '0');

    function render() {
        const grid = document.getElementById('learnGrid'); if (!grid) return;
        const t = tx();
        const stack = [0, 1, 2].map(i => `<img src="${BASE}ep${i + 1}.jpg" alt="" loading="lazy" class="ls-${i}">`).join('');
        grid.innerHTML = `<button class="learn-folder" type="button">
            <span class="learn-stack" aria-hidden="true">${stack}<span class="learn-badge">9</span></span>
            <span class="learn-folder-meta"><span class="learn-ep">${t.series}</span>
            <span class="learn-folder-title">${esc(t.name)}</span><span class="learn-desc">${t.count}</span>
            <span class="learn-topics">${EP.map(e => `<span>${esc((e[lang()] || e.ar)[0])}</span>`).join('')}</span>
            <span class="cta-btn primary learn-open">${t.open} ▶</span></span></button>`;
        grid.querySelector('.learn-folder').addEventListener('click', () => openList());
        document.dispatchEvent(new CustomEvent('learn:rendered'));
    }

    function shell() {
        const m = document.createElement('div'); m.className = 'project-modal learn-modal';
        m.innerHTML = `<div class="modal-content"><button class="modal-close" aria-label="Close">&times;</button><div class="learn-body"></div></div>`;
        document.body.appendChild(m); m.style.display = 'flex';
        const close = () => { m.remove(); document.removeEventListener('keydown', key); };
        const key = e => { if (e.key === 'Escape') close(); };
        document.addEventListener('keydown', key);
        m.querySelector('.modal-close').addEventListener('click', close);
        m.addEventListener('click', e => { if (e.target === m) close(); });
        return m.querySelector('.learn-body');
    }

    function openList(body) {
        body = body || shell();
        const t = tx(), L = lang();
        body.innerHTML = `<h2>${esc(t.name)}</h2><p class="learn-desc" style="margin-bottom:18px">${t.count}</p>
            <div class="learn-list">${EP.map((e, i) => { const [ti, d] = e[L] || e.ar; return `<button class="learn-card" data-i="${i}" type="button">
            <span class="learn-thumb"><img src="${BASE}ep${i + 1}.jpg" alt="${esc(ti)}" loading="lazy"><span class="learn-play" aria-hidden="true">▶</span></span>
            <span class="learn-meta"><span class="learn-ep">${t.ep} ${num(i)}</span><span class="learn-title">${esc(ti)}</span><span class="learn-desc">${esc(d)}</span></span></button>`; }).join('')}</div>`;
        body.querySelectorAll('.learn-card').forEach(c => c.addEventListener('click', () => play(body, +c.dataset.i)));
        body.scrollTop = 0;
    }

    function play(body, i) {
        const t = tx(), [ti, d] = EP[i][lang()] || EP[i].ar;
        body.innerHTML = `<button class="filter-btn learn-back" type="button">‹ ${t.back}</button>
            <h2><span class="learn-ep">${t.ep} ${num(i)}</span><br>${esc(ti)}</h2><p class="learn-desc">${esc(d)}</p>
            <div class="project-gallery video"><video src="${BASE}ep${i + 1}.mp4" poster="${BASE}ep${i + 1}.jpg" controls autoplay playsinline preload="metadata"></video></div>
            <div class="learn-nav">${i > 0 ? `<button class="filter-btn" data-go="${i - 1}">‹ ${num(i - 1)}</button>` : '<span></span>'}
            ${i < EP.length - 1 ? `<button class="filter-btn" data-go="${i + 1}">${num(i + 1)} ›</button>` : '<span></span>'}</div>`;
        body.querySelector('.learn-back').addEventListener('click', () => openList(body));
        body.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => play(body, +b.dataset.go)));
        if (typeof trackEvent === 'function') trackEvent('view_tutorial', { episode: i + 1 });
    }

    document.addEventListener('DOMContentLoaded', render);
    document.addEventListener('click', e => { if (e.target.closest && e.target.closest('.lang-btn')) setTimeout(render, 30); });
})();
