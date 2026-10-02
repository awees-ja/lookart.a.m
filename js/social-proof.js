/* ==========================================================================
   Social Proof — client logos strip + testimonials
   --------------------------------------------------------------------------
   The whole section stays HIDDEN until you add data below, so no placeholder
   ever shows on the live site. Fill the two arrays, upload, done.

   LOGOS  -> put image files in  assets/clients/  (SVG or PNG with transparent
             background, ideally ~300x120). Then add:
             { name: 'Bodo Coffeehouse', src: 'assets/clients/bodo.svg' }
             optional:  url: 'https://client-site.com'

   TESTIMONIALS -> text in any of ar / en / tr. A missing language falls back
             to the first one provided, so you can start with just one.
             {
               quote: { ar: '…', en: '…', tr: '…' },
               name:  'اسم العميل',
               role:  { ar: 'المدير العام', en: 'General Manager', tr: 'Genel Müdür' },
               company: 'Bodo Coffeehouse',
               project: 'Bodo Coffeehouse'   // optional: exact key in portfolioData -> adds a "view project" link
             }
   ========================================================================== */
const SOCIAL_PROOF = {
    logos: [
        // { name: 'Client name', src: 'assets/clients/client.svg' },
    ],
    testimonials: [
        // { quote: { ar: '' }, name: '', role: { ar: '' }, company: '', project: '' },
    ]
};

(function () {
    const pick = (obj, lang) => {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj[lang] || obj.ar || obj.en || obj.tr || '';
    };
    const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const QUOTE_ICO = '<svg class="proof-quote-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.2 6C4.9 6 3 7.9 3 10.2V18h7.2v-7.8H6.6c0-1.1.9-2 2-2V6h-1.4zm9.6 0c-2.3 0-4.2 1.9-4.2 4.2V18h7.2v-7.8h-3.6c0-1.1.9-2 2-2V6h-1.4z"/></svg>';

    window.renderSocialProof = function (lang) {
        lang = lang || (typeof currentLanguage !== 'undefined' ? currentLanguage : 'ar');
        const section = document.getElementById('proof');
        if (!section) return;
        const logos = SOCIAL_PROOF.logos || [];
        const tests = SOCIAL_PROOF.testimonials || [];
        const logosBox = document.getElementById('proofLogos');
        const testBox = document.getElementById('proofTestimonials');

        if (!logos.length && !tests.length) { section.hidden = true; return; }
        section.hidden = false;

        // --- logos strip ---
        logosBox.innerHTML = '';
        logosBox.hidden = !logos.length;
        if (logos.length) {
            const tile = (l) => {
                const img = `<img src="${esc(l.src)}" alt="${esc(l.name)}" loading="lazy">`;
                return l.url
                    ? `<a class="proof-logo" href="${esc(l.url)}" target="_blank" rel="noopener" aria-label="${esc(l.name)}">${img}</a>`
                    : `<div class="proof-logo">${img}</div>`;
            };
            // Few logos: static centred row. Many: seamless marquee (set duplicated once).
            const marquee = logos.length >= 6;
            const items = logos.map(tile).join('');
            logosBox.innerHTML = `
                <p class="proof-label">${esc(t('proof.logos.label', lang))}</p>
                <div class="proof-logos${marquee ? ' is-marquee' : ''}">
                    <div class="proof-track">${items}${marquee ? items.replace(/<a /g, '<a tabindex="-1" aria-hidden="true" ').replace(/class="proof-logo"/g, 'class="proof-logo" aria-hidden="true"') : ''}</div>
                </div>`;
        }

        // --- testimonials ---
        testBox.innerHTML = '';
        testBox.hidden = !tests.length;
        if (tests.length) {
            const cards = tests.map((x, i) => {
                const name = esc(x.name || '');
                const role = esc(pick(x.role, lang));
                const meta = [role, esc(x.company || '')].filter(Boolean).join(' · ');
                const avatar = x.avatar
                    ? `<img class="proof-avatar" src="${esc(x.avatar)}" alt="" loading="lazy">`
                    : `<span class="proof-avatar proof-avatar-letter" aria-hidden="true">${esc((x.name || x.company || '?').trim().charAt(0).toUpperCase())}</span>`;
                const link = x.project && typeof portfolioData !== 'undefined' && portfolioData[x.project]
                    ? `<button type="button" class="proof-link" data-proof-project="${i}">${esc(t('proof.viewProject', lang))}</button>` : '';
                return `
                <figure class="proof-card">
                    ${QUOTE_ICO}
                    <blockquote>${esc(pick(x.quote, lang))}</blockquote>
                    <figcaption>
                        ${avatar}
                        <span class="proof-who"><strong>${name}</strong>${meta ? `<small>${meta}</small>` : ''}</span>
                    </figcaption>
                    ${link}
                </figure>`;
            }).join('');
            testBox.innerHTML = `
                <p class="proof-label">${esc(t('proof.testimonials.label', lang))}</p>
                <div class="proof-grid">${cards}</div>`;
            testBox.querySelectorAll('[data-proof-project]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const key = tests[Number(btn.getAttribute('data-proof-project'))].project;
                    if (typeof showProjectDetails === 'function') showProjectDetails(key, portfolioData[key], lang);
                });
            });
        }
    };

    document.addEventListener('DOMContentLoaded', () => window.renderSocialProof());
})();
