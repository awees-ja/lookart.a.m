// "Learn with Look Art" — Claude tutorial series
(function () {
    const BASE = new URL('assets/learn/', document.baseURI).pathname;
    const EP = [
        { ar: ['ضيف سكيل لـ Claude', 'حوّل خبرتك لموظف بيشتغل بنفس الطريقة كل مرة'], en: ['Add a Skill to Claude', 'Turn your know-how into an assistant that works the same way every time'], tr: ['Claude\'a Skill ekle', 'Bilgini her seferinde aynı şekilde çalışan bir asistana dönüştür'] },
        { ar: ['خلّي Claude يشتغل على موعد', 'مهام متكررة بتشتغل لحالها بالوقت اللي بتحدده'], en: ['Schedule Claude tasks', 'Recurring tasks that run on their own, on your schedule'], tr: ['Claude görevlerini zamanla', 'Belirlediğin saatte kendiliğinden çalışan görevler'] },
        { ar: ['رتّب شغلك بـ Projects', 'كل عميل بمشروع لحاله، بتعليماته وملفاته'], en: ['Organise work with Projects', 'One project per client, with its own instructions and files'], tr: ['İşini Projects ile düzenle', 'Her müşteri için talimat ve dosyalarıyla ayrı bir proje'] },
        { ar: ['وصّل Claude بتطبيقاتك', 'Gmail وDrive وCanva وغيرهن جوّا المحادثة'], en: ['Connect Claude to your apps', 'Gmail, Drive, Canva and more — right inside the chat'], tr: ['Claude\'u uygulamalarına bağla', 'Gmail, Drive, Canva ve dahası sohbetin içinde'] },
        { ar: ['خلّي Claude يتذكّرك', 'كل محادثة بتبلّش وهو بيعرف شغلك'], en: ['Let Claude remember you', 'Every chat starts with Claude already knowing your work'], tr: ['Claude seni hatırlasın', 'Her sohbet, işini zaten bilerek başlar'] },
        { ar: ['من فكرة لصفحة حيّة', 'اطلب صفحة أو أداة وشاركها برابط'], en: ['From idea to a live page', 'Ask for a page or tool and share it with a link'], tr: ['Fikirden canlı sayfaya', 'Bir sayfa ya da araç iste, bağlantıyla paylaş'] },
        { ar: ['بحث كامل بسؤال واحد', 'ساعات بحث صارت دقائق، مع المصادر'], en: ['Full research in one question', 'Hours of research in minutes, with sources'], tr: ['Tek soruyla kapsamlı araştırma', 'Saatlerce araştırma dakikalar içinde, kaynaklarıyla'] },
        { ar: ['ابني فريقك من السكيلات', 'استوديو كامل بشخص واحد: كل سكيل بدور'], en: ['Build a team from Skills', 'A full studio with one person — one Skill per role'], tr: ['Skill\'lerden ekibini kur', 'Tek kişiyle tam bir stüdyo — her rol için bir Skill'] },
        { ar: ['تقرير صباحي أوتوماتيك', 'كل يوم الصبح بيوصلك ملخص يومك جاهز'], en: ['Automatic morning report', 'A ready summary of your day, every morning'], tr: ['Otomatik sabah raporu', 'Her sabah gününün hazır özeti'] }
    ];
    const lang = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'ar');
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    function render() {
        const grid = document.getElementById('learnGrid'); if (!grid) return;
        const L = lang(), ep = (L === 'tr' ? 'Bölüm' : L === 'en' ? 'Episode' : 'الحلقة');
        grid.innerHTML = EP.map((e, i) => {
            const [t, d] = e[L] || e.ar;
            return `<button class="learn-card" data-i="${i}" type="button">
                <span class="learn-thumb"><img src="${BASE}ep${i + 1}.jpg" alt="${esc(t)}" loading="lazy"><span class="learn-play" aria-hidden="true">▶</span></span>
                <span class="learn-meta"><span class="learn-ep">${ep} ${String(i + 1).padStart(2, '0')}</span>
                <span class="learn-title">${esc(t)}</span><span class="learn-desc">${esc(d)}</span></span></button>`;
        }).join('');
        grid.querySelectorAll('.learn-card').forEach(c => c.addEventListener('click', () => open(+c.dataset.i)));
        document.dispatchEvent(new CustomEvent('learn:rendered'));
    }

    function open(i) {
        const L = lang(), [t] = EP[i][L] || EP[i].ar;
        const m = document.createElement('div'); m.className = 'project-modal learn-modal';
        m.innerHTML = `<div class="modal-content"><button class="modal-close" aria-label="Close">&times;</button>
            <h2>${esc(t)}</h2><div class="project-gallery video"><video src="${BASE}ep${i + 1}.mp4" poster="${BASE}ep${i + 1}.jpg" controls autoplay playsinline preload="metadata"></video></div>
            <div class="learn-nav">${i > 0 ? `<button class="filter-btn" data-go="${i - 1}">‹ ${String(i).padStart(2, '0')}</button>` : '<span></span>'}
            ${i < EP.length - 1 ? `<button class="filter-btn" data-go="${i + 1}">${String(i + 2).padStart(2, '0')} ›</button>` : '<span></span>'}</div></div>`;
        document.body.appendChild(m); m.style.display = 'flex';
        const close = () => { m.remove(); document.removeEventListener('keydown', key); };
        const key = e => { if (e.key === 'Escape') close(); };
        document.addEventListener('keydown', key);
        m.querySelector('.modal-close').addEventListener('click', close);
        m.addEventListener('click', e => { if (e.target === m) close(); });
        m.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { close(); open(+b.dataset.go); }));
        if (typeof trackEvent === 'function') trackEvent('view_tutorial', { episode: i + 1 });
    }

    document.addEventListener('DOMContentLoaded', render);
    document.addEventListener('click', e => { if (e.target.closest && e.target.closest('.lang-btn')) setTimeout(render, 30); });
})();
