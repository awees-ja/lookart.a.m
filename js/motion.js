// Look Art — motion layer: reveals, scroll progress, nav state, card tilt, magnetic buttons, timeline draw.
(function () {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const root = document.documentElement;
    root.classList.add('motion-ready');
    if (reduce) root.classList.add('reduce-motion');

    /* ---------- Hero entrance (split title into lines) ---------- */
    const hero = document.querySelector('.hero');
    if (hero) requestAnimationFrame(() => setTimeout(() => hero.classList.add('is-in'), 60));

    /* ---------- Scroll reveal ---------- */
    const groups = [
        ['.section-title', 0], ['.section-subtitle', 0], ['.about-content p', 90], ['.feature', 90],
        ['.portfolio-filters', 0], ['.service-card', 80], ['.timeline-item', 110],
        ['.info-card', 80], ['.learn-folder', 0], ['.contact-form-wrapper', 0], ['.footer-section', 90]
    ];
    const io = reduce ? null : new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    function arm(sel, step) {
        document.querySelectorAll(sel).forEach((el, i) => {
            if (el.dataset.rv) return;
            el.dataset.rv = '1';
            if (reduce) return;
            el.classList.add('rv');
            el.style.setProperty('--d', ((i % 6) * step) + 'ms');
            io.observe(el);
        });
    }
    groups.forEach(([s, t]) => arm(s, t));
    document.addEventListener('learn:rendered', () => arm('.learn-folder', 0));

    /* ---------- Portfolio cards: stagger on every render/filter ---------- */
    function armCards() {
        document.querySelectorAll('.portfolio-item').forEach((el, i) => {
            if (reduce) return;
            el.classList.remove('in'); el.classList.add('rv', 'rv-card');
            el.style.setProperty('--d', ((i % 3) * 90 + Math.floor(i / 3) % 2 * 40) + 'ms');
            io.observe(el);
            if (fine) tilt(el);
        });
    }
    document.addEventListener('portfolio:rendered', () => requestAnimationFrame(armCards));
    armCards();

    /* ---------- Card tilt + light follow (desktop) ---------- */
    function tilt(card) {
        if (card.dataset.tilt) return; card.dataset.tilt = '1';
        card.addEventListener('pointermove', (e) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
            card.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg');
            card.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
            card.style.setProperty('--mx', ((x + .5) * 100).toFixed(1) + '%');
            card.style.setProperty('--my', ((y + .5) * 100).toFixed(1) + '%');
        });
        card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
    }

    /* ---------- Magnetic buttons ---------- */
    if (fine && !reduce) document.querySelectorAll('.cta-btn, .whatsapp-floating').forEach(btn => {
        btn.addEventListener('pointermove', (e) => {
            const r = btn.getBoundingClientRect();
            btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .25}px)`;
        });
        btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });

    /* ---------- Scroll progress, nav state, hero parallax, timeline draw ---------- */
    const bar = document.createElement('div'); bar.className = 'scroll-progress'; document.body.appendChild(bar);
    const nav = document.querySelector('.navbar');
    const timeline = document.querySelector('.timeline');
    const orbs = document.querySelectorAll('.hero-orb');
    function placeLine() {
        if (!timeline) return;
        const ms = timeline.querySelectorAll('.timeline-marker'); if (ms.length < 2) return;
        const t = timeline.getBoundingClientRect(), a = ms[0].getBoundingClientRect(), z = ms[ms.length - 1].getBoundingClientRect();
        timeline.style.setProperty('--lx', (a.left + a.width / 2 - t.left) + 'px');
        timeline.style.setProperty('--lt', (a.top + a.height / 2 - t.top) + 'px');
        timeline.style.setProperty('--lh', (z.top - a.top) + 'px');
    }
    placeLine(); addEventListener('resize', placeLine); addEventListener('load', placeLine);
    let ticking = false;
    function onScroll() {
        const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        if (nav) nav.classList.toggle('scrolled', y > 30);
        if (!reduce) orbs.forEach((o, i) => { o.style.translate = `0 ${y * (i ? .18 : .32)}px`; });
        if (timeline) {
            const r = timeline.getBoundingClientRect();
            const p = Math.min(1, Math.max(0, (innerHeight * .75 - r.top) / r.height));
            timeline.style.setProperty('--draw', p.toFixed(3));
        }
        ticking = false;
    }
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
})();
